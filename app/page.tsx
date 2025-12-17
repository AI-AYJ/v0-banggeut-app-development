import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Camera, Sparkles, TrendingUp, MessageSquare, CheckCircle2, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent/50 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Sparkles size={16} />
            <span>비움을 쉽게, 방끗</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            사진 한 장으로
            <br />방 비우기를 끝내세요
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            이사·종강 시즌, 물건 정리부터 실전 정리 가이드까지
            <br />한 번에 끝내는 방 비우기 체크아웃 서비스
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full text-lg px-8 shadow-lg hover:shadow-xl transition-all">
              <Link href="/upload">
                <Camera className="mr-2" size={20} />
                사진 한 장으로 시작하기
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full text-lg px-8 bg-transparent shadow-sm hover:shadow-md transition-all"
            >
              <Link href="/how-it-works">
                사용방법 보기
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">이런 순간, 너무 익숙하지 않나요?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card">
              <div className="text-6xl mb-4">😫</div>
              <h3 className="text-xl font-semibold mb-3">종강하거나 이사 가기 직전</h3>
              <p className="text-muted-foreground leading-relaxed">
                방 한쪽에 쌓인 자잘한 물건들
                <br />
                행거, 멀티탭, 세제 반 통, 거울...
              </p>
            </Card>

            <Card className="p-8 bg-card">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold mb-3">가져가자니 짐, 버리자니 아까움</h3>
              <p className="text-muted-foreground leading-relaxed">
                중고거래 앱에 하나씩 올리기 귀찮아서 포기
                <br />
                결국 멀쩡한 물건을 그냥 폐기
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-primary">
              "정리가 어려운 게 아니라 비우는 과정이 너무 번거로운 겁니다."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>방끗의 해결 방식</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">사진 한 장으로 방 비우기 끝</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              방끗은 중고 거래 앱이 아니라 방을 비우는 앱입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "STEP 1",
                title: "정리 존 만들기",
                description: "방 한쪽에 버릴지 애매한 물건만 모아주세요",
                icon: "📦",
              },
              {
                step: "STEP 2",
                title: "사진 1~3장 업로드",
                description: "정리하지 마세요. 그냥 찍으세요",
                icon: "📸",
              },
              {
                step: "STEP 3",
                title: "AI 자동 분류",
                description: "판매/기부/폐기 자동으로 처리합니다",
                icon: "🤖",
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center bg-card hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-sm font-semibold text-primary mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Member Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              <span>회원 전용 혜택</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">더 많은 혜택을 누리세요</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              방끗에서는 모든 사용자가 수수료 없이 이용할 수 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white border-2 border-primary/20 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">회원 (무료)</h3>
                  <p className="text-muted-foreground">가입만 하면 모든 혜택을 누리세요</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">거래 수수료 0%</p>
                    <p className="text-sm text-muted-foreground">판매 금액 100% 모두 가져가세요</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">무제한 물건 등록</p>
                    <p className="text-sm text-muted-foreground">개수 제한 없이 등록 가능</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">판매 내역 관리</p>
                    <p className="text-sm text-muted-foreground">내 판매 이력을 한눈에 확인</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">커뮤니티 참여</p>
                    <p className="text-sm text-muted-foreground">내 꿀팁 공유하고 소통하기</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-muted/30 border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-full bg-muted p-3">
                  <Zap className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">비회원</h3>
                  <p className="text-muted-foreground">로그인 없이 바로 이용</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">거래 수수료 5%</p>
                    <p className="text-sm text-muted-foreground">판매 금액의 5%가 수수료로 부과</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">제한된 등록</p>
                    <p className="text-sm text-muted-foreground">일일 등록 개수 제한</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">내역 관리 불가</p>
                    <p className="text-sm text-muted-foreground">판매 이력을 저장할 수 없음</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">읽기 전용</p>
                    <p className="text-sm text-muted-foreground">커뮤니티 글 작성 불가</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center bg-primary/10 border-2 border-primary/30 rounded-lg p-6">
            <p className="font-semibold">회원가입은 무료이며, 이메일 인증만 하면 바로 모든 혜택을 받을 수 있습니다</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">방끗만의 차별점</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">잘 팔리는 묶음 전략 제안</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                물건을 그냥 묶는 게 아니라 실제로 잘 팔리는 조합을 AI가 자동으로 추천합니다.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>신입생 스타터팩 자동 구성</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>지역별 수요 기반 추천</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">상황 기반 실전 가이드</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                일반 꿀팁이 아닌, 당신의 상황에 딱 맞는 실전 가이드를 제공합니다.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>물건별 맞춤 판매 전략</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>단계별 체크리스트 제공</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">지금 바로 시작하세요</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              사진 한 장으로 방 비우기의 모든 것을
              <br />
              방끗이 도와드립니다
            </p>
            <Button asChild size="lg" className="rounded-full text-lg px-8">
              <Link href="/upload">
                <Camera className="mr-2" size={20} />
                무료로 시작하기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
