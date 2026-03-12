// utils/i18n.js or locales.js
export const translations = {
    en: {
        nav: {
            brand: "Qodix Academic",
            overview: "Overview",
            services: "Disciplines",
            projects: "Case Studies",
            cta: "Initiate Request"
        },
        hero: {
            badge: "100% Confidential Academic Support",
            title: "Overwhelmed by deadlines?<br/><span class='highlight-text'>Get expert help.</span>",
            subtitle: "Reliable, high-quality assistance for university assignments, complex projects, and academic reports. Plagiarism-free and tailored to your grading rubric.",
            btnPrimary: "Get a Free Quote",
            btnSecondary: "View Past Work",
            supportText: "Native consultations available in English, Arabic & French.",
            guarantee1: "100% Plagiarism-Free",
            guarantee2: "Strict Confidentiality",
            guarantee3: "On-Time Delivery"
        },
        disciplines: {
            title: "Technical<br/>Disciplines.",
            software: "Software Engineering",
            softwareDesc: "Production-grade code for computer science projects, including custom algorithms, full-stack applications, and system architecture design.",
            physics: "Quantitative & Physics",
            physicsDesc: "Advanced mathematical modeling, data analysis, and physics simulations using Python, MATLAB, and rigorous analytical methods.",
            reports: "Technical Documentation",
            reportsDesc: "IEEE-standard project proposals, final year reports, and research papers formatted with absolute precision."
        },
        contact: {
            status: "AVAILABLE FOR NEW PROJECTS",
            title: "Let's solve this.",
            subtitle: "Need help fast? Slide into our DMs on Instagram, text us on WhatsApp, or drop your assignment details below.",
            labelSpecs: "Response Time",
            valSpecs: "Under 30 Minutes",
            labelScope: "Confidentiality",
            valScope: "Strictly Anonymous",
            btnSubmit: "Send Details",
            whatsappBtn: "WhatsApp",
            instagramBtn: "Instagram"
        },
        about: {
            title: "Your Dedicated<br/>Academic Partner.",
            lead: "I understand the pressure of university deadlines. I've been there.",
            body1: "Balancing multiple assignments, complex projects, and tight schedules can be overwhelming. That's why Qodix was built—to provide reliable, high-quality academic support when you need it most.",
            body2: "Whether it's debugging a stubborn piece of code, structuring a research report, or tackling daily homework, you get direct, confidential help tailored to strict grading standards. No automated fluff, just genuine solutions.",
            signature: "Salah Attar — Founder, Qodix"
        },
        services: {
            status: "CORE EXPERTISE",
            title: "Academic Focus Areas.",
            subtitle: "Specialized technical support tailored strictly to university grading rubrics.",
            devTitle: "Computer Science & IT",
            devDesc: "Code debugging, custom algorithms, web development, and lab environments (Databases, Kali Linux, etc).",
            engTitle: "Engineering & Math",
            engDesc: "Complex calculations, physics simulations, MATLAB projects, and detailed lab reports.",
            writeTitle: "Technical Reports",
            writeDesc: "IEEE-standard formatting, Final Year Projects (FYP), and structured research papers. 100% plagiarism-free."
        },
        process: {
            status: "HOW IT WORKS",
            title: "Zero-Friction Process.",
            subtitle: "Getting expert help shouldn't be complicated. Here is how we guarantee results.",
            step1Title: "1. Submit Prompt",
            step1Desc: "Drop your assignment rubric, broken code, or deadline in the contact form below.",
            step2Title: "2. Get a Quote",
            step2Desc: "I review the requirements and provide a clear, upfront price and guaranteed delivery timeline.",
            step3Title: "3. Secure Delivery",
            step3Desc: "Receive completely original, highly-graded work formatted perfectly for your professor."
        },
        faq: {
            status: "CLIENT INQUIRIES",
            title: "Frequently Asked Questions.",
            subtitle: "Total transparency regarding our academic protocols, security, and guarantees.",
            q1: "Is this service completely confidential?",
            a1: "Absolutely. We operate under strict anonymity protocols. Your personal details, university name, and assignment specifics are never shared, reused, or published. Once the project is delivered, your data is securely purged.",
            q2: "Will the work pass Turnitin and AI detectors?",
            a2: "Yes. Every line of code is written from scratch, and every report is custom-researched. We do not use recycled templates. We guarantee 100% original work that will cleanly pass Turnitin, SafeAssign, and standard AI detectors.",
            q3: "What if the code doesn't run on my machine?",
            a3: "We ensure all code works in standard environments. If you encounter setup or compilation issues on your specific machine (e.g., in Kali Linux, MATLAB, or a specific IDE), we provide direct assistance to help you get it running perfectly.",
            q4: "Do you offer revisions if my professor asks for changes?",
            a4: "Yes. Minor adjustments to align strictly with the original rubric you provided are included free of charge. We stay with you until the final submission is approved.",
            q5: "How are payments handled?",
            a5: "Once we review your requirements, we provide a fixed quote. Payments are securely processed before development begins. For larger, complex projects (+$200), we can discuss milestone-based payment structures."
        },
        widget: {
            title: "Emergency Comms",
            subtitle: "Deadline approaching? Ping us directly for an immediate response and quote.",
            btnText: "Chat on WhatsApp",
            status: "Online"
        },
        cases: {
            status: "PROVEN ACADEMIC IMPACT",
            title: "Proof of Execution.",
            subtitle: "Actual code architecture, terminal outputs, and mathematical models from recent academic interventions.",

            case1Title: "Java: Concurrent Systems",
            case1Tags: "Java • Multithreading • Big-O",
            case1Problem: "The student's Order Matching Engine was suffering from thread deadlocks and O(n^2) latency under heavy load 24 hours before submission.",
            case1Solution: "Implemented lock-free data structures (ConcurrentSkipListMap) and thread-safe queues. Reduced time complexity to O(log n) with zero race conditions.",
            case1Result: "100% Compilation, Grade A+",
            case1FileTree: "├── src/main/java/\n│   ├── engine/\n│   │   └── Matcher.java\n│   ├── models/\n│   │   └── Order.java\n└── pom.xml",
            case1Code: "public void processOrder(Order order) {\n  // Lock-free insertion O(log n)\n  orderBook.computeIfAbsent(order.getPrice(), \n    k -> new ConcurrentLinkedQueue<>()\n  ).add(order);\n\n  CompletableFuture.runAsync(() -> {\n    matchEngine.resolve(orderBook);\n  }, threadPool);\n}",
            case1Terminal: "> javac Matcher.java\n> java Matcher\n[INFO] Initializing ThreadPool (8 threads)...\n[SUCCESS] Matched 10,000 orders in 14.2ms\n[INFO] Zero lock contention detected.\n> Process finished with exit code 0",

            case2Title: "Math: Multivariable Calculus",
            case2Tags: "Optimization • Linear Algebra • MATLAB",
            case2Problem: "Required to manually compute the Hessian matrix to find the global minimum of a non-convex function, then plot the gradient descent path.",
            case2Solution: "Calculated all partial derivatives step-by-step, proved the eigenvalues were strictly positive, and generated a flawless 3D surface plot.",
            case2Result: "100% Accuracy, Grade: A+",
            case2PdfTitle: "optimization_proof.pdf",

            case3Title: "Python: Machine Learning",
            case3Tags: "Python • PyTorch • Data Science",
            case3Problem: "The student's Convolutional Neural Network (CNN) was suffering from vanishing gradients, resulting in an accuracy plateau of 42%.",
            case3Solution: "Refactored the architecture, added Batch Normalization layers, and implemented the AdamW optimizer with a cosine annealing learning rate.",
            case3Result: "94% Model Accuracy, Passed",
            case3FileTree: "├── data/\n├── models/\n│   └── resnet_custom.py\n├── train.py\n└── requirements.txt",
            case3Code: "class CustomCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 64, kernel_size=3)\n        self.bn1 = nn.BatchNorm2d(64)\n        \n    def forward(self, x):\n        x = F.relu(self.bn1(self.conv1(x)))\n        return F.max_pool2d(x, 2)",
            case3Terminal: "> python train.py --epochs 50\nEpoch [1/50] | Loss: 2.145 | Acc: 42.1%\nEpoch [10/50]| Loss: 0.842 | Acc: 78.4%\nEpoch [50/50]| Loss: 0.112 | Acc: 94.2%\n[SUCCESS] Model weights saved to /models"
        }
    },
    ar: {
        nav: {
            brand: "كوديكس الأكاديمية",
            overview: "نظرة عامة",
            services: "التخصصات",
            projects: "دراسات حالة",
            cta: "تقديم طلب"
        },
        hero: {
            badge: "دعم أكاديمي سري 100%",
            title: "مرهق من المواعيد النهائية؟<br/><span class='highlight-text'>احصل على مساعدة الخبراء.</span>",
            subtitle: "مساعدة موثوقة وعالية الجودة للواجبات الجامعية والمشاريع المعقدة والتقارير الأكاديمية. خالية من الانتحال ومصممة خصيصاً لتناسب معايير التقييم الخاصة بك.",
            btnPrimary: "احصل على تسعيرة مجانية",
            btnSecondary: "تصفح أعمالنا",
            supportText: "استشارات متاحة باللغات العربية، الإنجليزية والفرنسية.",
            guarantee1: "خالي من الانتحال 100%",
            guarantee2: "سرية تامة",
            guarantee3: "تسليم في الموعد"
        },
        disciplines: {
            title: "التخصصات<br/>التقنية.",
            software: "هندسة البرمجيات",
            softwareDesc: "برمجيات عالية الجودة لمشاريع علوم الحاسوب، تشمل الخوارزميات المخصصة، وتطبيقات الويب المتكاملة، وتصميم بنية الأنظمة.",
            physics: "التحليل الكمي والفيزياء",
            physicsDesc: "النمذجة الرياضية المتقدمة، وتحليل البيانات، والمحاكاة الفيزيائية باستخدام بايثون وماتلاب وطرق التحليل الدقيقة.",
            reports: "التوثيق التقني",
            reportsDesc: "مقترحات المشاريع، وتقارير التخرج، والأوراق البحثية المنسقة بدقة متناهية وفق معايير IEEE."
        },
        contact: {
            status: "متاح لمشاريع جديدة",
            title: "دعنا نحل هذا.",
            subtitle: "هل تحتاج إلى مساعدة سريعة؟ تواصل معنا عبر رسائل إنستغرام، أو واتساب، أو اترك تفاصيل واجبك أدناه.",
            labelSpecs: "وقت الاستجابة",
            valSpecs: "أقل من 30 دقيقة",
            labelScope: "السرية",
            valScope: "مجهول الهوية تماماً",
            btnSubmit: "إرسال التفاصيل",
            whatsappBtn: "واتساب",
            instagramBtn: "إنستغرام"
        },
        about: {
            title: "شريكك الأكاديمي<br/>الموثوق.",
            lead: "أدرك تماماً ضغط المواعيد النهائية الجامعية. لقد مررت بذلك.",
            body1: "قد يكون التوفيق بين المهام المتعددة والمشاريع المعقدة والجداول الزمنية الضيقة أمراً مرهقاً. لذلك تم بناء كوديكس لتقديم دعم أكاديمي موثوق وعالي الجودة عندما تكون في أمس الحاجة إليه.",
            body2: "سواء كان الأمر يتعلق بتصحيح أكواد برمجية معقدة، أو هيكلة تقرير بحثي، أو حل الواجبات اليومية، ستحصل على مساعدة مباشرة وسرية مصممة خصيصاً لتلبي معايير التقييم بصرامة. لا توجد حلول آلية، بل دعم حقيقي.",
            signature: "صلاح العطار — مؤسس كوديكس"
        },
        services: {
            status: "مجالات التخصص",
            title: "الخدمات الأكاديمية.",
            subtitle: "دعم تقني متخصص مصمم بدقة ليتوافق مع معايير التقييم الجامعية.",
            devTitle: "علوم الحاسوب والبرمجة",
            devDesc: "تصحيح الأكواد، الخوارزميات، تطوير الويب، وإعداد بيئات الاختبار (مثل قواعد البيانات و Kali Linux).",
            engTitle: "الهندسة والرياضيات",
            engDesc: "الحسابات المعقدة، المحاكاة، مشاريع MATLAB، والتقارير المخبرية الدقيقة.",
            writeTitle: "التقارير الأكاديمية",
            writeDesc: "تنسيق أبحاث ومشاريع التخرج (FYP) وفق معايير IEEE، بأصالة تامة وبدون أي انتحال."
        },
        process: {
            status: "آلية العمل",
            title: "خطوات بسيطة ومضمونة.",
            subtitle: "الحصول على مساعدة الخبراء لا ينبغي أن يكون معقداً. هكذا نضمن لك أفضل النتائج.",
            step1Title: "1. إرسال التفاصيل",
            step1Desc: "أرسل متطلبات الواجب، أو الكود البرمجي الذي يحتاج لتعديل، أو الموعد النهائي عبر نموذج الاتصال.",
            step2Title: "2. تقييم وتسعير",
            step2Desc: "أقوم بمراجعة المتطلبات وأقدم لك تسعيرة واضحة ووقت تسليم مضمون.",
            step3Title: "3. استلام العمل",
            step3Desc: "احصل على عمل أصلي 100%، خالي من الانتحال، ومنسق تماماً ليحصد أعلى الدرجات."
        },
        faq: {
            status: "استفسارات العملاء",
            title: "الأسئلة الشائعة.",
            subtitle: "شفافية تامة فيما يخص بروتوكولاتنا الأكاديمية، والسرية، والضمانات.",
            q1: "هل هذه الخدمة سرية تماماً؟",
            a1: "بالتأكيد. نحن نعمل وفق بروتوكولات سرية صارمة. لا يتم أبداً مشاركة أو إعادة استخدام أو نشر تفاصيلك الشخصية أو اسم جامعتك أو تفاصيل واجبك. بمجرد تسليم المشروع، يتم مسح بياناتك بأمان.",
            q2: "هل سيتجاوز العمل اختبارات الانتحال (Turnitin) وكشف الذكاء الاصطناعي؟",
            a2: "نعم. تتم كتابة كل سطر برمجي من الصفر، وكل تقرير يتم إعداده خصيصاً لك. نحن لا نستخدم قوالب مكررة. نضمن لك عملاً أصلياً بنسبة 100% يجتاز Turnitin و SafeAssign وكاشفات الذكاء الاصطناعي القياسية بنجاح.",
            q3: "ماذا لو لم يعمل الكود على جهازي؟",
            a3: "نحن نضمن عمل الكود في البيئات القياسية. إذا واجهت مشاكل في الإعداد أو التشغيل على جهازك الخاص (مثل Kali Linux أو MATLAB)، فإننا نقدم مساعدة مباشرة لمساعدتك في تشغيله بشكل مثالي.",
            q4: "هل تقدمون تعديلات إذا طلب أستاذي تغييرات؟",
            a4: "نعم. التعديلات الطفيفة التي تتماشى بدقة مع المتطلبات الأصلية التي قدمتها مشمولة مجاناً. نحن نبقى معك حتى يتم اعتماد التسليم النهائي.",
            q5: "كيف تتم عملية الدفع؟",
            a5: "بمجرد مراجعة متطلباتك، نقدم لك تسعيرة ثابتة. تتم معالجة المدفوعات بأمان قبل بدء العمل. بالنسبة للمشاريع الكبيرة والمعقدة (+200 دولار)، يمكننا مناقشة هياكل الدفع القائمة على المراحل."
        },
        widget: {
            title: "تواصل طارئ",
            subtitle: "هل اقترب الموعد النهائي؟ راسلنا مباشرة للحصول على استجابة سريعة وتسعيرة.",
            btnText: "تواصل عبر واتساب",
            status: "متصل الآن"
        },
        cases: {
            status: "تأثير أكاديمي مثبت",
            title: "إثبات التنفيذ.",
            subtitle: "أكواد برمجية ومخرجات نظام حقيقية ونماذج رياضية من تدخلاتنا الأكاديمية الأخيرة.",

            case1Title: "هيكلة نظام جافا التزامني",
            case1Tags: "Java • تعدد المهام • تعقيد الخوارزميات",
            case1Problem: "كان محرك مطابقة الطلبات الخاص بالطالب يعاني من اختناقات في الذاكرة وتأخير زمني O(n^2) تحت الضغط العالي قبل 24 ساعة من التسليم.",
            case1Solution: "تطبيق هياكل بيانات خالية من الأقفال (Lock-Free) وطوابير آمنة للخيوط. تم تقليل التعقيد الزمني إلى O(log n) بدون أي تداخلات.",
            case1Result: "تجميع الكود 100%، الامتياز (A+)",
            case1FileTree: "├── src/main/java/\n│   ├── engine/\n│   │   └── Matcher.java\n│   ├── models/\n│   │   └── Order.java\n└── pom.xml",
            case1Code: "public void processOrder(Order order) {\n  // Lock-free insertion O(log n)\n  orderBook.computeIfAbsent(order.getPrice(), \n    k -> new ConcurrentLinkedQueue<>()\n  ).add(order);\n\n  CompletableFuture.runAsync(() -> {\n    matchEngine.resolve(orderBook);\n  }, threadPool);\n}",
            case1Terminal: "> javac Matcher.java\n> java Matcher\n[INFO] Initializing ThreadPool (8 threads)...\n[SUCCESS] Matched 10,000 orders in 14.2ms\n[INFO] Zero lock contention detected.\n> Process finished with exit code 0",

            case2Title: "الرياضيات التطبيقية والتحسين",
            case2Tags: "تفاضل وتكامل • جبر خطي • MATLAB",
            case2Problem: "تطلب المشروع حساب مصفوفة (Hessian) يدوياً للعثور على الحد الأدنى العالمي لدالة غير محدبة، ورسم مسار الانحدار (Gradient Descent).",
            case2Solution: "حساب جميع المشتقات الجزئية خطوة بخطوة، وإثبات أن القيم الذاتية موجبة تماماً، وتوليد رسم بياني ثلاثي الأبعاد لا تشوبه شائبة.",
            case2Result: "دقة 100%، درجة الامتياز (A+)",
            case2PdfTitle: "optimization_proof.pdf",

            case3Title: "بايثون: تعلم الآلة (AI)",
            case3Tags: "Python • PyTorch • علم البيانات",
            case3Problem: "كانت الشبكة العصبية (CNN) للطالب تعاني من تلاشي التدرجات (Vanishing Gradients)، مما أدى إلى ثبات دقة النموذج عند 42%.",
            case3Solution: "إعادة هيكلة البنية، وإضافة طبقات (Batch Normalization)، وتطبيق مُحسِّن (AdamW) مع معدل تعلم ديناميكي.",
            case3Result: "دقة 94%، اجتياز بتفوق",
            case3FileTree: "├── data/\n├── models/\n│   └── resnet_custom.py\n├── train.py\n└── requirements.txt",
            case3Code: "class CustomCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 64, kernel_size=3)\n        self.bn1 = nn.BatchNorm2d(64)\n        \n    def forward(self, x):\n        x = F.relu(self.bn1(self.conv1(x)))\n        return F.max_pool2d(x, 2)",
            case3Terminal: "> python train.py --epochs 50\nEpoch [1/50] | Loss: 2.145 | Acc: 42.1%\nEpoch [10/50]| Loss: 0.842 | Acc: 78.4%\nEpoch [50/50]| Loss: 0.112 | Acc: 94.2%\n[SUCCESS] Model weights saved to /models"
        }

    }
};
