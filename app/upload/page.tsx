"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, X, Loader2, CheckCircle2, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    if (selectedFiles.length > 0) {
      const newFiles = [...files, ...selectedFiles].slice(0, 3)
      setFiles(newFiles)

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
      setPreviews(newPreviews)
    }
  }

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)
    setFiles(newFiles)
    setPreviews(newPreviews)
  }

  const handleAnalyze = async () => {
    if (files.length === 0) return

    setIsAnalyzing(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setIsAnalyzing(false)

    if (previews.length > 0) {
      sessionStorage.setItem("uploadedImage", previews[0])
    }
    router.push("/analysis-result")
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>AI 분석 시작</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">사진 한 장으로 시작하세요</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              방 한쪽에 팔고 싶은 물건을 모아 사진을 찍어주세요
              <br />
              AI가 자동으로 분석하고 최적의 방법을 제안합니다
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-xl">
            <div className="space-y-8">
              {/* Upload Area */}
              <div>
                <label
                  htmlFor="file-upload"
                  className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                    files.length > 0
                      ? "border-primary bg-primary/10 shadow-inner"
                      : "border-border hover:border-primary hover:bg-accent hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                    <p className="mb-2 text-sm text-foreground font-medium">
                      <span className="font-semibold">클릭하여 업로드</span> 또는 드래그 앤 드롭
                    </p>
                    <p className="text-xs text-muted-foreground">최대 3장까지 업로드 가능 (JPG, PNG)</p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    disabled={files.length >= 3}
                  />
                </label>
              </div>

              {/* Preview Images */}
              {previews.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={20} />
                    업로드된 사진 ({files.length}/3)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {previews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg border-2 border-border group-hover:border-primary transition-colors"
                        />
                        <button
                          onClick={() => removeFile(index)}
                          className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                          aria-label="삭제"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructions */}
              <div className="bg-gradient-to-br from-accent/50 to-accent/20 rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="text-primary" size={20} />
                  촬영 팁
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>물건이 잘 보이도록 밝은 곳에서 촬영해주세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>정리하지 않아도 괜찮아요. 있는 그대로 찍어주세요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>여러 각도에서 찍으면 더 정확한 분석이 가능합니다</span>
                  </li>
                </ul>
              </div>

              {/* Analyze Button */}
              <Button
                onClick={handleAnalyze}
                disabled={files.length === 0 || isAnalyzing}
                size="lg"
                className="w-full rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    AI가 분석 중입니다...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={20} />
                    분석 시작하기
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
