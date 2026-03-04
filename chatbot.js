// ========================================
//  PORTFOLIO CHATBOT — Ajitha Rajkumar
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    //  KNOWLEDGE BASE
    // =============================================
    const PROFILE = {
        name: 'Ajitha Rajkumar',
        role: 'Project & Delivery Management Professional',
        company: 'Jio Platforms Limited',
        location: 'India',
        linkedin: 'https://www.linkedin.com/in/ajitha-rajkumar/',
        github: 'https://github.com/Ajitha-Rajkumar',
        email: 'ajitha.rajkumar@email.com',
        yearsAtJio: '3+',
        summary: 'A dedicated professional at Jio Platforms Limited with 3+ years of experience spanning SIT delivery, production support optimization, process documentation, and full feature delivery management.',
    };

    const SKILLS = [
        { name: 'Azure DevOps', desc: 'Project lifecycle management, sprint planning, feature tracking & delivery.' },
        { name: 'Avolution Abacus', desc: 'Enterprise architecture, process documentation, business process modeling.' },
        { name: 'eTOM / TM Forum', desc: 'Telecom operations mapping, business process alignment to industry standards.' },
        { name: 'Project & Delivery Management', desc: 'Agile methodology, milestone tracking, cross-functional team coordination.' },
        { name: 'Infrastructure Automation', desc: 'Fiber automation features, SIT delivery, Siteforge feature management.' },
        { name: 'Production Support', desc: 'Ticket resolution, issue triaging, process streamlining & UX improvement.' },
    ];

    const PROJECTS = [
        {
            name: 'Siteforge — Complete Feature Delivery',
            period: 'Aug 2024 — Present',
            tag: 'Current',
            desc: 'Handling end-to-end delivery of Siteforge features, managing the complete development lifecycle from requirements to production release using Azure DevOps.',
            highlights: [
                'Managing complete delivery of Siteforge features',
                'Coordinating with cross-functional teams for timely milestones',
                'Driving stakeholder alignment on requirements & release schedules',
            ],
            tech: ['Azure DevOps', 'Agile', 'Feature Delivery'],
        },
        {
            name: 'Jio Process Documentation & eTOM Mapping',
            period: '2024 — Aug 2024',
            tag: 'Documentation',
            desc: 'Documented Jio infrastructure automation processes using Avolution Abacus and mapped them to eTOM standards defined by TM Forum.',
            highlights: [
                'Created process documentation using Avolution Abacus',
                'Coordinated with solution architects across Jio to capture business process steps with impacted systems',
                'Mapped Jio processes to eTOM standards defined by TM Forum',
            ],
            tech: ['Avolution Abacus', 'eTOM', 'TM Forum'],
        },
        {
            name: 'One Fiber — Production Ticket Reduction',
            period: '2023 — 2024',
            tag: 'Operations',
            desc: 'Anchored the One Fiber production ticket reduction project, achieving a 70% reduction in support tickets by streamlining processes and improving user experience.',
            highlights: [
                'Anchored ticket reduction project for one full year',
                'Reduced 70% support tickets through process streamlining',
                'Monitored core fiber build links across the country',
            ],
            tech: ['Production Support', 'Process Optimization', 'UX'],
        },
        {
            name: 'P2B OSP Feature — SIT Delivery',
            period: '2022 — 2023',
            tag: 'SIT Delivery',
            desc: 'Managed the System Integration Testing (SIT) delivery of the P2B OSP feature, ensuring quality and readiness for production deployment.',
            highlights: [
                'Led SIT delivery of P2B OSP feature',
                'Coordinated testing cycles and defect management',
                'Facilitated triage calls across cross-functional teams',
            ],
            tech: ['SIT', 'Azure DevOps', 'Defect Management'],
        },
    ];

    const EXPERIENCE = [
        { period: 'Aug 2024 — Present', role: 'Delivery Manager', project: 'Siteforge Feature Delivery', desc: 'Handling complete end-to-end delivery of Siteforge features.' },
        { period: '2024 — Aug 2024', role: 'Process Documentation Lead', project: 'Jio Process Documentation & eTOM Mapping', desc: 'Documented processes using Avolution Abacus and coordinated with solution architects across Jio to map business processes to eTOM standards.' },
        { period: '2023 — 2024', role: 'Project Anchor', project: 'One Fiber — Production Ticket Reduction', desc: 'Anchored ticket reduction project, achieved 70% reduction in support tickets.' },
        { period: '2022 — 2023', role: 'SIT Delivery Coordinator', project: 'P2B OSP Feature — SIT Delivery', desc: 'Managed SIT delivery of P2B OSP feature.' },
    ];

    // =============================================
    //  INTENT PATTERNS & RESPONSES
    // =============================================
    const intents = [
        // --- Greetings ---
        {
            patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'howdy', 'what\'s up', 'sup'],
            response: () => `Hi there! 👋 I'm <strong>Ajitha's portfolio assistant</strong>. I can tell you about her experience, projects, skills, and more. What would you like to know?`,
            quickReplies: ['About Ajitha', 'Skills', 'Projects', 'Experience', 'Contact'],
        },

        // --- About / Who ---
        {
            patterns: ['who is ajitha', 'who are you', 'tell me about ajitha', 'about ajitha', 'about you', 'about her', 'about yourself', 'introduce', 'introduction', 'about me', 'who is she', 'profile', 'bio', 'background'],
            response: () => `<strong>${PROFILE.name}</strong> is a ${PROFILE.role} at <strong>${PROFILE.company}</strong> with ${PROFILE.yearsAtJio} years of experience.<br><br>${PROFILE.summary}<br><br>She has worked on key projects including Siteforge delivery, One Fiber ticket reduction (70% reduction!), Jio Process Documentation using Avolution Abacus, and P2B OSP SIT delivery.`,
            quickReplies: ['Skills', 'Projects', 'Experience', 'Contact'],
        },

        // --- Skills ---
        {
            patterns: ['skills', 'what skills', 'expertise', 'what can she do', 'capabilities', 'competencies', 'technologies', 'tools', 'tech stack', 'what does she know', 'strengths'],
            response: () => {
                let list = SKILLS.map(s => `<li><strong>${s.name}</strong> — ${s.desc}</li>`).join('');
                return `Here are Ajitha's key skills & expertise:<ul>${list}</ul>`;
            },
            quickReplies: ['Azure DevOps', 'Avolution Abacus', 'eTOM', 'Projects'],
        },

        // --- Azure DevOps ---
        {
            patterns: ['azure devops', 'azure', 'devops', 'ado'],
            response: () => `<strong>Azure DevOps</strong> is one of Ajitha's core tools. She uses it for:<ul><li>Project lifecycle management & sprint planning</li><li>Feature tracking & delivery across all projects</li><li>Defect management & triage coordination</li></ul>She has used Azure DevOps across all her projects at Jio — from P2B OSP SIT delivery to the current Siteforge feature delivery.`,
            quickReplies: ['Siteforge', 'P2B OSP', 'All Skills'],
        },

        // --- Avolution Abacus ---
        {
            patterns: ['abacus', 'avolution', 'avolution abacus', 'enterprise architecture'],
            response: () => `<strong>Avolution Abacus</strong> is the enterprise architecture tool Ajitha used for the <strong>Jio Process Documentation</strong> project (2024 — Aug 2024).<br><br>She documented Jio infrastructure automation processes, working closely with solution architects across Jio to capture business process steps along with impacted systems, and mapped them to eTOM standards.`,
            quickReplies: ['eTOM', 'Process Documentation', 'Experience'],
        },

        // --- eTOM / TM Forum ---
        {
            patterns: ['etom', 'tm forum', 'telecom operations map', 'telecom standards', 'enhanced telecom'],
            response: () => `<strong>eTOM (Enhanced Telecom Operations Map)</strong> is an industry-standard framework defined by <strong>TM Forum</strong>.<br><br>Ajitha coordinated with solution architects across Jio to capture business process steps with impacted systems and mapped them to eTOM processes. This ensured Jio's processes align with global telecom industry best practices.`,
            quickReplies: ['Avolution Abacus', 'Process Documentation', 'Skills'],
        },

        // --- Projects (general) ---
        {
            patterns: ['projects', 'what projects', 'tell me about projects', 'work', 'what has she worked on', 'portfolio', 'deliverables', 'what did she do'],
            response: () => {
                let list = PROJECTS.map(p => `<li><strong>${p.name}</strong> (${p.period}) — ${p.desc.substring(0, 80)}...</li>`).join('');
                return `Ajitha has delivered <strong>4 major projects</strong> at Jio Platforms Limited:<ul>${list}</ul>Which project would you like to know more about?`;
            },
            quickReplies: ['Siteforge', 'Process Documentation', 'One Fiber', 'P2B OSP'],
        },

        // --- Siteforge ---
        {
            patterns: ['siteforge', 'site forge', 'current project', 'current work', 'what is she doing now', 'present project', 'latest project', 'working on now'],
            response: () => {
                const p = PROJECTS[0];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Other Projects', 'Experience', 'Skills'],
        },

        // --- Process Documentation ---
        {
            patterns: ['process documentation', 'documentation project', 'jio process', 'bpmn', 'process mapping', 'document'],
            response: () => {
                const p = PROJECTS[1];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Avolution Abacus', 'eTOM', 'Other Projects'],
        },

        // --- One Fiber ---
        {
            patterns: ['one fiber', 'onefiber', 'ticket reduction', 'production ticket', 'support ticket', '70%', 'seventy percent'],
            response: () => {
                const p = PROJECTS[2];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>🎯 <strong>Impact: 70% reduction in support tickets!</strong><br><br>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Other Projects', 'Experience', 'Achievements'],
        },

        // --- P2B OSP ---
        {
            patterns: ['p2b', 'osp', 'p2b osp', 'sit delivery', 'system integration testing', 'sit'],
            response: () => {
                const p = PROJECTS[3];
                let highlights = p.highlights.map(h => `<li>${h}</li>`).join('');
                return `<strong>${p.name}</strong><br>📅 ${p.period} | 🏷️ ${p.tag}<br><br>${p.desc}<br><br>Key highlights:<ul>${highlights}</ul>Technologies: ${p.tech.join(', ')}`;
            },
            quickReplies: ['Other Projects', 'Experience', 'Skills'],
        },

        // --- Experience ---
        {
            patterns: ['experience', 'career', 'work history', 'timeline', 'journey', 'roles', 'positions', 'work experience', 'career journey'],
            response: () => {
                let timeline = EXPERIENCE.map(e =>
                    `<li><strong>${e.period}</strong> — ${e.role}<br><em>${e.project}</em>: ${e.desc}</li>`
                ).join('');
                return `Here's Ajitha's career journey at <strong>Jio Platforms Limited</strong>:<ul>${timeline}</ul>All roles are within Jio Platforms Limited.`;
            },
            quickReplies: ['Siteforge', 'One Fiber', 'Skills', 'Contact'],
        },

        // --- Current Role ---
        {
            patterns: ['current role', 'current position', 'what does she do', 'role now', 'designation', 'title'],
            response: () => `Ajitha is currently working as a <strong>Delivery Manager</strong> at <strong>Jio Platforms Limited</strong>, handling the complete end-to-end delivery of <strong>Siteforge features</strong> since August 2024.<br><br>She manages the full development lifecycle — from requirements gathering through production release — using Azure DevOps for tracking and cross-functional team coordination.`,
            quickReplies: ['Siteforge', 'Past Projects', 'Skills'],
        },

        // --- Achievements ---
        {
            patterns: ['achievements', 'accomplishments', 'impact', 'results', 'key achievement', 'proud of'],
            response: () => `Here are Ajitha's standout achievements at Jio:<ul><li>🎯 <strong>70% reduction in support tickets</strong> — One Fiber project (2023–2024)</li><li>📋 <strong>End-to-end process documentation</strong> using Avolution Abacus mapped to eTOM standards</li><li>🤝 <strong>Cross-Jio coordination</strong> — worked with solution architects across the organization</li><li>🚀 <strong>Full feature delivery ownership</strong> — currently managing Siteforge delivery</li><li>📊 <strong>3+ years of consistent delivery</strong> across 4 major projects at Jio</li></ul>`,
            quickReplies: ['Projects', 'Experience', 'Skills'],
        },

        // --- Contact ---
        {
            patterns: ['contact', 'reach', 'email', 'get in touch', 'connect', 'how to contact', 'reach out', 'talk to', 'hire', 'message'],
            response: () => `You can reach <strong>Ajitha Rajkumar</strong> through:<ul><li>📧 <strong>Email:</strong> ${PROFILE.email}</li><li>💼 <strong>LinkedIn:</strong> <a href="${PROFILE.linkedin}" target="_blank">linkedin.com/in/ajitha-rajkumar</a></li><li>🐙 <strong>GitHub:</strong> <a href="${PROFILE.github}" target="_blank">github.com/Ajitha-Rajkumar</a></li><li>📍 <strong>Location:</strong> ${PROFILE.location}</li></ul>Or use the <strong>contact form</strong> on this page!`,
            quickReplies: ['LinkedIn', 'GitHub', 'About Ajitha'],
        },

        // --- LinkedIn ---
        {
            patterns: ['linkedin', 'linked in', 'linkedin profile', 'linkedin url'],
            response: () => `You can find Ajitha on LinkedIn here:<br><br>🔗 <a href="${PROFILE.linkedin}" target="_blank"><strong>linkedin.com/in/ajitha-rajkumar</strong></a><br><br>Feel free to connect!`,
            quickReplies: ['GitHub', 'Contact', 'About Ajitha'],
        },

        // --- GitHub ---
        {
            patterns: ['github', 'git hub', 'github profile', 'repositories', 'repos', 'code', 'open source'],
            response: () => `Check out Ajitha's GitHub profile:<br><br>🐙 <a href="${PROFILE.github}" target="_blank"><strong>github.com/Ajitha-Rajkumar</strong></a><br><br>She has repositories including LogisticsShippingRates (Python), portfolio projects, and more.`,
            quickReplies: ['LinkedIn', 'Contact', 'Skills'],
        },

        // --- Company / Jio ---
        {
            patterns: ['jio', 'company', 'organization', 'where does she work', 'employer', 'jio platforms'],
            response: () => `Ajitha works at <strong>Jio Platforms Limited</strong>, one of India's largest technology companies. She has been with Jio for <strong>3+ years</strong> (since 2022), working across multiple critical projects in infrastructure automation and telecom operations.<br><br>Her journey at Jio spans from SIT delivery to her current role as Delivery Manager for Siteforge.`,
            quickReplies: ['Experience', 'Projects', 'Current Role'],
        },

        // --- Location ---
        {
            patterns: ['location', 'where', 'based', 'city', 'country'],
            response: () => `Ajitha is based in <strong>India</strong>, working at <strong>Jio Platforms Limited</strong>.`,
            quickReplies: ['Contact', 'About Ajitha', 'LinkedIn'],
        },

        // --- Resume ---
        {
            patterns: ['resume', 'cv', 'download resume', 'curriculum vitae'],
            response: () => `You can download Ajitha's resume by clicking the <strong>"Download Resume"</strong> button in the About section above, or <a href="Ajitha Rajkumar - resume.docx" download>click here to download</a>.`,
            quickReplies: ['About Ajitha', 'Skills', 'Experience'],
        },

        // --- Education ---
        {
            patterns: ['education', 'degree', 'university', 'college', 'qualification', 'study', 'studied'],
            response: () => `I don't have specific education details available right now. You can check Ajitha's <a href="${PROFILE.linkedin}" target="_blank">LinkedIn profile</a> or download her <a href="Ajitha Rajkumar - resume.docx" download>resume</a> for full education details.`,
            quickReplies: ['Skills', 'Experience', 'Contact'],
        },

        // --- Fiber / Telecom ---
        {
            patterns: ['fiber', 'fibre', 'telecom', 'telecommunications', 'network', 'infrastructure'],
            response: () => `Ajitha has extensive experience in <strong>telecom infrastructure</strong> at Jio:<ul><li><strong>One Fiber:</strong> Anchored production ticket reduction, achieving 70% ticket reduction</li><li><strong>P2B OSP:</strong> Managed SIT delivery for fiber automation</li><li><strong>eTOM Mapping:</strong> Aligned Jio processes to global telecom standards</li><li><strong>Siteforge:</strong> Currently delivering infrastructure features</li></ul>Her work spans fiber build monitoring, automation, and network operations across India.`,
            quickReplies: ['One Fiber', 'Siteforge', 'eTOM'],
        },

        // --- Agile ---
        {
            patterns: ['agile', 'scrum', 'sprint', 'methodology'],
            response: () => `Ajitha follows <strong>Agile methodology</strong> in her delivery management work. She uses <strong>Azure DevOps</strong> for sprint planning, feature tracking, and lifecycle management across all her projects at Jio Platforms Limited.`,
            quickReplies: ['Azure DevOps', 'Projects', 'Skills'],
        },

        // --- Thanks ---
        {
            patterns: ['thanks', 'thank you', 'thank', 'thx', 'appreciate', 'helpful', 'great'],
            response: () => `You're welcome! 😊 Glad I could help. Feel free to ask anything else about Ajitha's portfolio, or use the contact form to get in touch directly!`,
            quickReplies: ['Contact', 'Projects', 'LinkedIn'],
        },

        // --- Goodbye ---
        {
            patterns: ['bye', 'goodbye', 'see you', 'later', 'take care', 'exit', 'quit', 'close'],
            response: () => `Goodbye! 👋 Thanks for visiting Ajitha's portfolio. Feel free to come back anytime or reach out through the contact section. Have a great day!`,
            quickReplies: ['Contact', 'LinkedIn'],
        },

        // --- Help ---
        {
            patterns: ['help', 'what can you do', 'options', 'menu', 'commands', 'how to use', 'what do you know'],
            response: () => `I can help you learn about Ajitha Rajkumar's portfolio! Here's what I can tell you about:<ul><li>👤 <strong>About</strong> — Who is Ajitha?</li><li>💼 <strong>Experience</strong> — Career timeline at Jio</li><li>🚀 <strong>Projects</strong> — Siteforge, One Fiber, Process Docs, P2B OSP</li><li>🛠️ <strong>Skills</strong> — Azure DevOps, Abacus, eTOM, etc.</li><li>🏆 <strong>Achievements</strong> — Key impacts & results</li><li>📞 <strong>Contact</strong> — Email, LinkedIn, GitHub</li></ul>Just ask a question or tap a quick reply!`,
            quickReplies: ['About Ajitha', 'Projects', 'Skills', 'Contact'],
        },
    ];

    // =============================================
    //  MATCHING ENGINE
    // =============================================
    function findBestIntent(input) {
        const cleaned = input.toLowerCase().replace(/[^\w\s]/g, '').trim();
        const words = cleaned.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const intent of intents) {
            let score = 0;

            for (const pattern of intent.patterns) {
                const patternWords = pattern.toLowerCase().split(/\s+/);

                // Exact full match
                if (cleaned === pattern.toLowerCase()) {
                    score = Math.max(score, 100);
                    continue;
                }

                // Full pattern contained in input
                if (cleaned.includes(pattern.toLowerCase())) {
                    score = Math.max(score, 80 + patternWords.length * 5);
                    continue;
                }

                // Word-level matching
                let wordMatches = 0;
                for (const pw of patternWords) {
                    if (words.some(w => w === pw || w.includes(pw) || pw.includes(w))) {
                        wordMatches++;
                    }
                }

                if (wordMatches > 0) {
                    const wordScore = (wordMatches / patternWords.length) * 60 + wordMatches * 5;
                    score = Math.max(score, wordScore);
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = intent;
            }
        }

        // Require a minimum confidence threshold
        if (bestScore >= 25 && bestMatch) {
            return bestMatch;
        }

        return null;
    }

    function getFallbackResponse() {
        const fallbacks = [
            `I'm not sure I have information about that. I can help with Ajitha's <strong>skills</strong>, <strong>projects</strong>, <strong>experience</strong>, or <strong>contact</strong> details. What would you like to know?`,
            `Hmm, I don't have details on that topic. Try asking about Ajitha's <strong>projects at Jio</strong>, her <strong>skills</strong>, or how to <strong>get in touch</strong>!`,
            `I'm specifically designed to answer questions about Ajitha Rajkumar's portfolio. Try asking about her <strong>experience</strong>, <strong>Siteforge project</strong>, or <strong>achievements</strong>!`,
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    // =============================================
    //  UI BUILDER
    // =============================================
    function buildChatbotUI() {
        // Launcher button
        const launcher = document.createElement('button');
        launcher.className = 'chatbot-launcher';
        launcher.id = 'chatbotLauncher';
        launcher.setAttribute('aria-label', 'Open chatbot');
        launcher.innerHTML = `
            <i class="fas fa-comment-dots icon-chat"></i>
            <i class="fas fa-times icon-close"></i>
            <span class="badge">1</span>
        `;

        // Chat window
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chatbot-window';
        chatWindow.id = 'chatbotWindow';
        chatWindow.innerHTML = `
            <div class="chatbot-header">
                <div class="chatbot-avatar"><i class="fas fa-robot"></i></div>
                <div class="chatbot-header-info">
                    <h4>Ajitha's Portfolio Bot</h4>
                    <p><span class="online-dot"></span> Online — Ask me anything</p>
                </div>
            </div>
            <div class="chatbot-messages" id="chatbotMessages"></div>
            <div class="chatbot-input">
                <input type="text" id="chatbotInput" placeholder="Type your question..." autocomplete="off">
                <button id="chatbotSend" aria-label="Send message"><i class="fas fa-paper-plane"></i></button>
            </div>
        `;

        document.body.appendChild(launcher);
        document.body.appendChild(chatWindow);

        return { launcher, chatWindow };
    }

    // =============================================
    //  CHAT FUNCTIONS
    // =============================================
    const { launcher, chatWindow } = buildChatbotUI();
    const messagesContainer = document.getElementById('chatbotMessages');
    const inputField = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('chatbotSend');

    let isOpen = false;
    let hasGreeted = false;

    function toggleChat() {
        isOpen = !isOpen;
        launcher.classList.toggle('active', isOpen);
        chatWindow.classList.toggle('open', isOpen);

        if (isOpen && !hasGreeted) {
            hasGreeted = true;
            // Remove badge
            const badge = launcher.querySelector('.badge');
            if (badge) badge.remove();
            // Welcome message
            setTimeout(() => {
                addBotMessage(
                    `Hi there! 👋 I'm <strong>Ajitha's portfolio assistant</strong>. I can tell you about her experience at Jio, projects, skills, and how to get in touch.<br><br>What would you like to know?`,
                    ['About Ajitha', 'Projects', 'Skills', 'Experience', 'Contact']
                );
            }, 400);
        }

        if (isOpen) {
            setTimeout(() => inputField.focus(), 400);
        }
    }

    function addBotMessage(html, quickReplies = []) {
        // Show typing indicator first
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.innerHTML = `
            <div class="msg-avatar"><i class="fas fa-robot"></i></div>
            <div class="typing-dots"><span></span><span></span><span></span></div>
        `;
        messagesContainer.appendChild(typing);
        scrollToBottom();

        // Replace with actual message after a brief delay
        const delay = Math.min(400 + html.length * 2, 1200);
        setTimeout(() => {
            typing.remove();

            const msg = document.createElement('div');
            msg.className = 'chat-message bot';
            msg.innerHTML = `
                <div class="msg-avatar"><i class="fas fa-robot"></i></div>
                <div class="msg-bubble">${html}</div>
            `;
            messagesContainer.appendChild(msg);

            // Quick replies
            if (quickReplies.length > 0) {
                const qrContainer = document.createElement('div');
                qrContainer.className = 'quick-replies';
                quickReplies.forEach(text => {
                    const btn = document.createElement('button');
                    btn.className = 'quick-reply-btn';
                    btn.textContent = text;
                    btn.addEventListener('click', () => {
                        handleUserInput(text);
                        // Remove quick replies after clicking
                        qrContainer.remove();
                    });
                    qrContainer.appendChild(btn);
                });
                messagesContainer.appendChild(qrContainer);
            }

            scrollToBottom();
        }, delay);
    }

    function addUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'chat-message user';
        msg.innerHTML = `
            <div class="msg-avatar"><i class="fas fa-user"></i></div>
            <div class="msg-bubble">${escapeHtml(text)}</div>
        `;
        messagesContainer.appendChild(msg);
        scrollToBottom();
    }

    function handleUserInput(text) {
        if (!text.trim()) return;

        addUserMessage(text);
        inputField.value = '';

        // Remove any existing quick replies
        const existingQR = messagesContainer.querySelectorAll('.quick-replies');
        existingQR.forEach(qr => qr.remove());

        // Find intent
        const intent = findBestIntent(text);

        if (intent) {
            addBotMessage(intent.response(), intent.quickReplies || []);
        } else {
            addBotMessage(getFallbackResponse(), ['Help', 'Projects', 'Skills', 'Contact']);
        }
    }

    function scrollToBottom() {
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 50);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // =============================================
    //  EVENT LISTENERS
    // =============================================
    launcher.addEventListener('click', toggleChat);

    sendBtn.addEventListener('click', () => {
        handleUserInput(inputField.value);
    });

    inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleUserInput(inputField.value);
        }
    });

    // Close chat on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            toggleChat();
        }
    });

});
