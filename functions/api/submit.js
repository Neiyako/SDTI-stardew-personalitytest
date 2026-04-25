// functions/api/submit.js
export async function onRequest(context) {
    // 只接受 POST 请求
    if (context.request.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    // 从环境变量获取数据库绑定（需要在 Pages 项目设置中绑定 D1）
    // 注意：Pages 绑定 D1 的变量名必须与这里一致，我们在后续步骤中设置
    const db = context.env.DB;
    if (!db) {
        return new Response("Database not bound", { status: 500 });
    }

    try {
        const body = await context.request.json();
        const { sessionId, answers, matchedCharacter, matchPercent } = body;

        // 基本验证
        if (!sessionId || !answers || !matchedCharacter || matchPercent === undefined) {
            return new Response(JSON.stringify({ error: "Missing fields" }), { 
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // 获取 IP 哈希（隐私保护）
        const ip = context.request.headers.get("CF-Connecting-IP") || 
                   context.request.headers.get("X-Forwarded-For") || 
                   "unknown";
        const ipHash = await sha256(ip);
        const userAgent = context.request.headers.get("User-Agent") || "";

        // 插入数据库
        const stmt = db.prepare(`
            INSERT INTO test_results (session_id, answers, matched_character, match_percent, user_agent, ip_hash)
            VALUES (?, ?, ?, ?, ?, ?)
        `);
        await stmt.bind(sessionId, JSON.stringify(answers), matchedCharacter, matchPercent, userAgent, ipHash).run();

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Internal server error" }), { 
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}

async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
