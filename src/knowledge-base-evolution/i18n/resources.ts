export const supportedLanguages = [
  { code: "en", nativeLabel: "English", shortLabel: "EN" },
  { code: "zh-CN", nativeLabel: "简体中文", shortLabel: "简" },
  { code: "ja", nativeLabel: "日本語", shortLabel: "JA" },
  { code: "es", nativeLabel: "Español", shortLabel: "ES" },
  { code: "de", nativeLabel: "Deutsch", shortLabel: "DE" },
  { code: "fr", nativeLabel: "Français", shortLabel: "FR" },
  { code: "pt-BR", nativeLabel: "Português (Brasil)", shortLabel: "PT" },
  { code: "ko", nativeLabel: "한국어", shortLabel: "KO" },
] as const;

export type SupportedLanguageCode = (typeof supportedLanguages)[number]["code"];

export type LevelTranslation = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  method: string;
  essence: string;
  solved: string;
  pros: string[];
  cons: string[];
  problem: string;
  trigger: string;
  accent: "blue" | "cyan" | "indigo" | "purple";
};

export type TranslationMessages = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    language: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    startJourney: string;
  };
  common: {
    advantages: string;
    limitations: string;
    coreBreakthrough: string;
    representativeIssue: string;
    paradigmShift: string;
  };
  visuals: {
    keyword: {
      query: string;
      invertedIndex: string;
      documents: string;
    };
    semantic: {
      queryVector: string;
      idle: string;
      calculating: string;
      found: string;
    };
    hybrid: {
      keyword: string;
      rerank: string;
      fusion: string;
      semantic: string;
    };
    structured: {
      unstructuredText: string;
      entityConcept: string;
      memory: string;
      cognition: string;
      reasoning: string;
      metadataExplorer: string;
      queryingSchema: string;
      mechanism: string;
    };
  };
  levels: LevelTranslation[];
  climax: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: {
      before: string;
      highlight: string;
      after: string;
    };
    capacities: Array<{
      title: string;
      desc: string;
      span: string;
    }>;
    finalTitle: string;
    finalCaption: string;
  };
};

const sharedAccents = ["blue", "cyan", "indigo", "purple"] as const;

const resources: Record<SupportedLanguageCode, TranslationMessages> = {
  en: {
    meta: {
      title: "Agentware Knowledge Base Evolution",
      description: "From keyword retrieval to the Agentware knowledge base and memory system.",
    },
    nav: {
      language: "Language",
    },
    hero: {
      titleLine1: "Knowledge Bases.",
      titleLine2: "Evolved.",
      subtitle:
        "A five-stage cognitive evolution, from simple retrieval tools to memory-native systems with continuous learning and self-evolution.",
      startJourney: "Start Journey",
    },
    common: {
      advantages: "Advantages",
      limitations: "Limitations",
      coreBreakthrough: "Core Breakthrough",
      representativeIssue: "Representative Issue",
      paradigmShift: "Paradigm Shift",
    },
    visuals: {
      keyword: {
        query: "Query:",
        invertedIndex: "Inverted Index",
        documents: "Documents",
      },
      semantic: {
        queryVector: "Query Vector",
        idle: "Idle",
        calculating: "Calculating Similarity",
        found: "Top Matches Found",
      },
      hybrid: {
        keyword: "BM25 KEYWORD",
        rerank: "Rerank",
        fusion: "FUSION",
        semantic: "SEMANTIC VECTOR",
      },
      structured: {
        unstructuredText: "Unstructured Text",
        entityConcept: "Entity: Concept",
        memory: "Memory",
        cognition: "Cognition",
        reasoning: "Reasoning",
        metadataExplorer: "Metadata Explorer",
        queryingSchema: "Querying Schema...",
        mechanism: "Mechanism",
      },
    },
    levels: [
      {
        id: "level-1",
        num: "1",
        title: "Keyword Retrieval",
        subtitle: "The Keyword Era",
        description:
          "Information retrieval built on exact keyword matching. It is stable and efficient, but fundamentally mechanical.",
        method: "Query -> Tokenization -> Inverted Index -> BM25/TF-IDF Ranking",
        essence: "String-matching system",
        solved: "Can it be found? (Search)",
        pros: ["Strong exact-match precision", "Extremely stable and reliable", "Direct interpretability"],
        cons: ["Cannot understand semantics", "Depends heavily on precise terminology", "Poor synonym handling"],
        problem: "Users must adapt to the machine's vocabulary.",
        trigger:
          "When users can only describe intent or symptoms instead of exact terms, character matching fails. The system must start understanding meaning.",
        accent: sharedAccents[0],
      },
      {
        id: "level-2",
        num: "2",
        title: "Semantic Retrieval",
        subtitle: "Semantic Retrieval / The RAG Era",
        description:
          "Embedding-based similarity retrieval. The system begins to understand the meaning behind language rather than just the literal tokens.",
        method: "Text -> Embedding | Query -> Vector -> Similarity Search",
        essence: "Semantic similarity search",
        solved: "Can it find semantically related content? (Semantic)",
        pros: ["Supports natural-language queries", "Handles cross-lingual and synonym intent", "Greatly improves recall generalization"],
        cons: ["Semantic compression loses detail", "Weak structural awareness and weighting", "Often retrieves plausible but imprecise results"],
        problem: "The retrieved content feels relevant, but may still be the wrong answer.",
        trigger:
          "Semantic retrieval generalizes well, but precision collapses in professional domains. Industry needed Level 1's accuracy plus Level 2's understanding.",
        accent: sharedAccents[1],
      },
      {
        id: "level-3",
        num: "3",
        title: "Hybrid Retrieval",
        subtitle: "Hybrid Retrieval (Industrial RAG)",
        description:
          "A multi-channel retrieval system combining keyword recall and semantic recall, then merging and reranking the results.",
        method: "BM25 Recall + Vector Recall -> Fusion -> Rerank",
        essence: "Multi-channel recall system",
        solved: "Can it retrieve more accurately? (Hybrid)",
        pros: ["Balances exact match with semantic breadth", "Most mature production approach today", "Supports controllable weighting"],
        cons: ["System tuning becomes complex", "Still lacks internal knowledge structure", "Weak for deep cross-document reasoning"],
        problem: "The system is stronger, but it is still just a better search tool.",
        trigger:
          "Data is still fragmented into document chunks. To answer cross-document reasoning tasks, the system must understand structured knowledge relationships.",
        accent: sharedAccents[2],
      },
      {
        id: "level-4",
        num: "4",
        title: "Structured Knowledge Base",
        subtitle: "Structured Knowledge Base",
        description:
          "Text is transformed into structured knowledge units and organized into a structured knowledge base through entity linking, relation extraction, and structured storage.",
        method: "Text -> Information Extraction -> Entity/Relation Network -> Rule-based Retrieval",
        essence: "Structured knowledge base",
        solved: "Can it retrieve the right structured knowledge base? (Knowledge Base)",
        pros: ["Clear system structure and interpretability", "Supports precise logical association", "Works well with complex business rules"],
        cons: ["Knowledge-base construction and maintenance are expensive", "Schema extensibility is limited", "A static store cannot keep growing by itself"],
        problem: "The system begins to understand a knowledge base, but it is still static and rigid.",
        trigger:
          "Reality keeps changing, and new interactions produce new information. We need a system that does not merely store knowledge, but metabolizes, restructures, forgets, and evolves like memory.",
        accent: sharedAccents[3],
      },
    ],
    climax: {
      badge: "Cognitive Architecture",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: {
        before: "No longer a passive response tool, but a",
        highlight: "self-evolving",
        after: "cognitive and memory system.",
      },
      capacities: [
        {
          title: "Atomic Notes",
          desc: "Knowledge is broken into the smallest understandable units. They are alive and can merge, correct, and evolve with new information.",
          span: "md:col-span-2",
        },
        {
          title: "Dual Channel",
          desc: "Maintains both episodic and semantic memory so an agent can preserve context and worldview at the same time.",
          span: "md:col-span-1",
        },
        {
          title: "Consolidation",
          desc: "Continuously deduplicates, merges, compresses, and refines memory. Forgetting is optimization, not deletion.",
          span: "md:col-span-1",
        },
        {
          title: "Traceability",
          desc: "Every refined memory item remains strongly traceable, enabling strict auditability and solving the trust black-box problem.",
          span: "md:col-span-2",
        },
        {
          title: "Cognitive Retrieval",
          desc: "Combines vectors, keywords, relationship graphs, timelines, and dynamic weights to retrieve the exact cognitive slice needed.",
          span: "md:col-span-3",
        },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  "zh-CN": {
    meta: {
      title: "Agentware Knowledge Base Evolution",
      description: "从关键词检索，到 Agentware 知识库与记忆系统。",
    },
    nav: {
      language: "语言",
    },
    hero: {
      titleLine1: "Knowledge Bases.",
      titleLine2: "Evolved.",
      subtitle: "跨越五代系统的认知范式：从单纯的工具检索，到具备持续学习与自我演化能力的智能体记忆。",
      startJourney: "Start Journey",
    },
    common: {
      advantages: "优势",
      limitations: "局限",
      coreBreakthrough: "核心突破",
      representativeIssue: "代表性困境",
      paradigmShift: "范式跃迁",
    },
    visuals: {
      keyword: {
        query: "查询：",
        invertedIndex: "倒排索引",
        documents: "文档集合",
      },
      semantic: {
        queryVector: "查询向量",
        idle: "空闲",
        calculating: "计算相似度中",
        found: "已找到高相关结果",
      },
      hybrid: {
        keyword: "BM25 关键词",
        rerank: "重排序",
        fusion: "融合",
        semantic: "语义向量",
      },
      structured: {
        unstructuredText: "非结构化文本",
        entityConcept: "实体：概念",
        memory: "记忆",
        cognition: "认知",
        reasoning: "推理",
        metadataExplorer: "元数据视图",
        queryingSchema: "查询 Schema 中...",
        mechanism: "机制",
      },
    },
    levels: [
      {
        id: "level-1",
        num: "1",
        title: "Keyword Retrieval",
        subtitle: "关键词检索时代",
        description: "基于关键词匹配的信息检索系统。通过绝对匹配字符来建立索引。这是最稳定但也最机械的获取方式。",
        method: "Query -> 分词 -> 倒排索引 -> BM25/TF-IDF 排序",
        essence: "字符串匹配系统",
        solved: "能不能找到信息 (Search)",
        pros: ["精确匹配能力强", "系统极其稳定可靠", "直观的可解释性"],
        cons: ["无法理解自然语言语义", "强依赖准确的专业术语", "同义词匹配极其糟糕"],
        problem: "用户必须迎合机器的词汇表。",
        trigger: "当用户只能描述现象或意图，却无法给出精确术语时，Level 1 彻底失效。我们需要一种能“理解语义”的系统。",
        accent: sharedAccents[0],
      },
      {
        id: "level-2",
        num: "2",
        title: "Semantic Retrieval",
        subtitle: "语义检索 / RAG 时代",
        description: "基于 embedding 的语义相似度检索。通过向量空间模型，系统终于开始理解文字背后的“意思”。",
        method: "文本 -> 向量化（embedding） | Query -> 向量 -> 相似度搜索",
        essence: "语义相似度搜索",
        solved: "找得像，语义相关 (Semantic)",
        pros: ["支持模糊自然语言查询", "跨语种与同义词理解", "极大提升了召回泛化能力"],
        cons: ["语义压缩导致大量信息丢失", "缺乏结构化区分权重的能力", "极易产生“相关但不准确”"],
        problem: "找到了类似的内容，但不一定是正确答案。",
        trigger: "纯语义检索在专业领域遭遇了幻觉挑战。工业应用急需结合 Level 1 的“准”与 Level 2 的“懂”。",
        accent: sharedAccents[1],
      },
      {
        id: "level-3",
        num: "3",
        title: "Hybrid Retrieval",
        subtitle: "混合检索（工业级 RAG）",
        description: "结合关键词检索与语义检索的多通道系统。利用 Rerank 技术对多路召回结果进行二次排序与融合。",
        method: "BM25 召回 + 向量召回 -> 融合 -> Rerank 重排序",
        essence: "多通道召回系统",
        solved: "找得更准 (Hybrid)",
        pros: ["平衡了精确匹配与语义广度", "目前最成熟的工业生产方案", "支持动态调整搜索权重"],
        cons: ["系统调优极其复杂", "依然缺乏知识内在的逻辑结构", "难以处理深度的关联推理"],
        problem: "系统变强了，但仍然只是更好的“搜索工具”。",
        trigger: "文档碎片化的状态没有改变。当需要跨文档的逻辑推理时，系统必须理解“知识的实体化与关系”。",
        accent: sharedAccents[2],
      },
      {
        id: "level-4",
        num: "4",
        title: "Structured Knowledge Base",
        subtitle: "结构化知识库",
        description: "将文本转化为可解析的知识单元，并组织为结构化知识库。通过实体链接、关系抽取与结构化存储，构建起可推理的知识网络。",
        method: "文本 -> 信息抽取 -> 实体/关系网络 -> 规则化检索",
        essence: "结构化知识库",
        solved: "找得对，结构化知识库 (Knowledge Base)",
        pros: ["系统结构清晰、高度可解释", "支持精确的逻辑关联推理", "支持复杂的业务规则审计"],
        cons: ["知识库构建与维护成本高昂", "Schema 扩展性较差", "静态库无法自我持续生长"],
        problem: "系统开始理解知识库，但它依然是静态且死板的。",
        trigger: "世界在变，交互在变。我们需要一种能像大脑一样代谢、重组、遗忘并随交互进化的生命体：Agentware 记忆系统。",
        accent: sharedAccents[3],
      },
    ],
    climax: {
      badge: "认知架构",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: {
        before: "不再是被动响应的工具，而是具备",
        highlight: "自主演化能力",
        after: "的认知与记忆系统。",
      },
      capacities: [
        {
          title: "Atomic Notes",
          desc: "将知识打碎成最小可理解单位。它们是活的，随新信息自动合并、修正与演化。",
          span: "md:col-span-2",
        },
        {
          title: "Dual Channel",
          desc: "同时维持 Episodic 与 Semantic 记忆，让 Agent 既有上下文，又有世界观。",
          span: "md:col-span-1",
        },
        {
          title: "Consolidation",
          desc: "自动去重、合并、压缩与提炼。遗忘 = 优化，而不是删除。",
          span: "md:col-span-1",
        },
        {
          title: "Traceability",
          desc: "每一条提炼后的记忆都带有强溯源链接，支持严苛审计与验证。",
          span: "md:col-span-2",
        },
        {
          title: "Cognitive Retrieval",
          desc: "结合向量、关键词、关系图谱、时间线与动态权重，精准定位所需认知切片。",
          span: "md:col-span-3",
        },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  ja: {
    meta: {
      title: "Agentware Knowledge Base Evolution",
      description: "キーワード検索から Agentware Memory System へ。",
    },
    nav: {
      language: "言語",
    },
    hero: {
      titleLine1: "Knowledge Bases.",
      titleLine2: "Evolved.",
      subtitle:
        "単純な検索ツールから、継続的な学習と自己進化を備えたエージェント記憶へ至る五段階の進化。",
      startJourney: "Start Journey",
    },
    common: {
      advantages: "利点",
      limitations: "限界",
      coreBreakthrough: "中核突破",
      representativeIssue: "代表的課題",
      paradigmShift: "パラダイム転換",
    },
    visuals: {
      keyword: {
        query: "Query:",
        invertedIndex: "転置インデックス",
        documents: "ドキュメント",
      },
      semantic: {
        queryVector: "クエリベクトル",
        idle: "待機中",
        calculating: "類似度計算中",
        found: "上位一致を発見",
      },
      hybrid: {
        keyword: "BM25 KEYWORD",
        rerank: "Rerank",
        fusion: "FUSION",
        semantic: "SEMANTIC VECTOR",
      },
      structured: {
        unstructuredText: "非構造テキスト",
        entityConcept: "エンティティ: 概念",
        memory: "記憶",
        cognition: "認知",
        reasoning: "推論",
        metadataExplorer: "メタデータ探索",
        queryingSchema: "Schema を検索中...",
        mechanism: "Mechanism",
      },
    },
    levels: [
      {
        id: "level-1",
        num: "1",
        title: "Keyword Retrieval",
        subtitle: "キーワード検索の時代",
        description: "厳密なキーワード一致に基づく情報検索システム。安定して効率的だが、根本的には機械的です。",
        method: "Query -> 分かち書き -> 転置インデックス -> BM25/TF-IDF ランキング",
        essence: "文字列一致システム",
        solved: "見つけられるか (Search)",
        pros: ["厳密一致に強い", "非常に安定して信頼できる", "解釈しやすい"],
        cons: ["意味を理解できない", "正確な用語に強く依存する", "同義語に弱い"],
        problem: "ユーザーが機械の語彙に合わせなければならない。",
        trigger: "ユーザーが正確な専門用語を出せず、意図や現象しか説明できないとき、文字列一致は破綻します。意味理解が必要になります。",
        accent: sharedAccents[0],
      },
      {
        id: "level-2",
        num: "2",
        title: "Semantic Retrieval",
        subtitle: "意味検索 / RAG の時代",
        description: "embedding ベースの類似検索。システムは単語そのものではなく、その背後にある意味を理解し始めます。",
        method: "テキスト -> 埋め込み | Query -> ベクトル -> 類似検索",
        essence: "意味類似検索",
        solved: "意味的に近いものを探せるか (Semantic)",
        pros: ["自然言語クエリを扱える", "多言語や同義語に強い", "再現率の汎化が高い"],
        cons: ["圧縮により情報が欠落する", "構造や重み付けに弱い", "もっともらしいが不正確な結果が出る"],
        problem: "似た内容は見つかるが、正解とは限らない。",
        trigger: "意味検索は汎化に優れる一方、専門領域では精度が崩れます。Level 1 の正確さと Level 2 の理解を組み合わせる必要がありました。",
        accent: sharedAccents[1],
      },
      {
        id: "level-3",
        num: "3",
        title: "Hybrid Retrieval",
        subtitle: "ハイブリッド検索（産業級 RAG）",
        description: "キーワード検索と意味検索を組み合わせた多チャネル検索。複数の候補を統合し、再ランキングします。",
        method: "BM25 召回 + ベクトル召回 -> 融合 -> Rerank",
        essence: "多チャネル検索システム",
        solved: "より正確に探せるか (Hybrid)",
        pros: ["厳密一致と意味理解を両立", "現時点で最も成熟した実運用方式", "重み調整が可能"],
        cons: ["チューニングが複雑", "知識の内部構造をまだ欠く", "深い文書横断推論に弱い"],
        problem: "システムは強くなったが、依然として“より良い検索”にすぎない。",
        trigger: "データは依然として文書断片です。複数文書にまたがる推論には、構造化された知識関係の理解が必要になります。",
        accent: sharedAccents[2],
      },
      {
        id: "level-4",
        num: "4",
        title: "Structured Knowledge Base",
        subtitle: "構造化知識ベース",
        description: "テキストを解析可能な知識単位へ変換し、構造化知識ベースとして組織します。エンティティリンク、関係抽出、構造化保存によって推論可能な知識ネットワークを構築します。",
        method: "テキスト -> 情報抽出 -> エンティティ/関係ネットワーク -> ルール検索",
        essence: "構造化知識ベース",
        solved: "正しい構造化知識ベースを扱えるか (Knowledge Base)",
        pros: ["構造が明確で解釈しやすい", "論理的な関連付けに強い", "複雑な業務ルールに対応できる"],
        cons: ["構築と保守のコストが高い", "Schema の拡張性が限られる", "静的なベースでは自己成長できない"],
        problem: "知識ベースを理解し始めても、まだ静的で硬直的です。",
        trigger: "世界は変化し続けます。記憶のように代謝し、再構成し、忘却し、進化するシステムが必要になります。",
        accent: sharedAccents[3],
      },
    ],
    climax: {
      badge: "認知アーキテクチャ",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: {
        before: "もはや受動的な応答ツールではなく、",
        highlight: "自己進化する",
        after: "認知・記憶システムです。",
      },
      capacities: [
        { title: "Atomic Notes", desc: "知識を最小の理解単位に分解し、新しい情報に応じて結合・修正・進化させます。", span: "md:col-span-2" },
        { title: "Dual Channel", desc: "エピソード記憶と意味記憶を同時に維持し、文脈と世界観の両方を保ちます。", span: "md:col-span-1" },
        { title: "Consolidation", desc: "重複除去、統合、圧縮、精錬を継続し、忘却を最適化として扱います。", span: "md:col-span-1" },
        { title: "Traceability", desc: "精錬後の記憶にも強い出典追跡性を維持し、監査性と信頼性を高めます。", span: "md:col-span-2" },
        { title: "Cognitive Retrieval", desc: "ベクトル、キーワード、関係、タイムライン、重みを統合して必要な認知断片を取得します。", span: "md:col-span-3" },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  es: {
    meta: { title: "Agentware Knowledge Base Evolution", description: "De la búsqueda por palabras clave al sistema de memoria Agentware." },
    nav: { language: "Idioma" },
    hero: {
      titleLine1: "Knowledge Bases.",
      titleLine2: "Evolved.",
      subtitle: "Una evolución en cinco niveles: desde herramientas de búsqueda simples hasta sistemas de memoria agentivos con aprendizaje continuo.",
      startJourney: "Start Journey",
    },
    common: {
      advantages: "Ventajas",
      limitations: "Limitaciones",
      coreBreakthrough: "Avance central",
      representativeIssue: "Problema representativo",
      paradigmShift: "Cambio de paradigma",
    },
    visuals: {
      keyword: { query: "Query:", invertedIndex: "Índice invertido", documents: "Documentos" },
      semantic: { queryVector: "Vector de consulta", idle: "Inactivo", calculating: "Calculando similitud", found: "Mejores coincidencias encontradas" },
      hybrid: { keyword: "BM25 KEYWORD", rerank: "Rerank", fusion: "FUSION", semantic: "SEMANTIC VECTOR" },
      structured: { unstructuredText: "Texto no estructurado", entityConcept: "Entidad: Concepto", memory: "Memoria", cognition: "Cognición", reasoning: "Razonamiento", metadataExplorer: "Explorador de metadatos", queryingSchema: "Consultando Schema...", mechanism: "Mechanism" },
    },
    levels: [
      { id: "level-1", num: "1", title: "Keyword Retrieval", subtitle: "Era de la recuperación por palabras clave", description: "Sistema de recuperación basado en coincidencias exactas. Es estable y eficiente, pero mecánico.", method: "Query -> Tokenización -> Índice invertido -> Ranking BM25/TF-IDF", essence: "Sistema de coincidencia de cadenas", solved: "¿Se puede encontrar? (Search)", pros: ["Alta precisión exacta", "Muy estable y confiable", "Interpretabilidad directa"], cons: ["No entiende semántica", "Depende de términos precisos", "Maneja mal los sinónimos"], problem: "El usuario debe adaptarse al vocabulario de la máquina.", trigger: "Cuando el usuario sólo puede describir una intención o un síntoma, la coincidencia por caracteres falla. El sistema debe entender significado.", accent: sharedAccents[0] },
      { id: "level-2", num: "2", title: "Semantic Retrieval", subtitle: "Recuperación semántica / Era RAG", description: "Recuperación por similitud basada en embeddings. El sistema empieza a entender el significado detrás del lenguaje.", method: "Texto -> Embedding | Query -> Vector -> Búsqueda de similitud", essence: "Búsqueda por similitud semántica", solved: "¿Encuentra contenido semánticamente cercano? (Semantic)", pros: ["Admite lenguaje natural", "Maneja sinónimos e idiomas", "Mejora mucho la cobertura"], cons: ["Pierde detalle por compresión", "Poca estructura y peso", "Recupera resultados plausibles pero imprecisos"], problem: "Se encuentra algo parecido, pero no siempre correcto.", trigger: "La búsqueda semántica generaliza bien, pero pierde precisión en dominios profesionales. Hacía falta combinar precisión y comprensión.", accent: sharedAccents[1] },
      { id: "level-3", num: "3", title: "Hybrid Retrieval", subtitle: "Recuperación híbrida (RAG industrial)", description: "Sistema multicanal que combina recuperación por palabras clave y por vectores, luego fusiona y reranquea resultados.", method: "Recuperación BM25 + Recuperación vectorial -> Fusión -> Rerank", essence: "Sistema multicanal de recuperación", solved: "¿Puede recuperar con mayor precisión? (Hybrid)", pros: ["Equilibra exactitud y semántica", "Enfoque productivo más maduro", "Permite pesos controlables"], cons: ["Requiere afinación compleja", "Aún carece de estructura interna del conocimiento", "Es débil en razonamiento profundo entre documentos"], problem: "El sistema es más fuerte, pero sigue siendo solo una mejor búsqueda.", trigger: "Los datos siguen siendo fragmentos de documentos. Para razonar entre varios documentos, el sistema debe comprender relaciones estructuradas.", accent: sharedAccents[2] },
      { id: "level-4", num: "4", title: "Structured Knowledge Base", subtitle: "Base de conocimiento estructurada", description: "El texto se transforma en unidades de conocimiento analizables y se organiza como una base de conocimiento estructurada mediante enlaces de entidades, extracción de relaciones y almacenamiento estructurado.", method: "Texto -> Extracción -> Red de entidades/relaciones -> Recuperación por reglas", essence: "Base de conocimiento estructurada", solved: "¿Puede operar con la base de conocimiento estructurada correcta? (Knowledge Base)", pros: ["Estructura clara e interpretable", "Admite relaciones lógicas precisas", "Funciona bien con reglas complejas"], cons: ["Construcción y mantenimiento costosos", "Extensibilidad de schema limitada", "Una base estática no crece por sí misma"], problem: "El sistema empieza a entender una base de conocimiento, pero sigue siendo estática y rígida.", trigger: "El mundo cambia constantemente. Necesitamos un sistema que metabolice, reestructure, olvide y evolucione como la memoria.", accent: sharedAccents[3] },
    ],
    climax: {
      badge: "Arquitectura cognitiva",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: { before: "Ya no es una herramienta pasiva, sino un", highlight: "sistema autoevolutivo", after: "de cognición y memoria." },
      capacities: [
        { title: "Atomic Notes", desc: "Divide el conocimiento en unidades mínimas comprensibles que pueden fusionarse, corregirse y evolucionar.", span: "md:col-span-2" },
        { title: "Dual Channel", desc: "Mantiene memoria episódica y semántica para conservar contexto y visión del mundo al mismo tiempo.", span: "md:col-span-1" },
        { title: "Consolidation", desc: "Deduplica, fusiona, comprime y refina continuamente. Olvidar es optimizar.", span: "md:col-span-1" },
        { title: "Traceability", desc: "Cada memoria refinada conserva trazabilidad fuerte para auditoría estricta.", span: "md:col-span-2" },
        { title: "Cognitive Retrieval", desc: "Combina vectores, palabras clave, grafos de relación, líneas de tiempo y pesos dinámicos.", span: "md:col-span-3" },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  de: {
    meta: { title: "Agentware Knowledge Base Evolution", description: "Von der Stichwortsuche zum Agentware-Memory-System." },
    nav: { language: "Sprache" },
    hero: {
      titleLine1: "Knowledge Bases.",
      titleLine2: "Evolved.",
      subtitle: "Eine Entwicklung in fünf Stufen: von einfacher Suche zu speicher-nativen Systemen mit kontinuierlichem Lernen und Selbstentwicklung.",
      startJourney: "Start Journey",
    },
    common: { advantages: "Vorteile", limitations: "Grenzen", coreBreakthrough: "Kernfortschritt", representativeIssue: "Typisches Problem", paradigmShift: "Paradigmenwechsel" },
    visuals: {
      keyword: { query: "Query:", invertedIndex: "Invertierter Index", documents: "Dokumente" },
      semantic: { queryVector: "Abfragevektor", idle: "Leerlauf", calculating: "Ähnlichkeit wird berechnet", found: "Top-Treffer gefunden" },
      hybrid: { keyword: "BM25 KEYWORD", rerank: "Rerank", fusion: "FUSION", semantic: "SEMANTIC VECTOR" },
      structured: { unstructuredText: "Unstrukturierter Text", entityConcept: "Entität: Konzept", memory: "Gedächtnis", cognition: "Kognition", reasoning: "Schlussfolgern", metadataExplorer: "Metadaten-Explorer", queryingSchema: "Schema wird abgefragt...", mechanism: "Mechanism" },
    },
    levels: [
      { id: "level-1", num: "1", title: "Keyword Retrieval", subtitle: "Ära der Stichwortsuche", description: "Informationssuche auf Basis exakter Schlüsselworttreffer. Stabil und effizient, aber mechanisch.", method: "Query -> Tokenisierung -> Invertierter Index -> BM25/TF-IDF-Ranking", essence: "Zeichenketten-Matching-System", solved: "Kann es gefunden werden? (Search)", pros: ["Stark bei exakten Treffern", "Sehr stabil und zuverlässig", "Direkt interpretierbar"], cons: ["Versteht keine Semantik", "Abhängig von präziser Terminologie", "Schwach bei Synonymen"], problem: "Nutzer müssen sich dem Wortschatz der Maschine anpassen.", trigger: "Wenn Nutzer nur Absichten oder Symptome beschreiben können, versagt Zeichen-Matching. Das System muss Bedeutung verstehen.", accent: sharedAccents[0] },
      { id: "level-2", num: "2", title: "Semantic Retrieval", subtitle: "Semantische Suche / RAG-Ära", description: "Ähnlichkeitssuche auf Embedding-Basis. Das System beginnt, die Bedeutung hinter Sprache zu verstehen.", method: "Text -> Embedding | Query -> Vektor -> Ähnlichkeitssuche", essence: "Semantische Ähnlichkeitssuche", solved: "Findet es semantisch Verwandtes? (Semantic)", pros: ["Unterstützt natürliche Sprache", "Versteht Synonyme und mehrere Sprachen", "Verbessert die Generalisierung stark"], cons: ["Informationsverlust durch Kompression", "Schwache Struktur- und Gewichtungslogik", "Plausibel wirkende, aber ungenaue Treffer"], problem: "Es wird etwas Ähnliches gefunden, aber nicht unbedingt die richtige Antwort.", trigger: "Semantische Suche generalisiert gut, verliert aber in Fachdomänen Präzision. Präzision und Verständnis mussten kombiniert werden.", accent: sharedAccents[1] },
      { id: "level-3", num: "3", title: "Hybrid Retrieval", subtitle: "Hybride Suche (industrielles RAG)", description: "Mehrkanaliges Suchsystem, das Stichwort- und Vektorsuche kombiniert, Ergebnisse fusioniert und neu sortiert.", method: "BM25 Recall + Vektor-Recall -> Fusion -> Rerank", essence: "Mehrkanaliges Recall-System", solved: "Kann es präziser abrufen? (Hybrid)", pros: ["Balanciert Genauigkeit und Semantik", "Derzeit reifster Produktionsansatz", "Gewichtungen sind steuerbar"], cons: ["Komplexes Tuning", "Fehlende innere Wissensstruktur", "Schwach bei tiefem dokumentübergreifendem Schließen"], problem: "Das System ist stärker, aber immer noch nur eine bessere Suche.", trigger: "Daten bleiben Dokumentfragmente. Für dokumentübergreifendes Schließen muss das System strukturierte Beziehungen verstehen.", accent: sharedAccents[2] },
      { id: "level-4", num: "4", title: "Structured Knowledge Base", subtitle: "Strukturierte Wissensbasis", description: "Text wird in analysierbare Wissenseinheiten überführt und als strukturierte Wissensbasis organisiert. Entity Linking, Relationsextraktion und strukturierte Speicherung bilden ein schlussfähiges Wissensnetz.", method: "Text -> Extraktion -> Entitäts-/Relationsnetz -> Regelbasierter Abruf", essence: "Strukturierte Wissensbasis", solved: "Kann es mit der richtigen strukturierten Wissensbasis arbeiten? (Knowledge Base)", pros: ["Klare Struktur und hohe Interpretierbarkeit", "Präzise logische Beziehungen", "Geeignet für komplexe Geschäftsregeln"], cons: ["Hoher Aufbau- und Pflegeaufwand", "Schema-Erweiterbarkeit begrenzt", "Eine statische Wissensbasis wächst nicht von selbst"], problem: "Das System beginnt, eine Wissensbasis zu verstehen, bleibt aber statisch und starr.", trigger: "Die Welt verändert sich ständig. Wir brauchen ein System, das wie Gedächtnis metabolisiert, neu strukturiert, vergisst und evolviert.", accent: sharedAccents[3] },
    ],
    climax: {
      badge: "Kognitive Architektur",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: { before: "Es ist kein passives Antwortwerkzeug mehr, sondern ein", highlight: "selbst-evolvierendes", after: "Kognitions- und Gedächtnissystem." },
      capacities: [
        { title: "Atomic Notes", desc: "Zerlegt Wissen in kleinste verständliche Einheiten, die sich mit neuen Informationen verbinden und weiterentwickeln.", span: "md:col-span-2" },
        { title: "Dual Channel", desc: "Hält episodisches und semantisches Gedächtnis gleichzeitig aufrecht.", span: "md:col-span-1" },
        { title: "Consolidation", desc: "Entfernt Duplikate, führt zusammen, komprimiert und verfeinert. Vergessen ist Optimierung.", span: "md:col-span-1" },
        { title: "Traceability", desc: "Jede verfeinerte Erinnerung bleibt stark nachvollziehbar und auditierbar.", span: "md:col-span-2" },
        { title: "Cognitive Retrieval", desc: "Verbindet Vektoren, Keywords, Beziehungen, Zeitachsen und dynamische Gewichte.", span: "md:col-span-3" },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  fr: {
    meta: { title: "Agentware Knowledge Base Evolution", description: "De la recherche par mots-clés au système de mémoire Agentware." },
    nav: { language: "Langue" },
    hero: { titleLine1: "Knowledge Bases.", titleLine2: "Evolved.", subtitle: "Une évolution en cinq niveaux, des outils de recherche simples aux systèmes de mémoire agentifs capables d'apprentissage continu.", startJourney: "Start Journey" },
    common: { advantages: "Avantages", limitations: "Limites", coreBreakthrough: "Percée clé", representativeIssue: "Problème représentatif", paradigmShift: "Changement de paradigme" },
    visuals: {
      keyword: { query: "Query:", invertedIndex: "Index inversé", documents: "Documents" },
      semantic: { queryVector: "Vecteur de requête", idle: "Inactif", calculating: "Calcul de similarité", found: "Meilleures correspondances trouvées" },
      hybrid: { keyword: "BM25 KEYWORD", rerank: "Rerank", fusion: "FUSION", semantic: "SEMANTIC VECTOR" },
      structured: { unstructuredText: "Texte non structuré", entityConcept: "Entité : Concept", memory: "Mémoire", cognition: "Cognition", reasoning: "Raisonnement", metadataExplorer: "Explorateur de métadonnées", queryingSchema: "Interrogation du schéma...", mechanism: "Mechanism" },
    },
    levels: [
      { id: "level-1", num: "1", title: "Keyword Retrieval", subtitle: "L'ère des mots-clés", description: "Un système de recherche fondé sur la correspondance exacte des mots-clés. Stable et efficace, mais mécanique.", method: "Query -> Tokenisation -> Index inversé -> Classement BM25/TF-IDF", essence: "Système de correspondance de chaînes", solved: "Peut-on le trouver ? (Search)", pros: ["Forte précision exacte", "Très stable et fiable", "Interprétation directe"], cons: ["Ne comprend pas la sémantique", "Dépend d'une terminologie précise", "Mauvaise gestion des synonymes"], problem: "L'utilisateur doit s'adapter au vocabulaire de la machine.", trigger: "Quand l'utilisateur ne peut décrire qu'une intention ou un symptôme, la correspondance par caractères échoue. Le système doit comprendre le sens.", accent: sharedAccents[0] },
      { id: "level-2", num: "2", title: "Semantic Retrieval", subtitle: "Recherche sémantique / Ère RAG", description: "Recherche par similarité basée sur les embeddings. Le système commence à comprendre le sens derrière le langage.", method: "Texte -> Embedding | Query -> Vecteur -> Recherche de similarité", essence: "Recherche par similarité sémantique", solved: "Trouve-t-il du contenu sémantiquement proche ? (Semantic)", pros: ["Prend en charge le langage naturel", "Gère synonymes et langues", "Améliore fortement la généralisation"], cons: ["Perte de détail due à la compression", "Faible structuration et pondération", "Résultats plausibles mais imprécis"], problem: "On trouve quelque chose de proche, mais pas forcément la bonne réponse.", trigger: "La recherche sémantique généralise bien mais perd en précision dans les domaines spécialisés. Il fallait combiner précision et compréhension.", accent: sharedAccents[1] },
      { id: "level-3", num: "3", title: "Hybrid Retrieval", subtitle: "Recherche hybride (RAG industriel)", description: "Un système multicanal qui combine recherche par mots-clés et par vecteurs, puis fusionne et rerank les résultats.", method: "Rappel BM25 + rappel vectoriel -> Fusion -> Rerank", essence: "Système de rappel multicanal", solved: "Peut-il retrouver plus précisément ? (Hybrid)", pros: ["Équilibre exactitude et sémantique", "Approche de production la plus mûre", "Pondérations contrôlables"], cons: ["Réglage complexe", "Manque encore de structure de connaissance interne", "Faible pour le raisonnement inter-documents profond"], problem: "Le système est plus fort, mais reste une meilleure recherche.", trigger: "Les données restent fragmentées en documents. Pour raisonner entre plusieurs documents, le système doit comprendre des relations structurées.", accent: sharedAccents[2] },
      { id: "level-4", num: "4", title: "Structured Knowledge Base", subtitle: "Base de connaissances structurée", description: "Le texte est transformé en unités de connaissance analysables et organisé comme une base de connaissances structurée grâce au liage d'entités, à l'extraction de relations et au stockage structuré.", method: "Texte -> Extraction -> Réseau entités/relations -> Recherche par règles", essence: "Base de connaissances structurée", solved: "Peut-il opérer sur la bonne base de connaissances structurée ? (Knowledge Base)", pros: ["Structure claire et interprétable", "Relations logiques précises", "Compatible avec des règles métier complexes"], cons: ["Construction et maintenance coûteuses", "Extensibilité du schema limitée", "Une base statique ne se développe pas seule"], problem: "Le système commence à comprendre une base de connaissances, mais elle reste statique et rigide.", trigger: "Le monde change en permanence. Il faut un système qui métabolise, restructure, oublie et évolue comme la mémoire.", accent: sharedAccents[3] },
    ],
    climax: {
      badge: "Architecture cognitive",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: { before: "Ce n'est plus un simple outil passif, mais un", highlight: "système auto-évolutif", after: "de cognition et de mémoire." },
      capacities: [
        { title: "Atomic Notes", desc: "Découpe la connaissance en unités minimales compréhensibles qui peuvent fusionner, se corriger et évoluer.", span: "md:col-span-2" },
        { title: "Dual Channel", desc: "Maintient en parallèle mémoire épisodique et mémoire sémantique.", span: "md:col-span-1" },
        { title: "Consolidation", desc: "Déduplique, fusionne, compresse et affine en continu. Oublier devient une optimisation.", span: "md:col-span-1" },
        { title: "Traceability", desc: "Chaque mémoire raffinée reste fortement traçable et auditable.", span: "md:col-span-2" },
        { title: "Cognitive Retrieval", desc: "Combine vecteurs, mots-clés, graphes relationnels, lignes temporelles et poids dynamiques.", span: "md:col-span-3" },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  "pt-BR": {
    meta: { title: "Agentware Knowledge Base Evolution", description: "Da busca por palavras-chave ao sistema de memória Agentware." },
    nav: { language: "Idioma" },
    hero: { titleLine1: "Knowledge Bases.", titleLine2: "Evolved.", subtitle: "Uma evolução em cinco níveis: de ferramentas simples de busca para sistemas de memória agentivos com aprendizado contínuo.", startJourney: "Start Journey" },
    common: { advantages: "Vantagens", limitations: "Limitações", coreBreakthrough: "Avanço central", representativeIssue: "Problema representativo", paradigmShift: "Mudança de paradigma" },
    visuals: {
      keyword: { query: "Query:", invertedIndex: "Índice invertido", documents: "Documentos" },
      semantic: { queryVector: "Vetor de consulta", idle: "Inativo", calculating: "Calculando similaridade", found: "Melhores correspondências encontradas" },
      hybrid: { keyword: "BM25 KEYWORD", rerank: "Rerank", fusion: "FUSION", semantic: "SEMANTIC VECTOR" },
      structured: { unstructuredText: "Texto não estruturado", entityConcept: "Entidade: Conceito", memory: "Memória", cognition: "Cognição", reasoning: "Raciocínio", metadataExplorer: "Explorador de metadados", queryingSchema: "Consultando Schema...", mechanism: "Mechanism" },
    },
    levels: [
      { id: "level-1", num: "1", title: "Keyword Retrieval", subtitle: "Era da busca por palavras-chave", description: "Sistema de recuperação baseado em correspondência exata. Estável e eficiente, mas mecânico.", method: "Query -> Tokenização -> Índice invertido -> Ranking BM25/TF-IDF", essence: "Sistema de correspondência de strings", solved: "É possível encontrar? (Search)", pros: ["Alta precisão exata", "Muito estável e confiável", "Interpretabilidade direta"], cons: ["Não entende semântica", "Depende de termos precisos", "Lida mal com sinônimos"], problem: "O usuário precisa se adaptar ao vocabulário da máquina.", trigger: "Quando o usuário só consegue descrever intenção ou sintoma, a correspondência por caracteres falha. O sistema precisa entender significado.", accent: sharedAccents[0] },
      { id: "level-2", num: "2", title: "Semantic Retrieval", subtitle: "Busca semântica / Era do RAG", description: "Recuperação por similaridade baseada em embeddings. O sistema começa a entender o significado por trás da linguagem.", method: "Texto -> Embedding | Query -> Vetor -> Busca por similaridade", essence: "Busca por similaridade semântica", solved: "Consegue encontrar conteúdo semanticamente relacionado? (Semantic)", pros: ["Aceita linguagem natural", "Lida com sinônimos e idiomas", "Melhora muito a generalização da recuperação"], cons: ["Perde detalhes pela compressão", "Pouca noção de estrutura e peso", "Retorna resultados plausíveis, mas imprecisos"], problem: "Encontra algo parecido, mas não necessariamente a resposta correta.", trigger: "A busca semântica generaliza bem, mas perde precisão em domínios especializados. Era necessário combinar precisão com entendimento.", accent: sharedAccents[1] },
      { id: "level-3", num: "3", title: "Hybrid Retrieval", subtitle: "Busca híbrida (RAG industrial)", description: "Sistema multicanal que combina busca por palavras-chave e por vetores, depois funde e reclassifica os resultados.", method: "Recall BM25 + Recall vetorial -> Fusão -> Rerank", essence: "Sistema de recall multicanal", solved: "Consegue recuperar com mais precisão? (Hybrid)", pros: ["Equilibra exatidão e semântica", "Abordagem produtiva mais madura hoje", "Permite pesos controláveis"], cons: ["Ajuste complexo", "Ainda falta estrutura interna do conhecimento", "Fraco para raciocínio profundo entre documentos"], problem: "O sistema ficou mais forte, mas ainda é apenas uma busca melhor.", trigger: "Os dados continuam fragmentados em documentos. Para raciocinar entre múltiplos documentos, o sistema precisa entender relações estruturadas.", accent: sharedAccents[2] },
      { id: "level-4", num: "4", title: "Structured Knowledge Base", subtitle: "Base de conhecimento estruturada", description: "O texto é transformado em unidades de conhecimento analisáveis e organizado como uma base de conhecimento estruturada por meio de ligação de entidades, extração de relações e armazenamento estruturado.", method: "Texto -> Extração -> Rede de entidades/relações -> Busca por regras", essence: "Base de conhecimento estruturada", solved: "Consegue operar com a base de conhecimento estruturada correta? (Knowledge Base)", pros: ["Estrutura clara e interpretável", "Suporta relações lógicas precisas", "Funciona com regras de negócio complexas"], cons: ["Construção e manutenção caras", "Extensibilidade de schema limitada", "Uma base estática não cresce sozinha"], problem: "O sistema começa a entender uma base de conhecimento, mas ela ainda é estática e rígida.", trigger: "O mundo muda continuamente. Precisamos de um sistema que metabolize, reestruture, esqueça e evolua como a memória.", accent: sharedAccents[3] },
    ],
    climax: {
      badge: "Arquitetura cognitiva",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: { before: "Não é mais uma ferramenta passiva, mas um", highlight: "sistema autoevolutivo", after: "de cognição e memória." },
      capacities: [
        { title: "Atomic Notes", desc: "Divide o conhecimento em unidades mínimas compreensíveis que podem se fundir, corrigir e evoluir.", span: "md:col-span-2" },
        { title: "Dual Channel", desc: "Mantém memória episódica e semântica ao mesmo tempo.", span: "md:col-span-1" },
        { title: "Consolidation", desc: "Remove duplicatas, funde, comprime e refina continuamente. Esquecer é otimizar.", span: "md:col-span-1" },
        { title: "Traceability", desc: "Cada memória refinada mantém rastreabilidade forte para auditoria.", span: "md:col-span-2" },
        { title: "Cognitive Retrieval", desc: "Combina vetores, palavras-chave, relações, linhas do tempo e pesos dinâmicos.", span: "md:col-span-3" },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
  ko: {
    meta: { title: "Agentware Knowledge Base Evolution", description: "키워드 검색에서 Agentware Memory System까지." },
    nav: { language: "언어" },
    hero: { titleLine1: "Knowledge Bases.", titleLine2: "Evolved.", subtitle: "단순한 검색 도구에서 지속 학습과 자기 진화를 갖춘 에이전트 메모리 시스템으로 이어지는 5단계 진화.", startJourney: "Start Journey" },
    common: { advantages: "장점", limitations: "한계", coreBreakthrough: "핵심 돌파", representativeIssue: "대표 문제", paradigmShift: "패러다임 전환" },
    visuals: {
      keyword: { query: "Query:", invertedIndex: "역색인", documents: "문서" },
      semantic: { queryVector: "질의 벡터", idle: "대기", calculating: "유사도 계산 중", found: "상위 일치 항목 발견" },
      hybrid: { keyword: "BM25 KEYWORD", rerank: "Rerank", fusion: "FUSION", semantic: "SEMANTIC VECTOR" },
      structured: { unstructuredText: "비정형 텍스트", entityConcept: "엔터티: 개념", memory: "기억", cognition: "인지", reasoning: "추론", metadataExplorer: "메타데이터 탐색기", queryingSchema: "Schema 조회 중...", mechanism: "Mechanism" },
    },
    levels: [
      { id: "level-1", num: "1", title: "Keyword Retrieval", subtitle: "키워드 검색 시대", description: "정확한 키워드 일치에 기반한 정보 검색 시스템입니다. 안정적이고 효율적이지만 기계적입니다.", method: "Query -> 토큰화 -> 역색인 -> BM25/TF-IDF 순위화", essence: "문자열 매칭 시스템", solved: "찾을 수 있는가? (Search)", pros: ["정확 일치에 강함", "매우 안정적이고 신뢰 가능", "직관적으로 해석 가능"], cons: ["의미를 이해하지 못함", "정확한 용어에 강하게 의존", "동의어 처리 약함"], problem: "사용자가 기계의 어휘에 맞춰야 한다.", trigger: "사용자가 정확한 용어 대신 의도나 증상만 설명할 수 있을 때 문자 매칭은 실패합니다. 시스템은 의미를 이해해야 합니다.", accent: sharedAccents[0] },
      { id: "level-2", num: "2", title: "Semantic Retrieval", subtitle: "의미 검색 / RAG 시대", description: "임베딩 기반 유사도 검색입니다. 시스템이 언어 뒤의 의미를 이해하기 시작합니다.", method: "텍스트 -> 임베딩 | Query -> 벡터 -> 유사도 검색", essence: "의미 유사도 검색", solved: "의미적으로 가까운 것을 찾는가? (Semantic)", pros: ["자연어 질의 지원", "동의어와 다국어 처리", "재현율 일반화 향상"], cons: ["압축으로 세부 정보 손실", "구조와 가중치 인식이 약함", "그럴듯하지만 부정확한 결과"], problem: "비슷한 것은 찾지만 정답은 아닐 수 있다.", trigger: "의미 검색은 일반화에는 강하지만 전문 영역에서는 정밀도가 무너집니다. 정확성과 이해를 결합해야 했습니다.", accent: sharedAccents[1] },
      { id: "level-3", num: "3", title: "Hybrid Retrieval", subtitle: "하이브리드 검색 (산업형 RAG)", description: "키워드 검색과 벡터 검색을 결합한 다중 채널 시스템으로, 결과를 융합하고 재정렬합니다.", method: "BM25 리콜 + 벡터 리콜 -> 융합 -> Rerank", essence: "다중 채널 리콜 시스템", solved: "더 정확하게 찾을 수 있는가? (Hybrid)", pros: ["정확 일치와 의미 이해의 균형", "현재 가장 성숙한 운영 방식", "가중치 제어 가능"], cons: ["튜닝이 복잡함", "지식의 내부 구조는 여전히 부족", "문서 간 깊은 추론에 약함"], problem: "시스템은 강해졌지만 여전히 더 나은 검색일 뿐이다.", trigger: "데이터는 여전히 문서 조각입니다. 다문서 추론을 위해서는 구조화된 관계를 이해해야 합니다.", accent: sharedAccents[2] },
      { id: "level-4", num: "4", title: "Structured Knowledge Base", subtitle: "구조화된 지식 베이스", description: "텍스트를 분석 가능한 지식 단위로 바꾸고, 엔터티 링크, 관계 추출, 구조화 저장을 통해 구조화된 지식 베이스로 조직합니다.", method: "텍스트 -> 정보 추출 -> 엔터티/관계 네트워크 -> 규칙 기반 검색", essence: "구조화된 지식 베이스", solved: "올바른 구조화 지식 베이스를 다룰 수 있는가? (Knowledge Base)", pros: ["구조가 명확하고 해석 가능", "정밀한 논리 관계 지원", "복잡한 비즈니스 규칙 처리 가능"], cons: ["구축과 유지 비용이 높음", "Schema 확장성 제한", "정적 베이스는 스스로 성장하지 못함"], problem: "시스템이 지식 베이스를 이해하기 시작하지만 여전히 정적이고 경직되어 있다.", trigger: "세계는 계속 변합니다. 기억처럼 대사하고 재구성하며 잊고 진화하는 시스템이 필요합니다.", accent: sharedAccents[3] },
    ],
    climax: {
      badge: "인지 아키텍처",
      titleLine1: "Agentware",
      titleLine2: "Memory System",
      description: { before: "더 이상 수동적 응답 도구가 아니라", highlight: "자기 진화하는", after: "인지·기억 시스템입니다." },
      capacities: [
        { title: "Atomic Notes", desc: "지식을 최소 이해 단위로 분해하고 새 정보에 따라 병합·수정·진화시킵니다.", span: "md:col-span-2" },
        { title: "Dual Channel", desc: "에피소드 기억과 의미 기억을 동시에 유지합니다.", span: "md:col-span-1" },
        { title: "Consolidation", desc: "중복 제거, 병합, 압축, 정제를 지속합니다. 망각은 최적화입니다.", span: "md:col-span-1" },
        { title: "Traceability", desc: "정제된 기억마다 강한 추적성을 유지해 감사 가능성을 높입니다.", span: "md:col-span-2" },
        { title: "Cognitive Retrieval", desc: "벡터, 키워드, 관계, 타임라인, 동적 가중치를 결합합니다.", span: "md:col-span-3" },
      ],
      finalTitle: "Memory as Agentware.",
      finalCaption: "Agentware System Evolution · Level 5 Achieved",
    },
  },
};

export default resources;
