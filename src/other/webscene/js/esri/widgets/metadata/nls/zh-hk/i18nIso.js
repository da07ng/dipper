define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ISO 19115 (資料)",
    		description: ""
    	},
    	service: {
    		caption: "ISO 19119 (服務)",
    		description: ""
    	},
    	gmi: {
    		caption: "ISO 19115-2 (影像與網格資料)",
    		description: ""
    	}
    },
    
    general: {
    	reference: "參考"
    },
    
    sections: {
    	metadata: "中繼資料",
    	identification: "識別碼",
    	distribution: "分佈",
    	quality: "品質",
    	acquisition: "收購"
    },
    
    metadataSection: {
    	identifier: "識別碼",
    	contact: "連絡人",
    	date: "日期",
    	standard: "標準",
    	reference: "參考"
    },
    
    identificationSection: {
    	citation: "引用資訊",
    	description: "描述",
    	contact: "連絡人",
    	thumbnail: "縮略圖",
    	keywords: "關鍵字",
    	constraints: "約束",
    	resource: "資源",
    	resourceTab: {
    		representation: "製圖呈現",
    		language: "語言",
    		classification: "分類",
    		extent: "範圍"
    	},
    	serviceResourceTab: {
    		serviceType: "服務類型",
    		extent: "範圍",
    		couplingType: "耦合類型",
    		operation: "操作",
    		operatesOn: "操作於"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "範圍",
    	conformance: "相容性",
    	lineage: "譜系"
    },
    
    acquisitionSection: {
    	requirement: "要求",
    	objective: "物件",
    	instrument: "儀器",
    	plan: "測量圖",
    	operation: "操作",
    	platform: "平臺",
    	environment: "環境"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "摘要",
    	purpose: "用途",
    	credit: "製作者名單",
    	pointOfContact: "聯絡點",
    	resourceMaintenance: "維護",
    	graphicOverview: "圖形概覽",
    	descriptiveKeywords: "關鍵字集合",
    	resourceConstraints: "約束"
    },
    
    CI_Address: {
    	deliveryPoint: "交付點",
    	city: "城市",
    	administrativeArea: "行政區",
    	postalCode: "郵遞區號",
    	country: "國家",
    	electronicMailAddress: "電子郵件位址"
    },
    
    CI_Citation: {
    	title: "標題",
    	alternateTitle: "別名",
    	identifier: "唯一的資源識別碼",
    	resource: {
    		title: "資源標題",
    		date: "資源日期"
    	},
    	specification: {
    		title: "規格標題",
    		date: "規格日期"
    	}
    },
    
    CI_Contact: {
    	phone: "電話",
    	address: "地址",
    	onlineResource: "線上資源",
    	hoursOfService: "服務時間",
    	contactInstructions: "聯絡說明"
    },
    
    CI_Date: {
    	date: "日期",
    	dateType: "日期類型"
    },
    
  	CI_DateTypeCode: {
  		caption: "日期類型",
  		creation: "建立日期",
  		publication: "發佈日期",
  		revision: "修改日期"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "函數",
    	download: "下載",
    	information: "資訊",
    	offlineAccess: "離線存取",
    	order: "順序",
    	search: "搜尋"
    },
    
    CI_OnlineResource: {
    	caption: "線上資源",
    	linkage: "URL",
    	protocol: "通訊協議",
    	applicationProfile: "應用程式設定檔",
    	name: "名稱",
    	description: "描述",
    	sFunction: "函數"
    },
    
    CI_ResponsibleParty: {
    	caption: "聯絡點",
    	individualName: "個人名稱",
    	organisationName: "組織名稱",
    	positionName: "職位名稱",
    	contactInfo: "連絡人資訊",
    	role: "角色"
    },
    
    CI_RoleCode: {
    	caption: "角色",
    	resourceProvider: "資源提供者",
    	custodian: "監管人",
    	owner: "擁有者",
    	user: "使用者",
    	distributor: "經銷商",
    	originator: "創作者",
    	pointOfContact: "聯絡點",
    	principalInvestigator: "首席調查員",
    	processor: "處理器",
    	publisher: "發佈者",
    	author: "作者"
    },
    
    CI_Telephone: {
    	voice: "語音",
    	facsimile: "傳真"
    },
    
    DCPList: {
    	caption: "DCP",
    	XML: "XML",
    	CORBA: "CORBA",
    	JAVA: "JAVA",
    	COM: "COM",
    	SQL: "SQL",
    	WebServices: "WebServices"
    },
    
    DQ_ConformanceResult: {
    	caption: "一致性結果",
    	explanation: "說明",
    	degree: {
    		caption: "度",
    		validationPerformed: "所執行的驗證",
    		conformant: "符合標準",
    		nonConformant: "不符合標準"
    	}
    },
    
    DQ_DataQuality: {
    	report: "報告"
    },
    
    DQ_Scope : {
    	level: "範圍 (品質資訊所套用的)",
    	levelDescription: "級別描述"
    },
    
    EX_Extent: {
    	caption: "範圍",
    	description: "描述",
    	geographicElement: "空間範圍",
    	temporalElement: "暫存範圍",
    	verticalElement: "垂直範圍"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "西邊界經線",
    	eastBoundLongitude: "東邊界經線",
    	southBoundLatitude: "南邊界經線",
    	northBoundLatitude: "北邊界經線"
    },
    
    EX_GeographicDescription: {
    	caption: "地理描述"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "開始日期",
    		endPosition: "結束日期"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "最小值",
    	maximumValue: "最大值",
    	verticalCRS: "垂直 CRS"
    },
    
    Length: {
    	caption: "長度",
    	uom: "測量單位",
    	km: "公里",
    	m: "公尺",
    	mi: "英里",
    	ft: "英呎"
    },
    
    LI_Lineage: {
    	statement: "血統聲明"
    },
    
    MD_BrowseGraphic: {
    	fileName: "瀏覽圖形 URL",
    	fileDescription: "瀏覽圖形說明文字",
    	fileType: "瀏覽圖形類型"
    },
    
    MD_ClassificationCode: {
    	unclassified: "未分類",
    	restricted: "受限",
    	confidential: "保密",
    	secret: "機密",
    	topSecret: "絕對機密"
    },
    
    MD_Constraints: {
    	caption: "使用約束",
    	useLimitation: "使用限制"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "空間呈現類型",
    	spatialResolution: "空間解析度",
    	language: "資源語言",
    	supplementalInformation: "補充"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Online"
    },
    
    MD_Distribution: {
    	distributionFormat: "分發格式",
    	transferOptions: "傳輸選項"
    },
    
    MD_Format: {
    	name: "格式名稱",
    	version: "格式版本"
    },
    
    MD_Identifier: {
    	caption: "URI",
    	identifierCaption: "識別碼",
    	code: "代碼"
    },
    
    MD_Keywords: {
    	delimitedCaption: "關鍵字",
    	thesaurusName: "相關的同義字"
    },
    
    MD_KeywordTypeCode: {
    	caption: "關鍵字類型",
    	discipline: "專業領域",
    	place: "地點",
    	stratum: "地層",
    	temporal: "暫存",
    	theme: "主題"
    },
    
    MD_LegalConstraints: {
    	caption: "法律約束",
    	accessConstraints: "存取限制",
    	useConstraints: "使用限制",
    	otherConstraints: "其他約束"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "頻率",
    	continual: "持續",
    	daily: "每天",
    	weekly: "每週",
    	fortnightly: "每兩週",
    	monthly: "每月",
    	quarterly: "季度",
    	biannually: "一年兩次",
    	annually: "每年",
    	asNeeded: "根據需要",
    	irregular: "不定期",
    	notPlanned: "未規畫",
    	unknown: "未知"
    },
    
    MD_Metadata: {
    	caption: "中繼資料",
    	fileIdentifier: "檔案識別碼",
    	language: "中繼資料語言",
    	hierarchyLevel: "階層層級",
    	hierarchyLevelName: "階層層級名稱",
    	contact: "中繼資料連絡人",
    	dateStamp: "中繼資料日期",
    	metadataStandardName: "中繼資料標準名稱",
    	metadataStandardVersion: "中繼資料標準版本",
    	referenceSystemInfo: "參考系統",
    	identificationInfo: "識別碼",
    	distributionInfo: "分佈",
    	dataQualityInfo: "品質"
    },
    
    MD_ProgressCode: {
    	caption: "進度代碼",
    	completed: "已完成",
    	historicalArchive: "歷史存檔",
    	obsolete: "廢棄",
    	onGoing: "正在進行",
    	planned: "已規畫",
    	required: "必填",
    	underDevelopment: "正在開發"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "分母"
    },
    
    MD_Resolution: {
    	equivalentScale: "同等比例",
    	distance: "距離"
    },
    
    MD_RestrictionCode: {
    	copyright: "版權所有",
    	patent: "專利",
    	patentPending: "專利申請中",
    	trademark: "商標",
    	license: "授權",
    	intellectualPropertyRights: "智慧財產權",
    	restricted: "受限",
    	otherRestrictions: "其他限制"
    },
    
    MD_ScopeCode: {
    	attribute: "屬性",
    	attributeType: "屬性類型",
    	collectionHardware: "集合硬體",
    	collectionSession: "集合工作階段",
    	dataset: "資料集",
    	series: "系列",
    	nonGeographicDataset: "沒有地理資料集",
    	dimensionGroup: "尺寸群組",
    	feature: "圖徵",
    	featureType: "圖徵類型",
    	propertyType: "屬性類型",
    	fieldSession: "現場工作階段",
    	software: "軟體",
    	service: "服務",
    	model: "模型",
    	tile: "圖磚"
    },
    
    MD_ScopeDescription: {
    	attributes: "屬性",
    	features: "圖徵",
    	featureInstances: "圖徵執行個體",
    	attributeInstances: "屬性執行個體",
    	dataset: "資料集",
    	other: "其他"
    },
    
    MD_SecurityConstraints: {
    	caption: "安全限制",
    	classification: "分類",
    	userNote: "使用者注意事項",
    	classificationSystem: "分類系統",
    	handlingDescription: "處理描述"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "空間呈現類型",
    	vector: "向量",
    	grid: "網格",
    	textTable: "文字表格",
    	tin: "TIN",
    	stereoModel: "立體模型",
    	video: "影片"
    },
    
    MD_TopicCategoryCode: {
    	caption: "主題類別",
    	boundaries: "行政與政治邊界",
    	farming: "農業與耕種",
    	climatologyMeteorologyAtmosphere: "大氣與氣候",
    	biota: "生物學和生態學",
    	economy: "商業與經濟",
    	planningCadastre: "地籍圖",
    	society: "文化、社會與人口統計學",
    	elevation: "海拔與衍生產品",
    	environment: "環境與保育",
    	structure: "設施與結構",
    	geoscientificInformation: "地質及地球物理",
    	health: "人類健康與疾病",
    	imageryBaseMapsEarthCover: "影像與底圖",
    	inlandWaters: "內陸水域資源",
    	location: "地點與測量網路",
    	intelligenceMilitary: "軍事",
    	oceans: "海洋與河口",
    	transportation: "交通網路",
    	utilitiesCommunication: "公用事業與通訊"
    },
    
    MI_ContextCode: {
    	caption: "內容",
    	acquisition: "收購",
    	pass: "傳遞",
    	wayPoint: "航點"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "環境條件",
    	averageAirTemperature: "平均空氣溫度",
    	maxRelativeHumidity: "最大相對濕度",
    	maxAltitude: "最大高度",
    	meterologicalConditions: "氣象條件"
    },
    
    MI_Event: {
    	identifier: "事件識別碼",
    	time: "時間",
    	expectedObjectiveReference: "預期的物件 (物件識別碼)",
    	relatedSensorReference: "相關的感應器 (儀器識別碼)",
    	relatedPassReference: "相關的傳遞 (平台傳遞識別碼)"
    },

    MI_GeometryTypeCode: {
    	point: "點",
    	linear: "線",
    	areal: "面",
    	strip: "帶狀"
    },
    
    MI_Instrument: {
    	citation: "儀器引用",
    	identifier: "儀器識別碼",
    	sType: "儀器類型",
    	description: "儀器描述",
    	mountedOn: "安裝於",
    	mountedOnPlatformReference: "安裝於 (平台識別碼)"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "收購"
    },
    
    MI_Objective: {
    	caption: "物件",
    	identifier: "物件識別碼",
    	priority: "目標的優先順序",
    	sFunction: "物件的函數",
    	extent: "範圍",
    	pass: "平台傳遞",
    	sensingInstrumentReference: "感應儀器 (儀器識別碼)",
    	objectiveOccurrence: "事件",
    	sections: {
    		identification: "識別碼",
    		extent: "範圍",
    		pass: "傳遞",
    		sensingInstrument: "感應儀器",
    		objectiveOccurrence: "事件"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "類型 (物件的集合技巧)",
    	instantaneousCollection: "即時的集合",
    	persistentView: "持續的視圖",
    	survey: "測量"
    },
    
    MI_Operation: {
    	caption: "操作",
    	description: "操作描述",
    	citation: "操作引用",
    	identifier: "操作識別碼",
    	status: "操作狀態",
    	objectiveReference: "相關的物件 (物件識別碼)",
    	planReference: "相關的計畫 (計畫識別碼)",
    	significantEventReference: "相關的事件 (事件識別碼)",
    	platformReference: "相關的平台 (平台識別碼)",
    	sections: {
    		identification: "識別碼",
    		related: "相關的"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "操作類型",
    	real: "真實的",
    	simulated: "模擬的",
    	synthesized: "合成的"
    },
    
    MI_Plan: {
    	sType: "收集資料的採樣幾何",
    	status: "計畫的狀態",
    	citation: "要求採集之主管機關的引用",
    	satisfiedRequirementReference: "符合的要求 (要求識別碼)",
    	operationReference: "相關的操作 (操作識別碼)"
    },
    
    MI_Platform: {
    	citation: "平台引用",
    	identifier: "平台識別碼",
    	description: "支援儀器的平台描述",
    	sponsor: "平台的贊助組織",
    	instrument: "安裝於平台上的儀器",
    	instrumentReference: "儀器識別碼",
    	sections: {
    		identification: "識別碼",
    		sponsor: "贊助者",
    		instruments: "儀器"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "平台傳遞識別碼",
    	extent: "平台傳遞範圍",
    	relatedEventReference: "相關的事件 (事件識別碼)"
    },

    MI_PriorityCode: {
    	critical: "重要", 
    	highImportance: "重要性高",
    	mediumImportance: "重要性中等",
    	lowImportance: "重要性低"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "採集的申請日期",
    	latestAcceptableDate: "最近可接受的日期"
    },
    
    MI_Requirement: {
    	caption: "要求",
    	citation: "要求引導材料的引用",
    	identifier: "要求識別碼",
    	requestor: "要求的申請",
    	recipient: "要求結果的接收者",
    	priority: "要求優先順序",
    	requestedDate: "申請日期",
    	expiryDate: "到期日",
    	satisifiedPlanReference: "完成的計畫 (計畫識別碼)",
    	sections: {
    		identification: "識別碼",
    		requestor: "申請人",
    		recipient: "接收者",
    		priorityAndDates: "優先權與日期",
    		satisifiedPlan: "完成的計畫"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "順序",
    	start: "開始",
    	end: "結束",
    	instantaneous: "即時"
    },
    
    MI_TriggerCode: {
    	caption: "觸發",
    	automatic: "自動",
    	manual: "手動",
    	preProgrammed: "預編程式"
    },
    
    ObjectReference: {
    	uuidref: "UUID 參考",
    	xlinkref: "URL 參考"
    },
    
    RS_Identifier: {
    	caption: "ID Plus 代碼空間",
    	code: "代碼",
    	codeSpace: "代碼空間"
    },
    
    SV_CouplingType: {
    	loose: "鬆散",
    	mixed: "混合",
    	tight: "緊密"
    },
    
    SV_OperationMetadata: {
    	operationName: "操作名稱",
    	DCP: "DCP",
    	connectPoint: "連接點"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "服務類型",
    	couplingType: "耦合類型",
    	containsOperations: "操作中繼資料",
    	operatesOn: "操作於"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "不確定的位置",
    	indeterminates: {
    		before: "之前",
       	after: "之後",
      	now: "現在",
      	unknown: "未知"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "GEMET 概念關鍵字",
    		tool: "搜尋...",
    		dialogTitle: "GEMET - 概念關鍵字",
    		searchLabel: "搜尋:",
    		searchTip: "搜尋 GEMET"
    	},
    	theme: {
    		tool: "搜尋...",
    		dialogTitle: "GEMET - Inspire 資料主題"
    	},
    	ioerror: "與 GEMET 服務的通訊錯誤：{url}",
    	searching: "搜尋 GEMET...",
    	noMatch: "找不到相符的結果。",
      languages: {
      	"bg": "保加利亞語",
      	"cs": "捷克語",
      	"da": "丹麥語",
      	"nl": "荷蘭語",
      	"en": "英語",
      	"et": "愛沙尼亞語",
      	"fi": "芬蘭語",
      	"fr": "法語",
      	"de": "德語",
      	"el": "希臘語",
      	"hu": "匈牙利語",
      	"ga": "蓋爾語 (愛爾蘭語)",
      	"it": "義大利語",
      	"lv": "拉脫維亞語",
      	"lt": "立陶宛語",
      	"mt": "馬爾他語",
      	"pl": "波蘭語", 
      	"pt": "葡萄牙語",
      	"ro": "羅馬尼亞語",
      	"sk": "斯洛伐克語",
      	"sl": "斯洛凡尼亞語",  	
      	"es": "西班牙語",
      	"sv": "瑞典語"
      }
    }
   
  })
);
