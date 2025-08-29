export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 text-white"
    case "medium":
      return "bg-gradient-to-r from-pink-200 to-rose-200 text-pink-800"
    case "low":
      return "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700"
    default:
      return "bg-muted text-muted-foreground"
  }
}
