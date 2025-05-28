"use client"

import { useEffect, useRef } from "react"

export default function SpartaCodeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 200

    // Colors
    const colors = {
      background: "#0f172a",
      text: "#e2e8f0",
      comment: "#94a3b8",
      keyword: "#8b5cf6",
      string: "#10b981",
      function: "#3b82f6",
      variable: "#f59e0b",
      cursor: "#f8fafc",
      highlight: "#4f46e5",
    }

    // Code lines - Sparta algorithm theme
    const codeLines = [
      { text: "// Ghost of Sparta Algorithm", color: colors.comment },
      { text: "function breakCycle(path) {", color: colors.function },
      { text: "  const visited = new Set();", color: colors.variable },
      { text: "  const sparta = {", color: colors.variable },
      { text: "    strength: 100,", color: colors.variable },
      { text: "    rage: 0", color: colors.variable },
      { text: "  };", color: colors.variable },
      { text: "", color: colors.text },
      { text: "  while (path.length > 0) {", color: colors.keyword },
      { text: "    const node = path.shift();", color: colors.variable },
      { text: "    if (visited.has(node)) {", color: colors.keyword },
      { text: "      console.log('Cycle detected');", color: colors.function },
      { text: "      sparta.rage += 10;", color: colors.variable },
      { text: "    }", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "    if (sparta.rage > 50) {", color: colors.keyword },
      { text: "      return 'CYCLE BROKEN';", color: colors.string },
      { text: "    }", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "    visited.add(node);", color: colors.function },
      { text: "  }", color: colors.keyword },
      { text: "  return 'Path completed';", color: colors.string },
      { text: "}", color: colors.function },
            { text: "// Ghost of Sparta Algorithm", color: colors.comment },
      { text: "function breakCycle(path) {", color: colors.function },
      { text: "  const visited = new Set();", color: colors.variable },
      { text: "  const sparta = {", color: colors.variable },
      { text: "    strength: 100,", color: colors.variable },
      { text: "    rage: 0", color: colors.variable },
      { text: "  };", color: colors.variable },
      { text: "", color: colors.text },
      { text: "  while (path.length > 0) {", color: colors.keyword },
      { text: "    const node = path.shift();", color: colors.variable },
      { text: "    if (visited.has(node)) {", color: colors.keyword },
      { text: "      console.log('Cycle detected');", color: colors.function },
      { text: "      sparta.rage += 10;", color: colors.variable },
      { text: "    }", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "    if (sparta.rage > 50) {", color: colors.keyword },
      { text: "      return 'CYCLE BROKEN';", color: colors.string },
      { text: "    }", color: colors.keyword },
      { text: "", color: colors.text },
      { text: "    visited.add(node);", color: colors.function },
      { text: "  }", color: colors.keyword },
      { text: "  return 'Path completed';", color: colors.string },
      { text: "}", color: colors.function },
    ]

    // Animation variables
    let currentLine = 0
    let currentChar = 0
    let cursorVisible = true
    let lastTime = 0
    let cursorBlinkTime = 0
    let highlightLine = -1
    let highlightOpacity = 0

    // Draw code editor
    const drawEditor = () => {
      if (!ctx) return

      // Clear canvas
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw line numbers background
      ctx.fillStyle = "#0a0f1c"
      ctx.fillRect(0, 0, 30, canvas.height)

      // Line height and starting position
      const lineHeight = 16
      const startX = 35
      const startY = 20

      // Draw code lines
      for (let i = 0; i < Math.min(currentLine + 1, codeLines.length); i++) {
        // Draw line number
        ctx.fillStyle = "#64748b"
        ctx.font = "12px monospace"
        ctx.textAlign = "right"
        ctx.fillText(`${i + 1}`, 25, startY + i * lineHeight)

        // Highlight the current execution line
        if (i === highlightLine) {
          ctx.fillStyle = `rgba(79, 70, 229, ${highlightOpacity * 0.2})`
          ctx.fillRect(30, startY + i * lineHeight - lineHeight + 2, canvas.width - 30, lineHeight)
        }

        // Draw code text
        if (i < currentLine && i < codeLines.length) {
          // Completed lines
          ctx.fillStyle = codeLines[i].color
          ctx.font = "12px monospace"
          ctx.textAlign = "left"

          // Handle indentation
          let indentLevel = 0
          if (codeLines[i].text.startsWith("  ")) {
            indentLevel = Math.floor(codeLines[i].text.match(/^\s+/)?.[0].length || 0) / 2
          }

          ctx.fillText(codeLines[i].text, startX + indentLevel * 10, startY + i * lineHeight)
        } else if (i === currentLine && i < codeLines.length) {
          // Current line (typing)
          const currentText = codeLines[i].text.substring(0, currentChar)
          ctx.fillStyle = codeLines[i].color
          ctx.font = "12px monospace"
          ctx.textAlign = "left"

          // Handle indentation
          let indentLevel = 0
          if (codeLines[i].text.startsWith("  ")) {
            indentLevel = Math.floor(codeLines[i].text.match(/^\s+/)?.[0].length || 0) / 2
          }

          ctx.fillText(currentText, startX + indentLevel * 10, startY + i * lineHeight)

          // Draw cursor
          if (cursorVisible) {
            const cursorX = startX + indentLevel * 10 + ctx.measureText(currentText).width
            ctx.fillStyle = colors.cursor
            ctx.fillRect(cursorX, startY + i * lineHeight - lineHeight + 3, 2, lineHeight)
          }
        }
      }
    }

    // Animation loop
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
      if (deltaTime > 50) {
        if (currentLine < codeLines.length) {
          if (currentChar < codeLines[currentLine].text.length) {
            currentChar++
          } else {
            currentLine++
            currentChar = 0
          }
        } else {
          // Animation completed, start highlighting lines
          if (highlightLine === -1) {
            highlightLine = 8 // Start with the while loop
          } else {
            highlightOpacity += 0.01
            if (highlightOpacity >= 1) {
              highlightOpacity = 0
              highlightLine = (highlightLine + 1) % codeLines.length
              if (highlightLine < 8) highlightLine = 8 // Keep in the algorithm section
            }
          }
        }
      }

      drawEditor()
      requestAnimationFrame(animate)
    }

    // Start animation
    requestAnimationFrame(animate)

    // Cleanup
    return () => {
      // No cleanup needed for this animation
    }
  }, [])

  return ( 
    <div className="relative w-full max-w-[300px] mx-auto">
      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 rounded-t-lg flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-slate-400 mx-auto">sparta-algorithm.js</div>
      </div>
      <canvas
        ref={canvasRef}
        className="rounded-lg shadow-2xl border border-slate-700 w-full"
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      />
    </div>
  )
}
