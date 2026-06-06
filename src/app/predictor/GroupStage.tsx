'use client'

import { usePredictorStore } from '@/store/predictorStore'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FlagImage } from '@/components/flag-image'

function SortableTeam({ team, index }: { team: any, index: number }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: team.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex items-center gap-4 p-3.5 mb-2.5 rounded-xl border bg-card/60 backdrop-blur-xs text-card-foreground cursor-grab active:cursor-grabbing hover:bg-muted/40 hover:border-primary/30 transition-all duration-200 touch-none select-none shadow-xs hover:shadow-md ${
        index < 2 
          ? 'border-l-4 border-l-emerald-500 bg-emerald-500/5' 
          : index === 2 
            ? 'border-l-4 border-l-amber-500 bg-amber-500/5' 
            : 'border-l-4 border-l-red-500/30 bg-red-500/2'
      }`}
    >
      <div className="font-black text-sm w-5 text-center text-muted-foreground">{index + 1}</div>
      <FlagImage code={team.flag_url || team.code} className="w-8 h-5 shadow-sm shrink-0" />
      <div className="font-semibold text-sm flex-1">{team.name}</div>
      <div className="text-xs font-mono text-muted-foreground font-semibold px-2 py-0.5 bg-muted rounded-md uppercase">
        {team.code}
      </div>
    </div>
  )
}

export function GroupStage() {
  const { availableGroups, groupRankings, reorderGroup } = usePredictorStore()
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Requires a 5px drag to start, fixes clicks and scroll issues
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  if (!availableGroups.length) return <div className="text-center py-20">Loading groups...</div>

  // Handle drag end for the global context
  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over || active.id === over.id) return

    // Find which group this item belongs to
    for (const group of availableGroups) {
      const teams = groupRankings[group.id] || []
      const oldIndex = teams.findIndex((t) => t.id === active.id)
      const newIndex = teams.findIndex((t) => t.id === over.id)
      
      // If both active and over are in the same group, reorder
      if (oldIndex !== -1 && newIndex !== -1) {
        reorderGroup(group.id, active.id as string, over.id as string)
        break;
      }
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {availableGroups.map((group) => {
          const teams = groupRankings[group.id] || []
          
          return (
            <Card key={group.id} className="overflow-hidden border border-border/40 bg-card/30 backdrop-blur-md shadow-lg hover:shadow-emerald-500/5 hover:border-emerald-500/20 transition-all duration-300 rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10 border-b border-border/30 pb-3">
                <CardTitle className="text-center font-black text-md tracking-widest text-emerald-400">GROUP {group.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 bg-transparent">
                <SortableContext items={teams.map(t => t.id)} strategy={verticalListSortingStrategy}>
                  {teams.map((team, index) => (
                    <SortableTeam key={team.id} team={team} index={index} />
                  ))}
                </SortableContext>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </DndContext>
  )
}
