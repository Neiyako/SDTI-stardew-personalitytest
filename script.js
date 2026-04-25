// ======================= 配置 =======================
const avatarBasePath = "./head/";

// DeepSeek API 配置（⚠️ 前端暴露密钥有安全风险，仅供测试）
const DEEPSEEK_API_KEY = "sk-eHyFADREI1txyoAbftIRSvodXdW2qJasTvE89xLLbk4R4L0B";
const DEEPSEEK_API_URL = "https://openrouter.fans/v1";

// 角色数据（含介绍）
const CHARACTERS = [
    { name: "Abigail",   desc: "紫色头发的冒险少女，热爱探险、电子游戏和吃宝石。她勇敢、好奇，偶尔有点叛逆。" },
    { name: "Alex",      desc: "阳光健气的运动男孩，梦想成为职业格球手。外表自信，内心重视家人和友谊。" },
    { name: "Elliott",   desc: "海滩小木屋里的浪漫作家，风度翩翩，喜爱优雅的艺术和深度的对话。" },
    { name: "Emily",     desc: "神秘而善良的宝石迷，热爱自然、缝纫和冥想。她充满灵气，对世界有独特的感知。" },
    { name: "Haley",     desc: "时尚摄影师，外表高冷内心温柔。起初傲慢，逐渐展现出真诚与善良。" },
    { name: "Harvey",    desc: "镇上的医生，细心稳重，关心每个人的健康。他有点焦虑但责任感极强。" },
    { name: "Leah",      desc: "独立艺术家，住在森林边，喜欢采集和雕塑。她向往自由，热爱大自然。" },
    { name: "Maru",      desc: "天才发明家兼护士，好奇心旺盛，总是带着工具创造新东西。" },
    { name: "Penny",     desc: "温柔的家庭教师，热爱读书和照顾孩子。她害羞但坚强，渴望家的温暖。" },
    { name: "Sam",       desc: "活力四射的摇滚吉他手，阳光大男孩，热爱音乐、滑板和快餐。" },
    { name: "Sebastian", desc: "内向的程序员，喜欢下雨天、摩托车和桌游。他寡言但深情，渴望被理解。" },
    { name: "Shane",     desc: "忧郁的Joja员工，后来变得善良而坚强。他与抑郁斗争，热爱小鸡。" }
];

// 每个角色的理想答案（20题，选项索引0~3）
const IDEAL_ANSWERS = {
    Abigail:   [0, 0, 0, 0, 1, 2, 0, 3, 1, 0, 3, 1, 0, 0, 1, 2, 0, 0, 0, 0],
    Alex:      [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
    Elliott:   [1, 0, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 0, 1, 2],
    Emily:     [2, 2, 2, 3, 1, 1, 2, 0, 3, 3, 0, 3, 1, 2, 0, 1, 0, 3, 2, 0],
    Haley:     [3, 1, 3, 0, 3, 3, 3, 1, 3, 3, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3],
    Harvey:    [2, 3, 1, 2, 1, 3, 2, 2, 0, 2, 2, 1, 0, 2, 1, 0, 2, 1, 2, 1],
    Leah:      [1, 2, 1, 2, 2, 0, 0, 2, 3, 0, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2],
    Maru:      [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    Penny:     [1, 3, 2, 2, 2, 2, 2, 0, 1, 3, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0],
    Sam:       [0, 1, 0, 0, 1, 0, 0, 2, 1, 1, 0, 1, 1, 3, 0, 1, 1, 0, 0, 1],
    Sebastian: [3, 0, 2, 3, 3, 1, 3, 3, 0, 3, 1, 2, 1, 2, 3, 3, 3, 1, 3, 2],
    Shane:     [3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3]
};

// 20道题目（选项文本用于AI分析）
const QUESTIONS = [
    { text: "鹈鹕镇举办春季花舞节，你会？", options: ["💃 主动邀请舞伴，C位亮相", "🌿 安静地欣赏花朵，独自散步", "🍰 帮助布置会场，和大家闲聊", "🎮 待在家里玩游戏，躲开人群"] },
    { text: "在农场忙碌一天后，你最喜欢的放松方式是？", options: ["📖 读小说/写诗", "🍺 去星落酒吧和村民喝酒", "⚒️ 继续打磨手艺/钓鱼挖矿", "🛌 直接睡觉，明天再说"] },
    { text: "遇到新的神秘洞穴，你的第一反应是？", options: ["🔥 二话不说冲进去探险", "🧐 先研究周边，做好万全准备", "😨 太危险了，叫上朋友一起去", "🚫 完全不感兴趣"] },
    { text: "你认为理想的交友对象应该？", options: ["🤝 开朗幽默，总是带来欢笑", "🎨 有艺术才华，内敛而深邃", "💪 可靠勤勉，一起努力奋斗", "🌱 温柔善良，照顾小动物"] },
    { text: "你对『星露谷展览会』的农业评比态度是？", options: ["🏆 必须赢！精心准备最好的作物", "🙌 重在参与，开心就好", "🍂 不太在意，顺其自然", "✨ 偷偷帮朋友作弊～"] },
    { text: "下雨天你会做什么？", options: ["🎣 钓鱼！雨天最适合", "💻 待在屋里编程/玩桌游", "☕ 去咖啡馆和好友深聊", "🌧️ 睡觉发呆，享受雨声"] },
    { text: "如果给你一天完全自由，你会选择？", options: ["🌲 深山野餐，采集野果", "🎸 组乐队表演或看演出", "🏡 大扫除+整理农场", "🎮 宅家打游戏看番剧"] },
    { text: "你认为星露谷最重要的资源是什么？", options: ["💎 友谊与社区感情", "💰 金钱和自动化效率", "🌽 自然资源和生态", "✨ 魔法与神秘事件"] },
    { text: "面对困难时，你倾向于？", options: ["🧗 独自硬扛，咬牙解决", "🤗 向朋友或家人求助", "📚 查阅攻略资料慢慢来", "🍃 暂时逃避，去大自然走走"] },
    { text: "你对『鹈鹕镇社区中心』修复计划？", options: ["🌟 超级积极，带头收集材料", "🤝 支持，但更喜欢Joja效率", "😴 无所谓，不影响我", "🎁 偷偷捐赠稀有物品帮大家"] },
    { text: "哪种动物最让你心动？", options: ["🐔 小鸡（可爱又实用）", "🐄 奶牛（治愈稳重）", "🦚 蓝孔雀（华丽稀有）", "🐸 青蛙（古怪个性）"] },
    { text: "如果可以选择，你想住在星露谷哪里？", options: ["🏞️ 深山湖边小木屋", "🏠 镇中心便利区", "🌊 海滩度假小屋", "⚙️ 矿井附近秘密基地"] },
    { text: "你最欣赏哪种艺术形式？", options: ["🖌️ 油画/雕塑", "🎵 音乐/演奏", "📜 诗歌/文学", "💃 舞蹈/肢体表达"] },
    { text: "你的料理风格偏向？", options: ["🍰 烘焙精致甜点", "🥘 大乱炖农家菜", "🍣 生鱼片/日式轻食", "🍕 速食披萨"] },
    { text: "收到一封陌生人寄的神秘信件，你会？", options: ["📬 立刻按地址赴约", "🕵️ 调查来源，小心求证", "🗑️ 直接丢掉", "🤝 叫上朋友一起去"] },
    { text: "在农场工作中，你更看重？", options: ["⚡ 自动化洒水器，效率至上", "🌸 手工照顾每一株作物", "🧺 畜牧业与动物互动", "🍷 酿酒/果酱艺术"] },
    { text: "你的周末通常怎么安排？", options: ["🏕️ 户外徒步或露营", "🎭 参加社交聚会/派对", "🛠️ 修理/建造东西", "📺 在家追剧刷手机"] },
    { text: "你对占卜、魔法或巫师塔的看法？", options: ["🔮 深信不疑，充满向往", "🧪 科学解释一切，略感兴趣", "😅 害怕，敬而远之", "✨ 只是娱乐，但很有趣"] },
    { text: "在矿洞遇到巨大史莱姆，你会？", options: ["⚔️ 拔剑冲上去", "🎯 远程放风筝消耗", "🚪 绕路逃跑", "🛡️ 用炸弹和地形取胜"] },
    { text: "你希望未来如何被人记住？", options: ["❤️ 一个善良温暖的朋友", "🏆 创造传奇财富或成就", "🎨 杰出的艺术家", "🌲 与自然共存的隐士"] }
];

// ======================= 全局变量 =======================
let userSelections = new Array(QUESTIONS.length).fill(null);
const introPanel = document.getElementById('introPanel');
const testPanel = document.getElementById('testPanel');
const resultPanel = document.getElementById('resultPanel');

// ======================= 辅助函数 =======================
function renderQuestions() {
    const container = document.getElementById("questionsContainer");
    if (!container) return;
    container.innerHTML = "";
    QUESTIONS.forEach((q, idx) => {
        const card = document.createElement("div");
        card.className = "question-card";
        const qText = document.createElement("div");
        qText.className = "question-text";
        qText.innerText = `${idx+1}. ${q.text}`;
        card.appendChild(qText);
        const optsDiv = document.createElement("div");
        optsDiv.className = "options";
        q.options.forEach((opt, optIdx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            if (userSelections[idx] === optIdx) btn.classList.add("selected");
            btn.innerText = opt;
            btn.addEventListener("click", () => {
                userSelections[idx] = optIdx;
                const btns = card.querySelectorAll(".option-btn");
                btns.forEach((b, i) => {
                    if (i === optIdx) b.classList.add("selected");
                    else b.classList.remove("selected");
                });
            });
            optsDiv.appendChild(btn);
        });
        card.appendChild(optsDiv);
        container.appendChild(card);
    });
}

// 计算汉明距离并返回排序后的匹配列表
function findBestMatch(selections) {
    const matches = CHARACTERS.map(char => {
        const ideal = IDEAL_ANSWERS[char.name];
        if (!ideal) return { ...char, distance: 999, matchRate: 0 };
        let diff = 0;
        for (let i = 0; i < selections.length; i++) {
            if (selections[i] !== ideal[i]) diff++;
        }
        const matchRate = ((QUESTIONS.length - diff) / QUESTIONS.length) * 100;
        return { ...char, distance: diff, matchRate: Math.min(99.9, Math.max(0, matchRate)) };
    });
    matches.sort((a, b) => a.distance - b.distance);
    return matches;
}

// 构建用户答案文本（用于AI分析）
function buildUserAnswerSummary(selections) {
    let summary = "";
    for (let i = 0; i < selections.length; i++) {
        const q = QUESTIONS[i];
        const choice = selections[i];
        if (choice !== null) {
            summary += `${i+1}. ${q.text} → ${q.options[choice]}\n`;
        }
    }
    return summary;
}

// 调用DeepSeek API 生成个性化分析
async function generateAnalysis(character, userSelections) {
    const userAnswers = buildUserAnswerSummary(userSelections);
    const systemPrompt = `你是星露谷游戏中的一位心理学家，擅长根据玩家的选择分析其人格，并与星露谷居民进行类比。请用中文、亲切幽默的口吻，生成一段约120~200字的个性化分析。分析中要结合玩家具体的选择倾向（例如喜欢独处、热爱冒险、注重效率等），并解释为什么这位玩家与 ${character.name} 相匹配。不要使用Markdown格式，直接输出纯文本。`;
    const userPrompt = `玩家匹配的角色是 ${character.name}（简介：${character.desc}）。\n\n玩家的答案如下：\n${userAnswers}\n\n请根据这些答案，生成一段对玩家性格的分析，并说明与 ${character.name} 相似的原因。`;

    try {
        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userPrompt }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });
        if (!response.ok) {
            throw new Error(`API 请求失败: ${response.status}`);
        }
        const data = await response.json();
        return data.choices[0].message.content.trim();
    } catch (error) {
        console.error("DeepSeek API 错误:", error);
        return "✨ 星露谷的魔法暂时失灵了～ 但你与 " + character.name + " 的共鸣依然清晰可见！不妨再测一次，或者亲自去鹈鹕镇拜访他/她吧。";
    }
}

// 显示结果页面（包含角色介绍和 AI 分析）
async function showResults() {
    const ranked = findBestMatch(userSelections);
    const best = ranked[0];
    const resultDiv = document.getElementById("resultContent");
    const avatarPath = `${avatarBasePath}${best.name}.png`;

    // 先渲染基础信息，分析区域显示加载动画
    resultDiv.innerHTML = `
        <div class="match-header">
            <div class="avatar-area">
                <img class="avatar-img" src="${avatarPath}" alt="${best.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/130x130?text=${best.name}'; this.style.background='#e9dbbc';">
            </div>
            <div class="match-info">
                <div class="match-name">✨ ${best.name} ✨</div>
                <div class="match-percent">🎯 匹配度 ${best.matchRate.toFixed(1)}%</div>
                <div class="desc">${best.desc}</div>
            </div>
        </div>
        <div class="analysis-area" id="analysisArea">
            <div class="analysis-loading">🤖 DeepSeek 正在分析你的星露谷人格...</div>
        </div>
        <div style="text-align:center; margin-top: 1rem;">
            <button class="btn-retake" id="retakeBtn">🌱 重新测试 🌱</button>
        </div>
    `;

    introPanel.style.display = "none";
    testPanel.style.display = "none";
    resultPanel.style.display = "block";

    // 调用 API 并更新分析区域
    const analysisDiv = document.getElementById("analysisArea");
    try {
        const analysisText = await generateAnalysis(best, userSelections);
        analysisDiv.innerHTML = `<div style="white-space: pre-wrap;">✨ ${analysisText}</div>`;
    } catch (err) {
        analysisDiv.innerHTML = `<div>⚠️ 生成分析时遇到了问题，但 ❤️ 你和 ${best.name} 的缘分依然深厚！</div>`;
    }

    // 重新测试按钮
    const retakeBtn = document.getElementById("retakeBtn");
    if (retakeBtn) {
        retakeBtn.addEventListener("click", () => {
            userSelections.fill(null);
            renderQuestions();
            introPanel.style.display = "flex";
            testPanel.style.display = "none";
            resultPanel.style.display = "none";
        });
    }
}

function checkAllAnswered() {
    return userSelections.every(idx => idx !== null);
}

// ======================= 初始化与事件绑定 =======================
document.addEventListener("DOMContentLoaded", () => {
    const chickenImg = document.getElementById("chickenGif");
    if (chickenImg) {
        chickenImg.src = `${avatarBasePath}1.gif`;
        chickenImg.onerror = () => { chickenImg.src = "https://via.placeholder.com/200?text=🐔"; };
    }

    renderQuestions();

    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            userSelections.fill(null);
            renderQuestions();
            introPanel.style.display = "none";
            testPanel.style.display = "block";
            resultPanel.style.display = "none";
        });
    }

    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            if (!checkAllAnswered()) {
                alert("请先完成全部20道题目，再揭晓你的星露谷人格 🌟");
                return;
            }
            showResults();
        });
    }

    introPanel.style.display = "flex";
    testPanel.style.display = "none";
    resultPanel.style.display = "none";
});
