// ======================= 配置区 =======================
// 头像/小鸡动图基础路径（使用 head 文件夹）
const avatarBasePath = "./head/";

// ======================= 星露谷角色数据（增加个性描述） =======================
const CHARACTERS = [
    { name: "Abigail",   desc: "紫色头发的冒险少女，热爱探险、电子游戏和吃宝石。", tags: [] },
    { name: "Alex",      desc: "阳光健气的运动男孩，梦想成为职业格球手。", tags: [] },
    { name: "Elliott",   desc: "海滩小木屋里的浪漫作家，风度翩翩。", tags: [] },
    { name: "Emily",     desc: "神秘而善良的宝石迷，热爱自然与缝纫。", tags: [] },
    { name: "Haley",     desc: "时尚摄影师，外表高冷内心温柔。", tags: [] },
    { name: "Harvey",    desc: "镇上的医生，细心稳重，关心每个人的健康。", tags: [] },
    { name: "Leah",      desc: "独立艺术家，住在森林边，喜欢 foraging 和雕塑。", tags: [] },
    { name: "Maru",      desc: "天才发明家兼护士，好奇心旺盛。", tags: [] },
    { name: "Penny",     desc: "温柔的家庭教师，热爱读书和照顾孩子。", tags: [] },
    { name: "Sam",       desc: "活力四射的摇滚吉他手，阳光大男孩。", tags: [] },
    { name: "Sebastian", desc: "内向的程序员，喜欢下雨天、摩托车和桌游。", tags: [] },
    { name: "Shane",     desc: "忧郁的Joja员工，后来变得善良而坚强。", tags: [] }
];

// 每个角色对20道题（索引0~19）的理想答案选项索引（0~3）
// 这些值需要根据角色人设仔细校准，您随时可以修改数组中的数字来调整匹配结果
const IDEAL_ANSWERS = {
    // 题目顺序请参考 QUESTIONS 数组（共20题）
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

// ======================= 20道题目（保持不变） =======================
const QUESTIONS = [
    { text: "鹈鹕镇举办春季花舞节，你会？", options: [
        { text: "💃 主动邀请舞伴，C位亮相", delta: [0,0,0,0,0,0] },  // delta 不再使用，仅保留文本
        { text: "🌿 安静地欣赏花朵，独自散步", delta: [0,0,0,0,0,0] },
        { text: "🍰 帮助布置会场，和大家闲聊", delta: [0,0,0,0,0,0] },
        { text: "🎮 待在家里玩游戏，躲开人群", delta: [0,0,0,0,0,0] }
    ]},
    { text: "在农场忙碌一天后，你最喜欢的放松方式是？", options: [
        { text: "📖 读小说/写诗", delta: [0,0,0,0,0,0] },
        { text: "🍺 去星落酒吧和村民喝酒", delta: [0,0,0,0,0,0] },
        { text: "⚒️ 继续打磨手艺/钓鱼挖矿", delta: [0,0,0,0,0,0] },
        { text: "🛌 直接睡觉，明天再说", delta: [0,0,0,0,0,0] }
    ]},
    { text: "遇到新的神秘洞穴，你的第一反应是？", options: [
        { text: "🔥 二话不说冲进去探险", delta: [0,0,0,0,0,0] },
        { text: "🧐 先研究周边，做好万全准备", delta: [0,0,0,0,0,0] },
        { text: "😨 太危险了，叫上朋友一起去", delta: [0,0,0,0,0,0] },
        { text: "🚫 完全不感兴趣", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你认为理想的交友对象应该？", options: [
        { text: "🤝 开朗幽默，总是带来欢笑", delta: [0,0,0,0,0,0] },
        { text: "🎨 有艺术才华，内敛而深邃", delta: [0,0,0,0,0,0] },
        { text: "💪 可靠勤勉，一起努力奋斗", delta: [0,0,0,0,0,0] },
        { text: "🌱 温柔善良，照顾小动物", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你对『星露谷展览会』的农业评比态度是？", options: [
        { text: "🏆 必须赢！精心准备最好的作物", delta: [0,0,0,0,0,0] },
        { text: "🙌 重在参与，开心就好", delta: [0,0,0,0,0,0] },
        { text: "🍂 不太在意，顺其自然", delta: [0,0,0,0,0,0] },
        { text: "✨ 偷偷帮朋友作弊～", delta: [0,0,0,0,0,0] }
    ]},
    { text: "下雨天你会做什么？", options: [
        { text: "🎣 钓鱼！雨天最适合", delta: [0,0,0,0,0,0] },
        { text: "💻 待在屋里编程/玩桌游", delta: [0,0,0,0,0,0] },
        { text: "☕ 去咖啡馆和好友深聊", delta: [0,0,0,0,0,0] },
        { text: "🌧️ 睡觉发呆，享受雨声", delta: [0,0,0,0,0,0] }
    ]},
    { text: "如果给你一天完全自由，你会选择？", options: [
        { text: "🌲 深山野餐，采集野果", delta: [0,0,0,0,0,0] },
        { text: "🎸 组乐队表演或看演出", delta: [0,0,0,0,0,0] },
        { text: "🏡 大扫除+整理农场", delta: [0,0,0,0,0,0] },
        { text: "🎮 宅家打游戏看番剧", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你认为星露谷最重要的资源是什么？", options: [
        { text: "💎 友谊与社区感情", delta: [0,0,0,0,0,0] },
        { text: "💰 金钱和自动化效率", delta: [0,0,0,0,0,0] },
        { text: "🌽 自然资源和生态", delta: [0,0,0,0,0,0] },
        { text: "✨ 魔法与神秘事件", delta: [0,0,0,0,0,0] }
    ]},
    { text: "面对困难时，你倾向于？", options: [
        { text: "🧗 独自硬扛，咬牙解决", delta: [0,0,0,0,0,0] },
        { text: "🤗 向朋友或家人求助", delta: [0,0,0,0,0,0] },
        { text: "📚 查阅攻略资料慢慢来", delta: [0,0,0,0,0,0] },
        { text: "🍃 暂时逃避，去大自然走走", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你对『鹈鹕镇社区中心』修复计划？", options: [
        { text: "🌟 超级积极，带头收集材料", delta: [0,0,0,0,0,0] },
        { text: "🤝 支持，但更喜欢Joja效率", delta: [0,0,0,0,0,0] },
        { text: "😴 无所谓，不影响我", delta: [0,0,0,0,0,0] },
        { text: "🎁 偷偷捐赠稀有物品帮大家", delta: [0,0,0,0,0,0] }
    ]},
    { text: "哪种动物最让你心动？", options: [
        { text: "🐔 小鸡（可爱又实用）", delta: [0,0,0,0,0,0] },
        { text: "🐄 奶牛（治愈稳重）", delta: [0,0,0,0,0,0] },
        { text: "🦚 蓝孔雀（华丽稀有）", delta: [0,0,0,0,0,0] },
        { text: "🐸 青蛙（古怪个性）", delta: [0,0,0,0,0,0] }
    ]},
    { text: "如果可以选择，你想住在星露谷哪里？", options: [
        { text: "🏞️ 深山湖边小木屋", delta: [0,0,0,0,0,0] },
        { text: "🏠 镇中心便利区", delta: [0,0,0,0,0,0] },
        { text: "🌊 海滩度假小屋", delta: [0,0,0,0,0,0] },
        { text: "⚙️ 矿井附近秘密基地", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你最欣赏哪种艺术形式？", options: [
        { text: "🖌️ 油画/雕塑", delta: [0,0,0,0,0,0] },
        { text: "🎵 音乐/演奏", delta: [0,0,0,0,0,0] },
        { text: "📜 诗歌/文学", delta: [0,0,0,0,0,0] },
        { text: "💃 舞蹈/肢体表达", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你的料理风格偏向？", options: [
        { text: "🍰 烘焙精致甜点", delta: [0,0,0,0,0,0] },
        { text: "🥘 大乱炖农家菜", delta: [0,0,0,0,0,0] },
        { text: "🍣 生鱼片/日式轻食", delta: [0,0,0,0,0,0] },
        { text: "🍕 速食披萨", delta: [0,0,0,0,0,0] }
    ]},
    { text: "收到一封陌生人寄的神秘信件，你会？", options: [
        { text: "📬 立刻按地址赴约", delta: [0,0,0,0,0,0] },
        { text: "🕵️ 调查来源，小心求证", delta: [0,0,0,0,0,0] },
        { text: "🗑️ 直接丢掉", delta: [0,0,0,0,0,0] },
        { text: "🤝 叫上朋友一起去", delta: [0,0,0,0,0,0] }
    ]},
    { text: "在农场工作中，你更看重？", options: [
        { text: "⚡ 自动化洒水器，效率至上", delta: [0,0,0,0,0,0] },
        { text: "🌸 手工照顾每一株作物", delta: [0,0,0,0,0,0] },
        { text: "🧺 畜牧业与动物互动", delta: [0,0,0,0,0,0] },
        { text: "🍷 酿酒/果酱艺术", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你的周末通常怎么安排？", options: [
        { text: "🏕️ 户外徒步或露营", delta: [0,0,0,0,0,0] },
        { text: "🎭 参加社交聚会/派对", delta: [0,0,0,0,0,0] },
        { text: "🛠️ 修理/建造东西", delta: [0,0,0,0,0,0] },
        { text: "📺 在家追剧刷手机", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你对占卜、魔法或巫师塔的看法？", options: [
        { text: "🔮 深信不疑，充满向往", delta: [0,0,0,0,0,0] },
        { text: "🧪 科学解释一切，略感兴趣", delta: [0,0,0,0,0,0] },
        { text: "😅 害怕，敬而远之", delta: [0,0,0,0,0,0] },
        { text: "✨ 只是娱乐，但很有趣", delta: [0,0,0,0,0,0] }
    ]},
    { text: "在矿洞遇到巨大史莱姆，你会？", options: [
        { text: "⚔️ 拔剑冲上去", delta: [0,0,0,0,0,0] },
        { text: "🎯 远程放风筝消耗", delta: [0,0,0,0,0,0] },
        { text: "🚪 绕路逃跑", delta: [0,0,0,0,0,0] },
        { text: "🛡️ 用炸弹和地形取胜", delta: [0,0,0,0,0,0] }
    ]},
    { text: "你希望未来如何被人记住？", options: [
        { text: "❤️ 一个善良温暖的朋友", delta: [0,0,0,0,0,0] },
        { text: "🏆 创造传奇财富或成就", delta: [0,0,0,0,0,0] },
        { text: "🎨 杰出的艺术家", delta: [0,0,0,0,0,0] },
        { text: "🌲 与自然共存的隐士", delta: [0,0,0,0,0,0] }
    ]}
];

// ======================= 全局变量 =======================
let userSelections = new Array(QUESTIONS.length).fill(null);
const introPanel = document.getElementById('introPanel');
const testPanel = document.getElementById('testPanel');
const resultPanel = document.getElementById('resultPanel');

// ======================= 辅助函数 =======================
/** 渲染所有题目及选项（纵向布局） */
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
            btn.innerText = opt.text;
            btn.addEventListener("click", () => {
                userSelections[idx] = optIdx;
                // 刷新当前题目所有按钮高亮
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

/** 计算汉明距离（不一致题目数）*/
function hammingDistance(userSel, ideal) {
    let diff = 0;
    for (let i = 0; i < userSel.length; i++) {
        if (userSel[i] !== ideal[i]) diff++;
    }
    return diff;
}

/** 寻找最佳匹配角色（基于理想答案模式）*/
function findBestMatch(userSelections) {
    const matches = CHARACTERS.map(char => {
        const ideal = IDEAL_ANSWERS[char.name];
        if (!ideal) return { ...char, distance: 999, matchRate: 0 };
        const distance = hammingDistance(userSelections, ideal);
        const matchRate = ((QUESTIONS.length - distance) / QUESTIONS.length) * 100;
        return { ...char, distance, matchRate: Math.min(99.9, Math.max(0, matchRate)) };
    });
    matches.sort((a, b) => a.distance - b.distance);
    return matches;
}

/** 显示结果（头像、匹配度、角色描述）*/
function showResults() {
    const ranked = findBestMatch(userSelections);
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
                <div class="desc">${best.desc || "居住在星露谷，有着独特的个性。"}</div>
                <div style="margin-top:12px; font-size:0.9rem; color:#7c6b4f;">
                    ⚡ 基于20道理想答案模式匹配 • 越相似匹配度越高
                </div>
            </div>
        </div>
        <div style="text-align:center; margin-top: 1rem;">
            <button class="btn-retake" id="retakeBtn">🌱 重新测试 🌱</button>
        </div>
    `;
    
    // 隐藏其他面板，显示结果
    introPanel.style.display = "none";
    testPanel.style.display = "none";
    resultPanel.style.display = "block";
    
    // 绑定重新测试按钮
    const retakeBtn = document.getElementById("retakeBtn");
    if (retakeBtn) {
        retakeBtn.addEventListener("click", () => {
            // 重置所有答案
            userSelections.fill(null);
            renderQuestions();          // 重新渲染题目（清空高亮）
            introPanel.style.display = "flex";
            testPanel.style.display = "none";
            resultPanel.style.display = "none";
        });
    }
}

/** 校验是否所有题目都已作答 */
function checkAllAnswered() {
    return userSelections.every(idx => idx !== null);
}

// ======================= 页面初始化及事件绑定 =======================
document.addEventListener("DOMContentLoaded", () => {
    // 设置小鸡动图路径
    const chickenImg = document.getElementById("chickenGif");
    if (chickenImg) {
        chickenImg.src = `${avatarBasePath}1.gif`;
        chickenImg.onerror = () => { chickenImg.src = "https://via.placeholder.com/200?text=🐔"; };
    }
    
    // 预渲染题目（先不显示）
    renderQuestions();
    
    // 开始测试按钮
    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            // 重置所有答案（可选，也可以保留上次未完成的，但重置更干净）
            userSelections.fill(null);
            renderQuestions();   // 清除高亮
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
    
    // 初始状态：只显示介绍面板
    introPanel.style.display = "flex";
    testPanel.style.display = "none";
    resultPanel.style.display = "none";
});
