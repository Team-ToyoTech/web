const profiles = {
                cho: {
                    title: "조영식 Youngsik Cho",
                    content: `도쿄이과대학 창역이공학부 전기전자정보공학과 25학번, 2006년생. 
                    코딩 2015년 시작, 가능 프로그래밍 언어 C, C++, C#, Python, JavaScript, Java.
                    ToyoTech에서는 PCB 디자인, 프로젝트 아이디어, 일부 프로젝트 코딩 등을 담당.
                    ToyoTech의 학생들을 직접 가르침.`,
                },
                lee: {
                    title: "이동하 Dongha Lee",
                    content:
                        "한성과고 34기, 과학기술정보통신부 장관상 수상, 단대대소고 프로그래밍 대회 은상 수상, BOJ 플레티넘 3 달성",
                },
                park: {
                    title: "박준현 Junhyun Park",
                    content:
                        "이대부고 68기, 삼성 주니어 SW 창작 대회 공감상 수상, BOJ 플래티넘 5 달성",
                },
                kim: {
                    title: "김주원 Juwon Kim",
                    content: "성산중",
                },
            };

            document
                .querySelectorAll(".team-grid .member")
                .forEach((member) => {
                    member.addEventListener("click", () => {
                        const name = member.getAttribute("data-name");
                        const profile = profiles[name];
                        if (profile) {
                            document.getElementById(
                                "profileTitle"
                            ).textContent = profile.title;
                            document.getElementById(
                                "profileContent"
                            ).textContent = profile.content;
                            document.getElementById(
                                "profileModal"
                            ).style.display = "block";
                        }
                    });
                });

            window.onclick = function (event) {
                const modal = document.getElementById("profileModal");
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            };