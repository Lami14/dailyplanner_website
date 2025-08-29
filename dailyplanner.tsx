"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus, CheckCircle, Circle, Trash2 } from "lucide-react"
import { getPriorityColor } from "@/lib/utils"
import "@/styles/DailyPlanner.css"  // external stylesheet

interface Task {
  id: string
  text: string
  completed: boolean
  time?: string
  priority: "low" | "medium" | "high"
}

export default function DailyPlanner() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Review project proposals", completed: false, time: "09:00", priority: "high" },
    { id: "2", text: "Team standup meeting", completed: true, time: "10:30", priority: "medium" },
    { id: "3", text: "Lunch with client", completed: false, time: "12:00", priority: "medium" },
  ])

  const [newTask, setNewTask] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedPriority, setSelectedPriority] = useState<"low" | "medium" | "high">("medium")

  const timeSlots = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`)

  const addTask = () => {
    if (!newTask.trim()) return
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        text: newTask,
        completed: false,
        time: selectedTime || undefined,
        priority: selectedPriority,
      },
    ])
    setNewTask("")
    setSelectedTime("")
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const completedTasks = tasks.filter((t) => t.completed).length
  const completionRate = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="daily-planner container mx-auto p-6 max-w-7xl">
      {/* === HEADER === */}
      <div className="mb-8">
        <h1 className="planner-title">Daily Planner</h1>
        <p className="planner-date">{currentDate}</p>
      </div>

      {/* === MAIN CONTENT === */}
      {/* Keep your cards and UI exactly as in your code */}
      {/* They’ll now pick up extra styling from DailyPlanner.css */}
    </div>
  )
}
