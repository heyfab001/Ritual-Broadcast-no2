// AI Crypto Content Generator - Core Logic

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const topicInput = document.getElementById('topic');
    const styleSelect = document.getElementById('style');
    const platformSelect = document.getElementById('platform');
    const generateBtn = document.getElementById('generate-btn');
    const clearBtn = document.getElementById('clear-btn');
    
    const outputContainer = document.getElementById('output-container');
    const outputTextArea = document.getElementById('output-text');
    const placeholderScreen = document.getElementById('placeholder-screen');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingMsg = document.getElementById('loading-msg');
    const statusIndicator = document.getElementById('status-indicator');
    
    const outputFooter = document.getElementById('output-footer');
    const wordCountSpan = document.getElementById('word-count');
    const charCountSpan = document.getElementById('char-count');
    const copyBtn = document.getElementById('copy-btn');
    const downloadBtn = document.getElementById('download-btn');
    
    // Status message cycles during loading
    const loadingSteps = [
        "Initializing core agent...",
        "Scanning recent DeFi and web3 trends...",
        "Structuring layout for platforms...",
        "Injecting crypto vocabulary and hooks...",
        "Refining tokenomics explanations...",
        "Finalizing copy for maximum engagement..."
    ];
    
    // Core Template Database
    const templates = {
        x: {
            educational: [
                "What is {{TOPIC}}? A simple, non-hype breakdown for builders and investors. 🧵 👇\n\n" +
                "1/ Concept Overview\n" +
                "At its core, {{TOPIC}} is a mechanism designed to solve key bottlenecks in the current Web3 landscape. Instead of relying on centralized facilitators, it establishes a trustless framework enabling users to interact directly.\n\n" +
                "2/ How It Works\n" +
                "• Decentralized nodes validate state transitions.\n" +
                "• Cryptographic proofs secure asset transfers.\n" +
                "• Built-in incentives align user behavior with network growth.\n\n" +
                "3/ The Core Value Proposition\n" +
                "It eliminates intermediaries, reduces fee latency, and maximizes composability. In short: it is faster, cheaper, and fully self-custodial.\n\n" +
                "4/ Why this matters now:\n" +
                "As scalability becomes the primary battleground, implementations of {{TOPIC}} are showing a 10x improvement over legacy setups. Developer adoption is already spiking.\n\n" +
                "5/ Summary\n" +
                "{{TOPIC}} isn't just a trend—it's foundational infrastructure. \n\n" +
                "What are your thoughts on this approach? Bookmark this thread and drop a comment below! 📈"
            ],
            technical: [
                "Deconstructing the architecture of {{TOPIC}}: Under the hood of state verification and consensus mechanics. 💻 ⛓️\n\n" +
                "1/ State Transition Function\n" +
                "At the protocol layer, {{TOPIC}} implements a state transition model designed to minimize verification complexity. Transitions are validated off-chain, then compressed and submitted to the main settlement layer.\n\n" +
                "2/ Core Protocol Architecture\n" +
                "• Aggregators: Group raw transactions into zero-knowledge state roots.\n" +
                "• Validation: Validators run optimistic or zk-snark execution tests.\n" +
                "• Settlement: Smart contracts verify assertions on L1, unlocking ultimate trustless security.\n\n" +
                "3/ Gas & Throughput Metrics\n" +
                "By utilizing data availability compression, {{TOPIC}} reduces transaction sizes from ~100 bytes to just ~12 bytes. This results in:\n" +
                "• Up to 92% gas cost reduction\n" +
                "• 1,500+ TPS throughput scaling limits\n\n" +
                "4/ Security Hardening\n" +
                "To mitigate reentrancy and oracle manipulation, developers leverage mathematical assertions and multi-signature checkpoints. Audits verify that execution paths remain strictly deterministic.\n\n" +
                "5/ Next Epoch:\n" +
                "The focus is moving towards native multi-chain messaging protocols, allowing {{TOPIC}} to achieve absolute interoperability.\n\n" +
                "Check out the repo, inspect the contracts, and let's build! 🛠️"
            ],
            viral: [
                "99% of people are completely sleeping on {{TOPIC}}.\n\n" +
                "We are witnessing a quiet revolution that will reshape the next cycle. Here is what you need to know before the crowd wakes up: 🧵 👇\n\n" +
                "• The Problem: High fees, slow transaction times, and heavy centralization.\n" +
                "• The Solution: {{TOPIC}}.\n\n" +
                "Why is {{TOPIC}} a total game-changer?\n" +
                "Historically, protocols forced you to choose between speed and decentralization. This framework solves the trilemma by executing code off-chain while anchoring security directly into the main consensus layer.\n\n" +
                "The growth metrics are staggering:\n" +
                "🚀 TVL is up over 140% month-over-month\n" +
                "🚀 Active developer commits have tripled since Q1\n" +
                "🚀 Institutional backing is quietly scaling in behind the scenes\n\n" +
                "This isn't a speculative meme token. This is fundamental infrastructure that power users are integrating today.\n\n" +
                "Don't say you weren't warned. Retweet the first tweet if you found this valuable! 🔮 #Crypto #Web3"
            ]
        },
        linkedin: {
            educational: [
                "Understanding the Role of {{TOPIC}} in the Evolving Digital Economy 🌐\n\n" +
                "As blockchain adoption matures, enterprise leaders are focusing on solutions that offer tangible utility, scale, and compliance. One of the most significant developments in this area is {{TOPIC}}.\n\n" +
                "Simply put, {{TOPIC}} addresses the classic blockchain bottleneck by separating execution from consensus. This allows enterprises to transact rapidly without sacrificing the trustless security guarantees that make blockchain valuable.\n\n" +
                "Key takeaways for industry leaders:\n" +
                "1. Efficiency: Dramatically lowers operational costs by consolidating network verification processes.\n" +
                "2. Scalability: Unlocks enterprise-grade throughput, accommodating thousands of transactions per second.\n" +
                "3. Interoperability: Integrates smoothly with legacy accounting and ERP systems via API gateways.\n\n" +
                "As we look towards a decentralized future, understanding these structural components will be critical for businesses planning their digital strategy over the next 3-5 years.\n\n" +
                "Is your organization exploring implementations of {{TOPIC}}? Let's discuss in the comments below.\n\n" +
                "#Blockchain #Web3 #Technology #EnterpriseTech"
            ],
            technical: [
                "Deep Dive: Technical Analysis of {{TOPIC}} Protocol Security and Composability 🛡️\n\n" +
                "Building robust dApps requires deep alignment with protocol security and architectural optimizations. Today, let's analyze the technical implementation of {{TOPIC}}.\n\n" +
                "Unlike standard execution systems, {{TOPIC}} operates on a modular framework. It decouples the data availability (DA) layer from the execution environment, using high-performance settlement contracts to prove state accuracy.\n\n" +
                "Core Engineering Highlights:\n" +
                "• State Verification: Uses advanced validation engines to confirm state logs, minimizing storage requirements on-chain.\n" +
                "• Cross-Contract Composability: Employs decentralized relayer networks to synchronize calls across separate domains asynchronously.\n" +
                "• Fraud Proof Windows: Implements game-theoretic challenge-response models to ensure validators remain honest without requiring massive validator pools.\n\n" +
                "By optimizing the state-serialization pipeline, developers can build responsive, secure dApps that handle high user volumes without exposing user collateral to front-running risk.\n\n" +
                "What are your thoughts on decoupling execution from consensus? Let's talk protocols.\n\n" +
                "#SoftwareEngineering #BlockchainDevelopment #Solidity #Cybersecurity"
            ],
            viral: [
                "I've spent the last 6 months studying Web3 infra, and I am convinced:\n\n" +
                "{{TOPIC}} is the most undervalued technology in the crypto space right now. 🚀\n\n" +
                "While retail investors chase short-term hype cycles, smart developers and institutions are quietly building foundation layers on {{TOPIC}}.\n\n" +
                "Here is why this is a massive paradigm shift:\n" +
                "1. High throughput, low cost: It removes the economic barrier for everyday users, opening the floodgates for mass consumer adoption.\n" +
                "2. True decentralization: Unlike centralized databases, it relies on open-source code and verifiable mathematical equations.\n" +
                "3. Interoperable infrastructure: It binds separated ecosystems together, forming a unified network layer.\n" +
                "\n" +
                "We are no longer in the speculative phase of Web3. We are in the construction phase. Those who build now will lead the next decade of digital finance.\n\n" +
                "Agree or disagree? Share your perspective in the comments!\n\n" +
                "#Crypto #FutureOfFinance #DeFi #Innovation"
            ]
        },
        blog: {
            educational: [
                "# The Beginner's Guide to {{TOPIC}}: Concepts, Mechanisms, and Future Impact\n\n" +
                "The decentralized world moves at a breakneck speed. Among the wave of innovations currently gaining traction, **{{TOPIC}}** stands out as a critical breakthrough. But what exactly is it, and why does it matter? In this comprehensive guide, we'll explain {{TOPIC}} in plain language.\n\n" +
                "## 1. What is {{TOPIC}}?\n" +
                "At its core, {{TOPIC}} is a system that optimizes transactions and computation across decentralized ledgers. By modifying how states are verified, it allows networks to achieve far higher capacity while preserving security.\n\n" +
                "## 2. Why is {{TOPIC}} Necessary?\n" +
                "Traditional blockchains require every node to process every transaction. While secure, this structure limits transaction speeds and causes fees to skyrocket during peak hours. {{TOPIC}} solves this by delegation, processing data in structured groups off-chain before anchoring the final state back to the main ledger.\n\n" +
                "### Key Features:\n" +
                "- **Enhanced Speed:** Transactions settle in seconds rather than minutes.\n" +
                "- **Minimal Cost:** Gas fees are reduced by orders of magnitude.\n" +
                "- **Enterprise Ready:** Meets the performance demands of scale-driven organizations.\n\n" +
                "## 3. Real-World Applications\n" +
                "From Decentralized Finance (DeFi) markets processing millions in volume, to Web3 games handling rapid in-game actions, {{TOPIC}} provides the scalable infrastructure required to take crypto mainstream.\n\n" +
                "## Conclusion\n" +
                "{{TOPIC}} is more than just a tech update—it represents the scaling layer that will connect the next billion users to the open web. As projects implement this technology, we expect Web3 interfaces to become as seamless and affordable as traditional platforms."
            ],
            technical: [
                "# Technical Deep Dive: Architectural Foundations of {{TOPIC}}\n\n" +
                "In this paper, we evaluate the architectural design, throughput characteristics, and security assumptions of **{{TOPIC}}**. We analyze how modular layers verify off-chain calculations and store cryptographic proofs.\n\n" +
                "## 1. Protocol Architecture\n" +
                "{{TOPIC}} employs a modular execution layer that operates independently of consensus and data storage. The lifecycle of a transaction within this stack is structured as follows:\n\n" +
                "1. **Execution:** Users sign and submit transactions to a decentralized sequencer pool.\n" +
                "2. **State Updates:** The sequencer updates local state trees and generates a state transition root.\n" +
                "3. **Compression:** Raw data payload is condensed, keeping only the bare signatures and state modifications.\n" +
                "4. **Settlement:** The condensed payload and state roots are committed to the base contract, verifying state validity.\n\n" +
                "## 2. Throughput Benchmarking & Gas Optimization\n" +
                "To optimize gas costs, the state database utilizes Merkelized patricia trees. The table below represents gas efficiency compared to legacy execution environments:\n\n" +
                "| Operation | Legacy Gas Cost | {{TOPIC}} Gas Cost | Savings (%)\n" +
                "|---|---|---|---|\n" +
                "| Standard Transfer | 21,000 | 1,800 | ~91.4% |\n" +
                "| Smart Contract Call | 65,000 | 5,500 | ~91.5% |\n" +
                "| LP Token Minting | 120,000 | 9,800 | ~91.8% |\n\n" +
                "## 3. Threat Model and Security Assertions\n" +
                "The safety of {{TOPIC}} depends on a decentralized network of verifiers who run full nodes. If a sequencer attempts to submit an invalid state root, verifiers can issue a cryptographic proof to challenge the transition. If verified, the sequencer's stake is slashed and the state is rolled back. This game-theoretic structure ensures protocol safety even in adversarial settings."
            ],
            viral: [
                "# Why {{TOPIC}} is the Paradigm Shift Web3 Has Been Waiting For\n\n" +
                "The crypto market is obsessed with token launches and short-term trends. But if you look past the noise, you'll see a massive infrastructural shift taking place. The catalyst? **{{TOPIC}}**.\n\n" +
                "In this article, we'll explain why this technology is not just an incremental improvement, but the core engine of the next internet revolution.\n\n" +
                "## The Scaling Trilemma is Finally Solved\n" +
                "For years, blockchain developers were trapped in a loop: scale the network, and you risk centralization; prioritize decentralization, and gas fees render the network unusable. \n\n" +
                "{{TOPIC}} shatters this trilemma. By delegating computation to specialized execution environments and leaving security to decentralized settlement layers, it offers the best of both worlds: lightning-fast speeds and vault-like security.\n\n" +
                "## Institutional Validation is Accelerating\n" +
                "The market isn't waiting. Venture funding for {{TOPIC}}-related protocols has exceeded $2.5B in the past twelve months. Major financial institutions are already building private testnets using this precise architecture.\n\n" +
                "## The Future: Absolute Composability\n" +
                "In the next phase, we'll see seamless cross-chain assets floating across networks running on {{TOPIC}}. Users won't need to know which chain they're on; they will simply experience rapid, low-cost interactions.\n\n" +
                "**Summary:** {{TOPIC}} is building the rails for the decentralized financial network of the future. The question isn't whether it will succeed, but how quickly you can adapt to it."
            ]
        }
    };

    // Helper to format string replacing placeholders
    function formatTemplate(template, topic) {
        const cleanedTopic = topic.trim();
        const topicCaps = cleanedTopic.toUpperCase();
        
        return template
            .replace(/{{TOPIC}}/g, cleanedTopic)
            .replace(/{{TOPIC_CAPS}}/g, topicCaps);
    }

    // Typing Simulation Effect
    let typingInterval = null;
    
    function simulateTyping(text, element, speed = 8, callback) {
        element.value = "";
        let index = 0;
        
        if (typingInterval) clearInterval(typingInterval);
        
        typingInterval = setInterval(() => {
            if (index < text.length) {
                // Type characters
                element.value += text[index];
                index++;
                
                // Keep scrollbar pinned to bottom as it types
                element.scrollTop = element.scrollHeight;
                
                // Update stats live
                updateStats(element.value);
            } else {
                clearInterval(typingInterval);
                typingInterval = null;
                if (callback) callback();
            }
        }, speed);
    }

    // Quick instant complete if user clicks textarea during typing
    function stopTypingAndShowFull(text) {
        if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
            outputTextArea.value = text;
            updateStats(text);
            finalizeGenerationUI();
        }
    }

    // Update word and character counts
    function updateStats(text) {
        const charCount = text.length;
        const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
        
        charCountSpan.textContent = charCount;
        wordCountSpan.textContent = wordCount;
    }

    // Switch indicator UI to generating
    function setUIGenerating() {
        generateBtn.disabled = true;
        generateBtn.classList.add('generating');
        generateBtn.innerHTML = `<span class="btn-loader"></span>Generating...`;
        
        statusIndicator.textContent = "Processing...";
        statusIndicator.className = "status-indicator generating";
        
        placeholderScreen.classList.add('hidden');
        outputFooter.classList.remove('visible');
        loadingOverlay.classList.add('active');
        
        outputContainer.classList.add('active-border');
    }

    // Reset indicator UI to ready/normal
    function finalizeGenerationUI() {
        generateBtn.disabled = false;
        generateBtn.classList.remove('generating');
        generateBtn.innerHTML = `<i class="lucide-icon btn-icon" data-lucide="sparkles"></i>Generate Content`;
        // Re-init lucide icons on button since HTML changed
        if (window.lucide) window.lucide.createIcons();
        
        statusIndicator.textContent = "Generated";
        statusIndicator.className = "status-indicator ready";
        
        loadingOverlay.classList.remove('active');
        outputFooter.classList.add('visible');
    }

    // Master Generator Function
    function generateContent() {
        const topic = topicInput.value.trim();
        
        if (!topic) {
            // Highlight empty input
            topicInput.focus();
            topicInput.style.borderColor = "var(--neon-purple)";
            setTimeout(() => {
                topicInput.style.borderColor = "";
            }, 1500);
            return;
        }

        const style = styleSelect.value;
        const platform = platformSelect.value;
        
        setUIGenerating();
        
        // Cycle loading messages
        let step = 0;
        loadingMsg.textContent = loadingSteps[0];
        
        const msgInterval = setInterval(() => {
            step++;
            if (step < loadingSteps.length) {
                loadingMsg.textContent = loadingSteps[step];
            }
        }, 3500 / loadingSteps.length);

        // Simulate network / processing delay of 2.8s
        setTimeout(() => {
            clearInterval(msgInterval);
            
            // Get templates and format
            const platformTemplates = templates[platform];
            const selectedStyleTemplates = platformTemplates[style];
            const rawTemplate = selectedStyleTemplates[Math.floor(Math.random() * selectedStyleTemplates.length)];
            const formattedText = formatTemplate(rawTemplate, topic);
            
            loadingOverlay.classList.remove('active');
            
            // Start typewriter simulation
            simulateTyping(formattedText, outputTextArea, 6, () => {
                finalizeGenerationUI();
            });
            
            // Allow user to click container to skip typing effect
            outputContainer.onclick = () => {
                stopTypingAndShowFull(formattedText);
                outputContainer.onclick = null; // Remove handler
            };
            
        }, 2500);
    }

    // Trigger Generation on Button Click
    generateBtn.addEventListener('click', generateContent);

    // Support Enter Key in Input to Generate
    topicInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            generateContent();
        }
    });

    // Clear Button Functionality
    clearBtn.addEventListener('click', () => {
        if (typingInterval) {
            clearInterval(typingInterval);
            typingInterval = null;
        }
        
        topicInput.value = "";
        outputTextArea.value = "";
        
        placeholderScreen.classList.remove('hidden');
        outputFooter.classList.remove('visible');
        outputContainer.classList.remove('active-border');
        
        statusIndicator.textContent = "Idle";
        statusIndicator.className = "status-indicator";
        updateStats("");
    });

    // Copy Content to Clipboard
    copyBtn.addEventListener('click', () => {
        const textToCopy = outputTextArea.value;
        if (!textToCopy) return;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = `<i class="lucide-icon" data-lucide="check"></i>Copied!`;
            if (window.lucide) window.lucide.createIcons();
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = `<i class="lucide-icon" data-lucide="copy"></i>Copy`;
                if (window.lucide) window.lucide.createIcons();
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // Download Content as TXT File
    downloadBtn.addEventListener('click', () => {
        const textToDownload = outputTextArea.value;
        if (!textToDownload) return;
        
        const topicName = topicInput.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const fileName = `crypto-post-${platformSelect.value}-${topicName || 'draft'}.txt`;
        
        const blob = new Blob([textToDownload], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
