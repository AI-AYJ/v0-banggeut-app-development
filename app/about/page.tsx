import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Target, Users, Zap, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Image
              src="/images/banggeut-logo.png"
              alt="방끗"
              width={180}
              height={60}
              className="h-16 w-auto mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">비움을 쉽게, 방끗</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              방끗은 도전과 실험을 두려워하지 않고
              <br />더 나은 비움의 경험을 만들기 위해 계속 진화하는 팀입니다
            </p>
          </div>

          {/* Mission */}
          <Card className="p-12 mb-16 bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">우리의 미션</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                정리를 해야 할 순간에 가장 먼저 떠오르는 브랜드를 목표로 합니다.
                <br />
                물건 정리의 끝에는 방끗이 있다는 인식을 지속적으로 각인합니다.
              </p>
            </div>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">우리의 가치</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">빠른 실행</h3>
                <p className="text-muted-foreground leading-relaxed">
                  복잡한 과정 없이 사진 한 장으로 즉시 시작할 수 있는 간편함을 추구합니다
                </p>
              </Card>

              <Card className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">사용자 중심</h3>
                <p className="text-muted-foreground leading-relaxed">
                  실제 자취생과 기숙사생의 경험을 바탕으로 진짜 필요한 기능을 만듭니다
                </p>
              </Card>

              <Card className="p-8 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">끝까지 책임</h3>
                <p className="text-muted-foreground leading-relaxed">
                  판매부터 기부, 폐기까지 방 비우기의 모든 과정을 함께합니다
                </p>
              </Card>
            </div>
          </div>

          {/* Story */}
          <Card className="p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">방끗의 시작</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                종강 시즌, 기숙사를 나가야 하는 학생들은 항상 같은 고민을 합니다. "이 물건들을 어떻게 처리하지?"
                가져가자니 짐이고, 버리자니 아깝고, 팔자니 귀찮습니다.
              </p>
              <p>
                중고거래 앱에 하나씩 사진을 찍고 글을 쓰는 것은 이사 준비로 바쁜 학생들에게 너무 큰 부담입니다. 결국
                많은 물건들이 그냥 버려지고, 정작 필요한 신입생들은 다시 새 물건을 삽니다.
              </p>
              <p>
                방끗은 이런 비효율을 해결하기 위해 시작되었습니다. 사진 한 장으로 방 비우기의 모든 과정을 자동화하고,
                실전 꿀팁으로 더 나은 결과를 만들어냅니다.
              </p>
            </div>
          </Card>

          {/* Growth Strategy */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">성장 전략</h2>
            <div className="bg-accent/50 rounded-lg p-8 max-w-3xl mx-auto">
              <div className="space-y-4 text-left text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. 소셜미디어 중심의 사례 콘텐츠</h3>
                  <p className="text-sm">방 비우기 전과 후의 변화 기록을 통해 자연스러운 입소문 확산</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. 지인 추천 구조</h3>
                  <p className="text-sm">사용 경험이 자연스럽게 추천으로 이어지는 바이럴 메커니즘</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">3. 시즌별 이벤트</h3>
                  <p className="text-sm">이사 시즌과 종강 시즌에 맞춘 참여형 챌린지 운영</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
