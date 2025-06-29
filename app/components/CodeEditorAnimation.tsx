"use client"

import { useEffect, useRef } from "react"

export default function CodeEditorAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match the container
    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (container) {
        // Set a fixed aspect ratio to ensure content fits
        const width = Math.min(500, container.clientWidth)
        const height = Math.min(400, width * 0.8)

        canvas.width = width
        canvas.height = height

        // Update canvas style dimensions
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
      }
    }

    // Initial size update
    updateCanvasSize()

    // Listen for resize events
    window.addEventListener("resize", updateCanvasSize)

    // Colors
    const colors = {
      background: "#0f172a", // Darker background
      text: "#e2e8f0",
      comment: "#94a3b8",
      keyword: "#8b5cf6",
      string: "#10b981",
      function: "#3b82f6",
      variable: "#f59e0b",
      cursor: "#f8fafc",
      class: "#ec4899",
      property: "#06b6d4",
    }

    // PHP OOP Code lines
    const codeLines = [
      { text: "<?php", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "// Portfolio Management System", color: colors.comment },
      { text: "namespace App\\Models;", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "class Portfolio", color: colors.class },
      { text: "{", color: colors.text },
      { text: "    private string $name;", color: colors.property },
      { text: "    private array $projects = [];", color: colors.property },
      { text: "    private array $skills = [];", color: colors.property },
      { text: "", color: colors.text },
      { text: "    public function __construct(string $name)", color: colors.function },
      { text: "    {", color: colors.text },
      { text: "        $this->name = $name;", color: colors.variable },
      { text: "    }", color: colors.text },
      { text: "", color: colors.text },
      { text: "    public function addProject(Project $project): void", color: colors.function },
      { text: "    {", color: colors.text },
      { text: "        $this->projects[] = $project;", color: colors.variable },
      { text: "    }", color: colors.text },
      { text: "", color: colors.text },
      { text: "    public function getProjects(): array", color: colors.function },
      { text: "    {", color: colors.text },
      { text: "        return $this->projects;", color: colors.variable },
      { text: "    }", color: colors.text },
      { text: "", color: colors.text },
      { text: "    public function addSkill(string $skill): self", color: colors.function },
      { text: "    {", color: colors.text },
      { text: "        if (!in_array($skill, $this->skills)) {", color: colors.keyword },
      { text: "            $this->skills[] = $skill;", color: colors.variable },
      { text: "        }", color: colors.text },
      { text: "        return $this;", color: colors.keyword },
      { text: "    }", color: colors.text },
      { text: "", color: colors.text },
      { text: "    public function displayInfo(): string", color: colors.function },
      { text: "    {", color: colors.text },
      { text: '        return "Portfolio: {$this->name}";', color: colors.string },
      { text: "    }", color: colors.text },
      { text: "}", color: colors.text },
      { text: "", color: colors.text },
      { text: "// Usage", color: colors.comment },
      { text: "$portfolio = new Portfolio('Yassine');", color: colors.variable },
      { text: "$portfolio->addSkill('PHP')->addSkill('Laravel');", color: colors.variable },
    ]

    // Animation variables
    let currentLine = 0
    let currentChar = 0
    let cursorVisible = true
    let lastTime = 0
    let cursorBlinkTime = 0

    // Draw code editor
    const drawEditor = () => {
      if (!ctx) return

      // Get current dimensions
      const width = canvas.width
      const height = canvas.height

      // Scale factors based on canvas size
      const scaleFactor = width / 500 // Base scale on a 500px reference width
      const lineHeight = 16 * scaleFactor
      const startX = 40 * scaleFactor
      const startY = 30 * scaleFactor
      const tabSize = 20 * scaleFactor
      const fontSize = 12 * scaleFactor

      // Clear canvas
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, width, height)

      // Draw line numbers background
      ctx.fillStyle = "#0a0f1c" // Even darker background for line numbers
      ctx.fillRect(0, 0, startX - 10 * scaleFactor, height)

      // Draw code lines
      for (let i = 0; i < Math.min(currentLine + 1, codeLines.length); i++) {
        // Safety check to prevent accessing beyond array bounds
        if (i >= codeLines.length) continue

        // Draw line number
        ctx.fillStyle = "#64748b"
        ctx.font = `${fontSize}px monospace`
        ctx.textAlign = "right"
        ctx.fillText(`${i + 1}`, startX - 15 * scaleFactor, startY + i * lineHeight)

        // Draw code text
        if (i < currentLine && i < codeLines.length) {
          // Completed lines
          ctx.fillStyle = codeLines[i].color
          ctx.font = `${fontSize}px monospace`
          ctx.textAlign = "left"

          // Handle indentation
          let indentLevel = 0
          if (codeLines[i].text.startsWith("    ")) {
            indentLevel = Math.floor(codeLines[i].text.match(/^\s+/)?.[0].length || 0) / 4
          }

          ctx.fillText(codeLines[i].text, startX + indentLevel * tabSize, startY + i * lineHeight)
        } else if (i === currentLine && i < codeLines.length) {
          // Current line (typing)
          const currentText = codeLines[i].text.substring(0, currentChar)
          ctx.fillStyle = codeLines[i].color
          ctx.font = `${fontSize}px monospace`
          ctx.textAlign = "left"

          // Handle indentation
          let indentLevel = 0
          if (codeLines[i].text.startsWith("    ")) {
            indentLevel = Math.floor(codeLines[i].text.match(/^\s+/)?.[0].length || 0) / 4
          }

          ctx.fillText(currentText, startX + indentLevel * tabSize, startY + i * lineHeight)

          // Draw cursor
          if (cursorVisible) {
            const cursorX = startX + indentLevel * tabSize + ctx.measureText(currentText).width
            ctx.fillStyle = colors.cursor
            ctx.fillRect(cursorX, startY + i * lineHeight - lineHeight + 3 * scaleFactor, 2 * scaleFactor, lineHeight)
          }
        }
      }
    }

    // Animation loop using requestAnimationFrame instead of setInterval
    const animate = (time: number) => {
      // Calculate delta time
      const deltaTime = time - lastTime
      lastTime = time

      // Handle cursor blinking
      cursorBlinkTime += deltaTime
      if (cursorBlinkTime > 500) {
        cursorVisible = !cursorVisible
        cursorBlinkTime = 0
      }

      // Handle typing (every 50ms)
      if (deltaTime > 10) {
        if (currentLine < codeLines.length) {
          if (currentChar < codeLines[currentLine].text.length) {
            currentChar++
          } else {
            currentLine++
            currentChar = 0
          }
        } else {
          // Reset animation
          currentLine = 0
          currentChar = 0
        }
      }

      drawEditor()
      requestAnimationFrame(animate)
    }

    // Start animation
    drawEditor()
    requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 rounded-t-lg flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-400 mx-auto">Portfolio.php</div>
      </div>
      <canvas
        ref={canvasRef}
        className="rounded-lg shadow-2xl border border-slate-700 w-full"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      />
    </div>
  )
}
