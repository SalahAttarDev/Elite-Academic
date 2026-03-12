// utils/i18n.js or locales.js
export const translations = {
    en: {
        nav: {
            brand: "Qodix Academic",
            overview: "Overview",
            services: "Disciplines",
            projects: "Our Work",
            cta: "Get Help Now"
        },
        hero: {
            badge: "100% Confidential & Plagiarism-Free",
            title: "Code won't compile? Deadline at 8 AM?<br/><span class='highlight-text'>We've got your back.</span>",
            subtitle: "Stop stressing over impossible rubrics. We provide clean, heavily commented code, complex math solutions, and standard IEEE reports so you can pass with confidence.",
            btnPrimary: "Get a Free Quote",
            btnSecondary: "See Past Grades",
            supportText: "Native support in English, Arabic & French.",
            guarantee1: "Zero Plagiarism",
            guarantee2: "Total Anonymity",
            guarantee3: "Runs on Your Machine"
        },
        disciplines: {
            title: "What we<br/>actually do.",
            software: "Computer Science & IT",
            softwareDesc: "From simple OOP assignments to full-stack web apps and data structures. We write clean, commented code that actually compiles.",
            physics: "Applied Math & Engineering",
            physicsDesc: "Differential equations, physics simulations, and complex MATLAB projects solved with clear, step-by-step methodologies.",
            reports: "Technical & Lab Reports",
            reportsDesc: "FYP documentation, research papers, and lab reports formatted to strict university standards. Guaranteed to pass Turnitin."
        },
        contact: {
            status: "ONLINE & READY",
            title: "Let's fix this.",
            subtitle: "Panicking about a project? Text us directly on WhatsApp or drop your assignment files below for an instant quote.",
            labelSpecs: "Response Time",
            valSpecs: "Under 30 Minutes",
            labelScope: "Privacy",
            valScope: "100% Anonymous",
            btnSubmit: "Send Assignment Details",
            whatsappBtn: "WhatsApp (Fastest)",
            instagramBtn: "Instagram",
            form: {
                name: "Name / Nickname",
                namePlace: "How should I call you?",
                contact: "Email or WhatsApp",
                contactPlace: "Where can I reach you?",
                subject: "Course / Subject",
                subjectPlace: "e.g. Intro to Java",
                deadline: "Deadline",
                deadlinePlace: "e.g. Tomorrow at 10 AM",
                country: "Country",
                countryPlace: "e.g. Saudi Arabia, Malaysia...",
                budget: "Estimated Budget",
                budgetDefault: "Select Budget Range",
                budget1: "Under $10 (Minor bug fixes)",
                budget2: "$10 - $25 (Standard assignments)",
                budget3: "$25 - $50 (Mid-size projects)",
                budget4: "$50 - $100 (Advanced projects)",
                budget5: "$100+ (Full systems / FYP)",
                details: "Task Details",
                detailsPlace: "Explain exactly what you need help with...",
                files: "Project Files & Rubric (PDF, ZIP)",
                dropzone: "Drag files here or click to browse"
            }
        },
        about: {
            title: "Your Secret<br/>Academic Weapon.",
            lead: "I know exactly what it's like to stare at a screen at 3 AM with broken code and a looming deadline.",
            body1: "University is tough enough without having to figure out terrible professor instructions. Qodix was built to be the safety net I wish I had—a place you can go to get actual, working solutions when you're completely stuck.",
            body2: "I don't use AI to write your code, and I don't recycle old projects. Whether it's fixing a segmentation fault, plotting a MATLAB graph, or writing your final year project, you get custom, heavily commented work that is guaranteed to get you an A.",
            signature: "Salah Attar — Founder, Qodix"
        },
        services: {
            status: "OUR EXPERTISE",
            title: "How we save your grade.",
            subtitle: "We don't just write code; we make sure you understand it so you can defend it.",
            devTitle: "Programming & Web Dev",
            devDesc: "Java, C++, Python, and full-stack React/Node.js apps. Delivered with inline comments so you know exactly how it works.",
            engTitle: "Math & Algorithms",
            engDesc: "Big-O optimization, MATLAB visualizations, and step-by-step calculus proofs.",
            writeTitle: "Academic Writing",
            writeDesc: "Zero-plagiarism research papers and IEEE reports. We even provide the Turnitin report for your peace of mind."
        },
        process: {
            status: "HOW IT WORKS",
            title: "Simple. Fast. Secure.",
            subtitle: "No complicated sign-ups. Just send the brief and consider it done.",
            step1Title: "1. Send the Rubric",
            step1Desc: "Drop your PDF requirements or broken code in the form below, or send it via WhatsApp.",
            step2Title: "2. Get a Fixed Price",
            step2Desc: "We'll review it instantly and give you a fair, upfront price and a guaranteed delivery time.",
            step3Title: "3. Download & Submit",
            step3Desc: "Receive the working files, a plagiarism report, and instructions on how to run it on your laptop."
        },
        faq: {
            status: "STUDENT CONCERNS",
            title: "You asked, we answered.",
            subtitle: "Total transparency. Here is exactly how we protect you and your grades.",
            q1: "Is my university going to find out?",
            a1: "Never. We take your privacy very seriously. Your name and assignment details are never shared, and all project files are permanently deleted from our servers once you get your grade.",
            q2: "Will this pass Turnitin and AI detectors?",
            a2: "100%. We write every single line of code and every paragraph from scratch. We even run it through premium detectors ourselves before sending it to you just to be safe.",
            q3: "What if the code doesn't compile on my laptop?",
            a3: "We don't just send you a zip file and disappear. If you have any trouble setting up the environment (like MySQL, Node, or Kali Linux), we will guide you until it runs perfectly on your screen.",
            q4: "What if my professor asks for changes?",
            a4: "Minor adjustments and tweaks to fit the original rubric are completely free. We stay with you until the project is officially accepted.",
            q5: "How much does it cost?",
            a5: "It depends on the complexity and the deadline. Minor bug fixes can be under $50, while full-stack final year projects will be more. Send us the details and we'll give you an exact quote in minutes."
        },
        widget: {
            title: "Need help right now?",
            subtitle: "Deadline approaching? Tap here to message us directly on WhatsApp.",
            btnText: "Message on WhatsApp",
            status: "We're Online"
        },
        cases: {
            status: "RECENT WINS",
            title: "Projects We've Saved.",
            subtitle: "Real bugs, real math, and the actual code we wrote to get our clients an A.",

            case1Title: "Java: Concurrent Systems",
            case1Tags: "Java • Multithreading • Big-O",
            case1Problem: "The Bug: The student's Order Matching Engine was deadlocking and crashing under heavy load just 24 hours before submission.",
            case1Solution: "The Fix: Replaced standard lists with lock-free data structures (ConcurrentSkipListMap). Reduced time complexity to O(log n) with zero race conditions.",
            case1Result: "100% Compilation, Grade: A+",
            // FIXED: Wrapped multi-line strings in backticks ` ` instead of quotes " "
            case1FileTree: `├── src/main/java/
│   ├── engine/
│   │   └── Matcher.java
│   ├── models/
│   │   └── Order.java
└── pom.xml`,
            case1Code: `public void processOrder(Order order) {
  // Lock-free insertion O(log n)
  orderBook.computeIfAbsent(order.getPrice(),
    k -> new ConcurrentLinkedQueue<>()
  ).add(order);

  CompletableFuture.runAsync(() -> {
    matchEngine.resolve(orderBook);
  }, threadPool);
}`,
            case1Terminal: `> javac Matcher.java
> java Matcher
[INFO] Initializing ThreadPool (8 threads)...
[SUCCESS] Matched 10,000 orders in 14.2ms
[INFO] Zero lock contention detected.
> Process finished with exit code 0`,

            case2Title: "Math: Multivariable Calculus",
            case2Tags: "Optimization • Linear Algebra • MATLAB",
            case2Problem: "The Problem: The student needed to manually compute a Hessian matrix to find the global minimum of a function, then plot it.",
            case2Solution: "The Fix: Calculated all partial derivatives step-by-step, proved the eigenvalues, and generated a flawless 3D surface plot for their report.",
            case2Result: "Zero Errors, Grade: A",
            case2PdfTitle: "optimization_proof.pdf",

            case3Title: "Python: Machine Learning",
            case3Tags: "Python • PyTorch • Neural Networks",
            case3Problem: "The Bug: The student's CNN model was suffering from vanishing gradients, meaning accuracy was stuck at a failing 42%.",
            case3Solution: "The Fix: Refactored the architecture, added Batch Normalization layers, and implemented the AdamW optimizer to rescue the model.",
            case3Result: "94% Model Accuracy, Passed",
            case3FileTree: `├── data/
├── models/
│   └── resnet_custom.py
├── train.py
└── requirements.txt`,
            case3Code: `class CustomCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 64, kernel_size=3)
        self.bn1 = nn.BatchNorm2d(64)

    def forward(self, x):
        x = F.relu(self.bn1(self.conv1(x)))
        return F.max_pool2d(x, 2)`,
            case3Terminal: `> python train.py --epochs 50
Epoch [1/50] | Loss: 2.145 | Acc: 42.1%
Epoch [10/50]| Loss: 0.842 | Acc: 78.4%
Epoch [50/50]| Loss: 0.112 | Acc: 94.2%
[SUCCESS] Model weights saved to /models`
        }
    },
    ar: {
        nav: {
            brand: "كوديكس الأكاديمية",
            overview: "الرئيسية",
            services: "التخصصات",
            projects: "أعمالنا",
            cta: "اطلب مساعدة الآن"
        },
        hero: {
            badge: "دعم أكاديمي سري 100%",
            title: "عالق مع كود لا يعمل أو ديدلاين مستحيل؟<br/><span class='highlight-text'>دعنا ننجز المهمة.</span>",
            subtitle: "انسَ التوتر. نقدم لك أكواداً نظيفة وموثقة، وحلولاً رياضية معقدة، وتقارير جامعية دقيقة خالية من النسخ لتضمن أعلى الدرجات.",
            btnPrimary: "احصل على تسعيرة مجانية",
            btnSecondary: "تصفح أعمالنا السابقة",
            supportText: "دعم مخصص باللغات العربية، الإنجليزية، والفرنسية.",
            guarantee1: "أعمال أصلية 100%",
            guarantee2: "سرية تامة لبياناتك",
            guarantee3: "نضمن عمل الكود على جهازك"
        },
        disciplines: {
            title: "بماذا يمكننا<br/>مساعدتك؟",
            software: "علوم الحاسوب والبرمجة",
            softwareDesc: "من الواجبات البسيطة إلى تطبيقات الويب المتكاملة وهياكل البيانات. نكتب أكواداً نظيفة ومشروحة لتعمل بسلاسة عند مناقشتها.",
            physics: "الرياضيات والهندسة",
            physicsDesc: "حل المعادلات التفاضلية، ومحاكاة الفيزياء، ومشاريع MATLAB المعقدة بخطوات واضحة ومنهجية دقيقة.",
            reports: "التقارير ومشاريع التخرج",
            reportsDesc: "كتابة وتنسيق مشاريع التخرج (FYP) والأبحاث وفق معايير الجامعات (IEEE). نضمن لك تجاوز فحص Turnitin بنجاح."
        },
        contact: {
            status: "متواجدون الآن",
            title: "دعنا نحل هذه المشكلة.",
            subtitle: "متوتر بسبب مشروع؟ راسلنا مباشرة على واتساب، أو ارفع ملفات واجبك أدناه للحصول على تسعيرة فورية.",
            labelSpecs: "وقت الرد",
            valSpecs: "أقل من 30 دقيقة",
            labelScope: "الخصوصية",
            valScope: "مجهول الهوية 100%",
            btnSubmit: "إرسال تفاصيل الواجب",
            whatsappBtn: "واتساب (الأسرع)",
            instagramBtn: "إنستغرام",
            form: {
                name: "الاسم / اللقب",
                namePlace: "بماذا تحب أن نناديك؟",
                contact: "الإيميل أو رقم الواتساب",
                contactPlace: "كيف يمكننا التواصل معك؟",
                subject: "المادة / التخصص",
                subjectPlace: "مثال: برمجة جافا",
                deadline: "الموعد النهائي لتسليم الواجب",
                deadlinePlace: "مثال: غداً الساعة 10 صباحاً",
                country: "البلد أو الدولة",
                countryPlace: "مثال: السعودية، الإمارات...",
                budget: "الميزانية المتوقعة",
                budgetDefault: "اختر الميزانية",
                budget1: "أقل من 10$ (إصلاح أخطاء بسيطة)",
                budget2: "10$ - 25$ (واجبات عادية)",
                budget3: "25$ - 50$ (مشاريع متوسطة)",
                budget4: "50$ - 100$ (مشاريع متقدمة)",
                budget5: "+100$ (أنظمة متكاملة ومشاريع تخرج)",
                details: "تفاصيل الواجب",
                detailsPlace: "اشرح لنا ما الذي تحتاجه بالضبط...",
                files: "ملفات المشروع (PDF, ZIP)",
                dropzone: "اسحب الملفات هنا أو اضغط للاختيار"
            }
        },
        about: {
            title: "سلاحك السري<br/>للتفوق الجامعي.",
            lead: "أعرف تماماً شعور الجلوس أمام الشاشة في الثالثة فجراً، مع كود معطل وموعد تسليم يقترب بسرعة.",
            body1: "الدراسة الجامعية صعبة بما فيه الكفاية دون الحاجة لفك رموز متطلبات الدكاترة المعقدة. لذلك أسست Qodix لتكون شبكة الأمان التي تمنيتها يوماً—المكان الذي تلجأ إليه لتحصل على حلول فعلية تعمل بكفاءة عندما تشعر أنك عالق تماماً.",
            body2: "أنا لا أستخدم الذكاء الاصطناعي لكتابة أكوادك، ولا أبيع مشاريع قديمة. سواء كان الأمر يتعلق بحل مشكلة برمجية معقدة، أو رسم منحنى في MATLAB، أو كتابة مشروع تخرجك، ستحصل على عمل مخصص، موثق بشرح واضخ، ومضمون ليحصد لك درجة الامتياز.",
            signature: "صلاح العطار — مؤسس كوديكس"
        },
        services: {
            status: "خبراتنا",
            title: "كيف نضمن لك أعلى الدرجات؟",
            subtitle: "نحن لا نكتب الكود فقط؛ بل نتأكد من أنك تفهمه جيداً لتتمكن من مناقشته بثقة.",
            devTitle: "البرمجة وتطوير الويب",
            devDesc: "تطبيقات Java, C++, Python، ومشاريع React/Node.js. نسلمك الكود مع تعليقات توضيحية (Comments) لتفهم آلية عمله.",
            engTitle: "الرياضيات والخوارزميات",
            engDesc: "تحليل تعقيد الخوارزميات (Big-O)، ورسومات MATLAB، وحسابات التفاضل والتكامل بخطوات مفصلة.",
            writeTitle: "الكتابة الأكاديمية",
            writeDesc: "أبحاث وتقارير خالية من النسخ والانتحال. نزودك بتقرير Turnitin مع العمل لتكون مطمئناً تماماً."
        },
        process: {
            status: "آلية العمل",
            title: "بساطة. سرعة. أمان.",
            subtitle: "لا توجد تعقيدات. أرسل متطلبات المشروع، واعتبره منجزاً.",
            step1Title: "1. أرسل المتطلبات",
            step1Desc: "ارفع ملف المتطلبات (Rubric) أو الكود المعطل في النموذج أدناه، أو أرسله عبر واتساب.",
            step2Title: "2. تسعيرة واضحة",
            step2Desc: "سنراجع الطلب فوراً ونعطيك سعراً عادلاً وموعداً مضموناً للتسليم.",
            step3Title: "3. استلم عملك",
            step3Desc: "احصل على الملفات الجاهزة، وتقرير الأصالة، وإرشادات واضحة لتشغيل الكود على جهازك."
        },
        faq: {
            status: "أسئلة الطلاب الشائعة",
            title: "إجابات شفافة ومباشرة.",
            subtitle: "نحن ندرك مخاوفك. إليك كيف نحمي بياناتك ونضمن نجاحك.",
            q1: "هل يمكن لجامعتي أن تكتشف الأمر؟",
            a1: "مستحيل. نحن نتعامل مع بياناتك بسرية تامة. لا نشارك اسمك أو تفاصيل واجبك أبداً، ويتم حذف جميع الملفات من خوادمنا بمجرد استلامك لدرجتك.",
            q2: "هل سيتجاوز العمل برامج كشف الانتحال (Turnitin)؟",
            a2: "بنسبة 100%. نحن نكتب كل سطر برمجي وكل فقرة من الصفر. بل ونقوم بفحص العمل عبر برامج كشف الانتحال المدفوعة قبل تسليمه لك لضمان سلامته.",
            q3: "ماذا لو لم يعمل الكود على جهازي (اللابتوب)؟",
            a3: "نحن لا نرسل لك الملفات ونختفي. إذا واجهت أي مشكلة في تشغيل بيئة العمل (مثل MySQL أو Node أو Linux)، فسنرشدك خطوة بخطوة حتى يعمل الكود أمامك بسلاسة.",
            q4: "ماذا لو طلب الدكتور تعديلات على المشروع؟",
            a4: "التعديلات البسيطة التي تتوافق مع المتطلبات الأساسية للواجب مجانية تماماً. نحن نقف معك حتى يتم قبول المشروع نهائياً.",
            q5: "كم تبلغ التكلفة؟",
            a5: "يعتمد ذلك على مدى تعقيد المشروع والوقت المتاح. إصلاح الأخطاء البسيطة قد يكلف أقل من 50 دولار، بينما مشاريع التخرج الكبيرة تكلفتها أعلى. أرسل لنا التفاصيل وسنعطيك تسعيرة دقيقة خلال دقائق."
        },
        widget: {
            title: "تحتاج مساعدة عاجلة؟",
            subtitle: "هل اقترب موعد التسليم؟ اضغط هنا لمراسلتنا مباشرة عبر واتساب.",
            btnText: "راسلنا على واتساب",
            status: "نحن متواجدون الآن"
        },
        cases: {
            status: "مشاريع أنجزناها",
            title: "نتائج حقيقية لطلاب حقيقيين.",
            subtitle: "أمثلة حقيقية لأكواد أصلحناها ومعادلات حللناها لنضمن لعملائنا درجات الامتياز.",

            case1Title: "هيكلة نظام جافا التزامني",
            case1Tags: "Java • تعدد المهام • تعقيد الخوارزميات",
            case1Problem: "المشكلة: كان نظام مطابقة الطلبات الخاص بالطالب ينهار تحت الضغط العالي بسبب تداخل المهام، وذلك قبل 24 ساعة فقط من التسليم.",
            case1Solution: "الحل: قمنا بتطبيق هياكل بيانات آمنة (Lock-Free) لتقليل وقت المعالجة إلى O(log n) وضمان عمل النظام دون أي أخطاء تداخل.",
            case1Result: "تجميع الكود 100%، درجة الامتياز (A+)",
            // FIXED: Wrapped multi-line strings in backticks ` ` instead of quotes " "
            case1FileTree: `├── src/main/java/
│   ├── engine/
│   │   └── Matcher.java
│   ├── models/
│   │   └── Order.java
└── pom.xml`,
            case1Code: `public void processOrder(Order order) {
  // Lock-free insertion O(log n)
  orderBook.computeIfAbsent(order.getPrice(),
    k -> new ConcurrentLinkedQueue<>()
  ).add(order);

  CompletableFuture.runAsync(() -> {
    matchEngine.resolve(orderBook);
  }, threadPool);
}`,
            case1Terminal: `> javac Matcher.java
> java Matcher
[INFO] Initializing ThreadPool (8 threads)...
[SUCCESS] Matched 10,000 orders in 14.2ms
[INFO] Zero lock contention detected.
> Process finished with exit code 0`,

            case2Title: "الرياضيات والتحسين (Optimization)",
            case2Tags: "تفاضل وتكامل • جبر خطي • MATLAB",
            case2Problem: "المشكلة: احتاج الطالب لحساب مصفوفة (Hessian) يدوياً للعثور على الحد الأدنى لمعادلة معقدة، ورسم مسارها بدقة.",
            case2Solution: "الحل: قمنا بحساب جميع المشتقات الجزئية خطوة بخطوة، مع إثبات رياضي دقيق، وتوليد رسم بياني ثلاثي الأبعاد لا تشوبه شائبة للتقرير.",
            case2Result: "دقة 100%، درجة الامتياز (A+)",
            case2PdfTitle: "optimization_proof.pdf",

            case3Title: "تعلم الآلة (Machine Learning)",
            case3Tags: "Python • PyTorch • شبكات عصبية",
            case3Problem: "المشكلة: كان نموذج الذكاء الاصطناعي الخاص بالطالب يعاني من تلاشي التدرجات، مما أدى لثبات دقة النموذج عند 42% فقط (درجة رسوب).",
            case3Solution: "الحل: أعدنا هيكلة النموذج البرمجي، وأضفنا طبقات تطبيع (Batch Normalization) ومُحسِّن AdamW لإنقاذ المشروع بالكامل.",
            case3Result: "دقة 94%، اجتياز بتفوق",
            case3FileTree: `├── data/
├── models/
│   └── resnet_custom.py
├── train.py
└── requirements.txt`,
            case3Code: `class CustomCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(3, 64, kernel_size=3)
        self.bn1 = nn.BatchNorm2d(64)

    def forward(self, x):
        x = F.relu(self.bn1(self.conv1(x)))
        return F.max_pool2d(x, 2)`,
            case3Terminal: `> python train.py --epochs 50
Epoch [1/50] | Loss: 2.145 | Acc: 42.1%
Epoch [10/50]| Loss: 0.842 | Acc: 78.4%
Epoch [50/50]| Loss: 0.112 | Acc: 94.2%
[SUCCESS] Model weights saved to /models`
        }
    }
};
