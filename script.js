// ======================= 配置区 =======================
// 头像/小鸡动图基础路径（可修改为你的实际路径，例如 "./images/"）
const avatarBasePath = "./head/";

// ======================= 维度标签 =======================
const DIM_NAMES = ["外向性", "好奇心", "同情心", "勤勉性", "自然感", "浪漫度"];

// ======================= 星露谷角色数据 =======================
const CHARACTERS = [
    { name: "Abigail",   tags: [7, 9, 5, 4, 8, 7] },  // 冒险、好奇、略带反叛
    { name: "Alex",      tags: [9, 4, 6, 8, 3, 5] },  // 外向健壮，传统训练
    { name: "Elliott",   tags: [5, 8, 8, 5, 7, 9] },  // 浪漫诗人，喜好自然优雅
    { name: "Emily",     tags: [6, 7, 9, 6, 9, 7] },  // 神秘善良，热爱自然与宝石
    { name: "Haley",     tags: [8, 3, 4, 3, 2, 6] },  // 时尚外冷内热
    { name: "Harvey",    tags: [3, 6, 8, 9, 5, 5] },  // 成熟稳重医生
    { name: "Leah",      tags: [4, 7, 7, 7, 9, 8] },  // 艺术家自然风
    { name: "Maru",      tags: [5, 9, 7, 9, 5, 4] },  // 发明家，好奇勤奋
    { name: "Penny",     tags: [3, 6, 9, 7, 6, 7] },  // 温柔老师，善解人意
    // 修改 Sam：更突出外向和浪漫，降低自然感、勤勉性
    { name: "Sam",       tags: [9, 6, 7, 3, 2, 8] },  // 活力四射、爱玩音乐、稍懒散
    { name: "Sebastian", tags: [2, 8, 5, 6, 7, 5] },  // 内向极客，喜欢雨和摩托
    { name: "Shane",     tags: [2, 3, 7, 2, 4, 3] }    // 忧郁但善良，后期感人
];
// ======================= 20道题目 =======================
const QUESTIONS = [
    { text: "鹈鹕镇举办春季花舞节，你会？", options: [
        { text: "💃 主动邀请舞伴，C位亮相", delta: [2, 0, 1, -1, 0, 1] },
        { text: "🌿 安静地欣赏花朵，独自散步", delta: [-1, 1, 0, 0, 1, 0] },
        { text: "🍰 帮助布置会场，和大家闲聊", delta: [1, 0, 1, 1, 0, -1] },
        { text: "🎮 待在家里玩游戏，躲开人群", delta: [-2, 1, -1, -1, -1, -1] }
    ]},
    { text: "在农场忙碌一天后，你最喜欢的放松方式是？", options: [
        { text: "📖 读小说/写诗", delta: [-1, 1, 1, -1, 0, 2] },
        { text: "🍺 去星落酒吧和村民喝酒", delta: [2, 0, 1, -1, -1, 1] },
        { text: "⚒️ 继续打磨手艺/钓鱼挖矿", delta: [-1, 2, 0, 2, 1, 0] },
        { text: "🛌 直接睡觉，明天再说", delta: [0, -1, -1, -2, 0, -1] }
    ]},
    { text: "遇到新的神秘洞穴，你的第一反应是？", options: [
        { text: "🔥 二话不说冲进去探险", delta: [1, 2, 0, 1, 1, 0] },
        { text: "🧐 先研究周边，做好万全准备", delta: [-1, 2, 1, 2, 0, 0] },
        { text: "😨 太危险了，叫上朋友一起去", delta: [1, -1, 2, 0, 0, 0] },
        { text: "🚫 完全不感兴趣", delta: [-1, -2, -1, -1, -2, -1] }
    ]},
    { text: "你认为理想的交友对象应该？", options: [
        { text: "🤝 开朗幽默，总是带来欢笑", delta: [2, 0, 1, 0, 0, 0] },
        { text: "🎨 有艺术才华，内敛而深邃", delta: [-1, 1, 1, 0, 1, 2] },
        { text: "💪 可靠勤勉，一起努力奋斗", delta: [0, 0, 1, 2, -1, 0] },
        { text: "🌱 温柔善良，照顾小动物", delta: [-1, 0, 2, 0, 2, 1] }
    ]},
    { text: "你对『星露谷展览会』的农业评比态度是？", options: [
        { text: "🏆 必须赢！精心准备最好的作物", delta: [1, 1, 0, 3, 1, 0] },
        { text: "🙌 重在参与，开心就好", delta: [1, -1, 1, -2, 0, 1] },
        { text: "🍂 不太在意，顺其自然", delta: [-1, -1, 0, -1, 0, -1] },
        { text: "✨ 偷偷帮朋友作弊～", delta: [1, -2, 2, -1, -1, 2] }
    ]},
    { text: "下雨天你会做什么？", options: [
        { text: "🎣 钓鱼！雨天最适合", delta: [0, 1, 0, 1, 2, 0] },
        { text: "💻 待在屋里编程/玩桌游", delta: [-1, 2, -1, 0, -1, -2] },
        { text: "☕ 去咖啡馆和好友深聊", delta: [2, 0, 2, -1, 0, 1] },
        { text: "🌧️ 睡觉发呆，享受雨声", delta: [-2, 0, 0, -2, 1, 0] }
    ]},
    { text: "如果给你一天完全自由，你会选择？", options: [
        { text: "🌲 深山野餐，采集野果", delta: [0, 1, 0, 0, 2, 1] },
        { text: "🎸 组乐队表演或看演出", delta: [2, 1, 0, -1, 0, 1] },
        { text: "🏡 大扫除+整理农场", delta: [-1, 0, 0, 3, 0, -1] },
        { text: "🎮 宅家打游戏看番剧", delta: [-2, 0, -1, -1, -1, -1] }
    ]},
    { text: "你认为星露谷最重要的资源是什么？", options: [
        { text: "💎 友谊与社区感情", delta: [1, 0, 2, 0, 0, 1] },
        { text: "💰 金钱和自动化效率", delta: [0, 1, -1, 2, -1, -1] },
        { text: "🌽 自然资源和生态", delta: [-1, 1, 0, 1, 2, 0] },
        { text: "✨ 魔法与神秘事件", delta: [0, 2, 1, -1, 1, 2] }
    ]},
    { text: "面对困难时，你倾向于？", options: [
        { text: "🧗 独自硬扛，咬牙解决", delta: [-1, 1, -1, 2, 0, -1] },
        { text: "🤗 向朋友或家人求助", delta: [2, 0, 2, -1, 0, 0] },
        { text: "📚 查阅攻略资料慢慢来", delta: [-1, 2, 0, 2, 0, 0] },
        { text: "🍃 暂时逃避，去大自然走走", delta: [-1, 0, 1, -2, 2, 1] }
    ]},
    { text: "你对『鹈鹕镇社区中心』修复计划？", options: [
        { text: "🌟 超级积极，带头收集材料", delta: [1, 1, 2, 2, 0, 1] },
        { text: "🤝 支持，但更喜欢Joja效率", delta: [0, -1, -1, 1, -2, -1] },
        { text: "😴 无所谓，不影响我", delta: [-1, -1, -1, -1, -1, -1] },
        { text: "🎁 偷偷捐赠稀有物品帮大家", delta: [0, 1, 2, 1, 1, 2] }
    ]},
    { text: "哪种动物最让你心动？", options: [
        { text: "🐔 小鸡（可爱又实用）", delta: [0, 0, 1, 1, 1, -1] },
        { text: "🐄 奶牛（治愈稳重）", delta: [-1, 0, 1, 1, 1, 0] },
        { text: "🦚 蓝孔雀（华丽稀有）", delta: [1, 1, 0, 0, 0, 2] },
        { text: "🐸 青蛙（古怪个性）", delta: [-1, 2, 0, -1, 1, 0] }
    ]},
    { text: "如果可以选择，你想住在星露谷哪里？", options: [
        { text: "🏞️ 深山湖边小木屋", delta: [-1, 1, 1, 0, 2, 1] },
        { text: "🏠 镇中心便利区", delta: [2, 0, 1, 0, -1, 0] },
        { text: "🌊 海滩度假小屋", delta: [1, 1, 0, -1, 1, 2] },
        { text: "⚙️ 矿井附近秘密基地", delta: [-1, 2, -1, 1, 1, 0] }
    ]},
    { text: "你最欣赏哪种艺术形式？", options: [
        { text: "🖌️ 油画/雕塑", delta: [-1, 1, 1, 0, 1, 2] },
        { text: "🎵 音乐/演奏", delta: [1, 1, 0, 0, 0, 2] },
        { text: "📜 诗歌/文学", delta: [-1, 2, 1, 0, 0, 2] },
        { text: "💃 舞蹈/肢体表达", delta: [2, 0, 1, 0, 0, 1] }
    ]},
    { text: "你的料理风格偏向？", options: [
        { text: "🍰 烘焙精致甜点", delta: [0, 0, 2, 1, -1, 2] },
        { text: "🥘 大乱炖农家菜", delta: [0, 0, 1, 2, 1, 0] },
        { text: "🍣 生鱼片/日式轻食", delta: [-1, 1, 0, 1, 1, 1] },
        { text: "🍕 速食披萨", delta: [1, -1, 0, -1, -1, 0] }
    ]},
    { text: "收到一封陌生人寄的神秘信件，你会？", options: [
        { text: "📬 立刻按地址赴约", delta: [1, 2, 0, -1, 0, 1] },
        { text: "🕵️ 调查来源，小心求证", delta: [-1, 2, 0, 1, 0, 0] },
        { text: "🗑️ 直接丢掉", delta: [-1, -2, -1, 0, -1, -2] },
        { text: "🤝 叫上朋友一起去", delta: [2, 0, 2, -1, 0, 0] }
    ]},
    { text: "在农场工作中，你更看重？", options: [
        { text: "⚡ 自动化洒水器，效率至上", delta: [0, 1, -1, 2, -1, 0] },
        { text: "🌸 手工照顾每一株作物", delta: [-1, 0, 1, 2, 2, 1] },
        { text: "🧺 畜牧业与动物互动", delta: [0, -1, 2, 1, 1, 0] },
        { text: "🍷 酿酒/果酱艺术", delta: [-1, 1, 0, 1, 1, 2] }
    ]},
    { text: "你的周末通常怎么安排？", options: [
        { text: "🏕️ 户外徒步或露营", delta: [1, 1, 0, 0, 2, 1] },
        { text: "🎭 参加社交聚会/派对", delta: [2, 0, 1, -1, -1, 2] },
        { text: "🛠️ 修理/建造东西", delta: [-1, 1, 0, 2, 0, -1] },
        { text: "📺 在家追剧刷手机", delta: [-2, -1, -1, -1, -1, 0] }
    ]},
    { text: "你对占卜、魔法或巫师塔的看法？", options: [
        { text: "🔮 深信不疑，充满向往", delta: [0, 2, 1, -1, 0, 2] },
        { text: "🧪 科学解释一切，略感兴趣", delta: [-1, 1, 0, 1, -1, 0] },
        { text: "😅 害怕，敬而远之", delta: [-1, -2, 0, -1, 0, -1] },
        { text: "✨ 只是娱乐，但很有趣", delta: [1, 1, 0, 0, 0, 1] }
    ]},
    { text: "在矿洞遇到巨大史莱姆，你会？", options: [
        { text: "⚔️ 拔剑冲上去", delta: [2, 0, -1, 1, 0, -1] },
        { text: "🎯 远程放风筝消耗", delta: [0, 1, 0, 1, 0, 0] },
        { text: "🚪 绕路逃跑", delta: [-2, -1, 0, -2, -1, -2] },
        { text: "🛡️ 用炸弹和地形取胜", delta: [0, 2, -1, 1, 0, 0] }
    ]},
    { text: "你希望未来如何被人记住？", options: [
        { text: "❤️ 一个善良温暖的朋友", delta: [1, 0, 2, 0, 0, 1] },
        { text: "🏆 创造传奇财富或成就", delta: [1, 1, -1, 2, -1, 0] },
        { text: "🎨 杰出的艺术家", delta: [-1, 1, 0, 1, 0, 2] },
        { text: "🌲 与自然共存的隐士", delta: [-2, 0, 1, -1, 2, 0] }
    ]}
];

// ======================= 全局变量 =======================
let userSelections = new Array(QUESTIONS.length).fill(null);
let radarChartInstance = null;

// DOM 元素
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
        card.dataset.qidx = idx;
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
            btn.innerText = opt.text;
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

function computeUserRawVec() {
    let rawVec = new Array(6).fill(0);
    for (let i = 0; i < QUESTIONS.length; i++) {
        const selIdx = userSelections[i];
        if (selIdx !== null) {
            const delta = QUESTIONS[i].options[selIdx].delta;
            for (let d = 0; d < 6; d++) {
                rawVec[d] += delta[d];
            }
        }
    }
    return rawVec;
}

function normalizeTo1_10(rawVec) {
    const MIN_RAW = -40;
    const MAX_RAW = 40;
    return rawVec.map(v => {
        let clamped = Math.min(MAX_RAW, Math.max(MIN_RAW, v));
        let norm = (clamped - MIN_RAW) / (MAX_RAW - MIN_RAW);
        return 1 + norm * 9;
    });
}

function computeSimilarity(userNorm, charTags) {
    let sumSq = 0;
    for (let i = 0; i < 6; i++) {
        let diff = userNorm[i] - charTags[i];
        sumSq += diff * diff;
    }
    let distance = Math.sqrt(sumSq);
    const MAX_DIST = Math.sqrt(6 * 81);
    let similarity = (1 - distance / MAX_DIST) * 100;
    return Math.min(99.9, Math.max(0, similarity));
}

function findBestMatch(userNorm) {
    let matches = CHARACTERS.map(char => {
        let sim = computeSimilarity(userNorm, char.tags);
        return { ...char, matchRate: sim };
    });
    matches.sort((a, b) => b.matchRate - a.matchRate);
    return matches;
}

function showResults() {
    const rawVec = computeUserRawVec();
    const userNorm = normalizeTo1_10(rawVec);
    const ranked = findBestMatch(userNorm);
    const best = ranked[0];
    const resultDiv = document.getElementById("resultContent");
    const avatarPath = `${avatarBasePath}${best.name}.png`;
    
    resultDiv.innerHTML = `
        <div class="match-header">
            <div class="avatar-area">
                <img class="avatar-img" src="${avatarPath}" alt="${best.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/130x130?text=${best.name}'; this.style.background='#e9dbbc';">
            </div>
            <div class="match-info">
                <div class="match-name">✨ ${best.name} ✨</div>
                <div class="match-percent">🎯 匹配度 ${best.matchRate.toFixed(1)}%</div>
                <div class="desc">和这位星露谷居民拥有相似的人格气质！无论是生活态度还是内心偏好，你们有奇妙的共鸣。</div>
            </div>
        </div>
        <div class="radar-container">
            <canvas id="radarChart" width="500" height="500"></canvas>
        </div>
        <div class="dimension-table">
            <strong>📊 六维对比</strong><br>
            你的特质向量（归一化1-10）与 ${best.name} 标签的雷达图展示上方。<br>
            <small>* 外向·好奇·同情·勤勉·自然·浪漫 | 分数越高越倾向该维度</small>
        </div>
        <div style="text-align:center; margin-top:1rem;">
            <button class="btn-retake" id="retakeBtn">🌱 重新测试 🌱</button>
        </div>
    `;
    
    // 隐藏其他面板，显示结果面板
    introPanel.style.display = "none";
    testPanel.style.display = "none";
    resultPanel.style.display = "block";
    
    setTimeout(() => {
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (radarChartInstance) radarChartInstance.destroy();
        radarChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: DIM_NAMES,
                datasets: [
                    {
                        label: `你 (${best.name}匹配度${best.matchRate.toFixed(0)}%)`,
                        data: userNorm,
                        backgroundColor: 'rgba(230, 180, 52, 0.3)',
                        borderColor: '#e6b422',
                        borderWidth: 2,
                        pointBackgroundColor: '#e6b422',
                        pointBorderColor: '#fff',
                        pointRadius: 4
                    },
                    {
                        label: `${best.name} 原型标签`,
                        data: best.tags,
                        backgroundColor: 'rgba(94, 58, 28, 0.2)',
                        borderColor: '#5e3a1c',
                        borderWidth: 2,
                        pointBackgroundColor: '#5e3a1c',
                        pointBorderColor: '#fff',
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: { r: { min: 1, max: 10, ticks: { stepSize: 1 } } }
            }
        });
    }, 50);
    
    // 绑定重新测试按钮：回到小鸡界面
    const retakeBtn = document.getElementById("retakeBtn");
    if (retakeBtn) {
        retakeBtn.addEventListener("click", () => {
            // 重置所有选择
            userSelections.fill(null);
            renderQuestions();      // 重新渲染题目，清除高亮
            introPanel.style.display = "flex";
            testPanel.style.display = "none";
            resultPanel.style.display = "none";
            if (radarChartInstance) {
                radarChartInstance.destroy();
                radarChartInstance = null;
            }
        });
    }
}

function checkAllAnswered() {
    return userSelections.every(idx => idx !== null);
}

// ======================= 初始化 & 事件绑定 =======================
document.addEventListener("DOMContentLoaded", () => {
    // 设置小鸡动图路径
    const chickenImg = document.getElementById("chickenGif");
    if (chickenImg) {
        chickenImg.src = `${avatarBasePath}1.gif`;
        chickenImg.onerror = () => { chickenImg.src = "https://via.placeholder.com/200?text=🐔"; };
    }
    
    // 预先渲染题目（但隐藏测试面板）
    renderQuestions();
    
    // 开始测试按钮
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            // 重置所有答案
            userSelections.fill(null);
            renderQuestions();   // 刷新选项高亮（全部未选中）
            introPanel.style.display = "none";
            testPanel.style.display = "block";
            resultPanel.style.display = "none";
        });
    }
    
    // 提交按钮
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
    
    // 初始状态：只显示 intro，其他隐藏
    introPanel.style.display = "flex";
    testPanel.style.display = "none";
    resultPanel.style.display = "none";
});
