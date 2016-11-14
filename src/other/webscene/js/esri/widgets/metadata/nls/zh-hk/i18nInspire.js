define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "INSPIRE (資料)",
    		description: ""
    	},
    	service: {
    		caption: "INSPIRE (服務)",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Inspire 資料主題"
    },
    
    inspireServiceType: {
      discovery: "探索服務",
      view: "檢視服務",
      download: "下載服務",
      transformation: "轉換服務",
      invoke: "啟動服務",
      other: "其他服務"
    },
    
    keywordSections: {
    	dataTheme: "Inspire 資料主題",
    	serviceCategory: "ISO 19119 服務類別",
    	gemetConcept: "GEMET 概念",
    	otherKeywords: "其他關鍵字"
    },
    
    LanguageCode: {
    	bul: "保加利亞語",
    	cze: "捷克語",
    	dan: "丹麥語",
    	dut: "荷蘭語",
    	eng: "英語",
    	est: "愛沙尼亞語",
    	fin: "芬蘭語",
    	fre: "法語",
    	ger: "德語",
    	gre: "希臘語",
    	hun: "匈牙利語",
    	gle: "蓋爾語 (愛爾蘭語)",
    	ita: "義大利語",
    	lav: "拉脫維亞語",
    	lit: "立陶宛語",
    	mlt: "馬爾他語",
    	pol: "波蘭語", 
    	por: "葡萄牙語",
    	rum: "羅馬尼亞語",
    	slo: "斯洛伐克語",
    	slv: "斯洛凡尼亞語",  	
    	spa: "西班牙語",
    	swe: "瑞典語",
    	
    	chi: "中文",
    	kor: "朝鮮語",
    	nor: "挪威語",
    	rus: "俄語",
    	tur: "土耳其語"
    },
    
    otherConstraints: {
    	noLimitations: "沒有限制",
    	confidentialityOfProceedings: "政府主管機關程序的保密...",
    	internationalRelations: "國際關係、公共安全或國防",
    	courseOfJustice: "司法公正，任何人都可以取得公平審判的能力...",
    	confidentialityOfCommercial: "商業或企業資訊的保密...",
    	intellectualProperty: "智慧財產權",
    	confidentialityOfPersonalData: "個人資料和/或檔案的保密...",
    	interestsOrProtection: "提供資訊之任何人的權益或保護...",
    	protectionOfEnvironment: "該資訊相關之環境的保護...",
    	freeText: "自由文字"
    },
    
    serviceType: {
    	humanInteractionService: "100 地理人類互動服務", 
    	humanCatalogueViewer: "101 目錄檢視器", 
    	humanGeographicViewer: "102 地理檢視器", 
    	humanGeographicSpreadsheetViewer: "103 地理報表檢視器", 
    	humanServiceEditor: "104 服務編輯器", 
    	humanChainDefinitionEditor: "105 連鎖定義編輯器", 
    	humanWorkflowEnactmentManager: "106 工作流程制訂管理員",
    	humanGeographicFeatureEditor: "107 地理圖徵編輯器", 
    	humanGeographicSymbolEditor: "108 地理符號編輯器 ",
    	humanFeatureGeneralizationEditor: "109 圖徵歸納編輯器", 
    	humanGeographicDataStructureViewer: "110 地理資料結構檢視器", 
    	infoManagementService: "200 地理模型/資訊管理服務", 
    	infoFeatureAccessService: "201 圖徵存取服務", 
    	infoMapAccessService: "202 地圖存取服務", 
    	infoCoverageAccessService: "203 涵蓋範圍存取服務", 
    	infoSensorDescriptionService: "204 感應器描述服務", 
    	infoProductAccessService: "205 產品存取服務", 
    	infoFeatureTypeService: "206 圖徵類型服務", 
    	infoCatalogueService: "207 目錄服務", 
    	infoRegistryService: "208 登錄服務", 
    	infoGazetteerService: "209 公報服務", 
    	infoOrderHandlingService: "210 訂單處理服務", 
    	infoStandingOrderService: "211 長期訂購服務", 
    	taskManagementService: "300 地理工作流程/任務管理服務", 
    	chainDefinitionService: "301 連鎖定義服務", 
    	workflowEnactmentService: "302 工作流程制訂服務", 
    	subscriptionService: "303 訂閱服務", 
    	spatialProcessingService: "400 地理處理服務 - 空間", 
    	spatialCoordinateConversionService: "401 坐標換算服務", 
    	spatialCoordinateTransformationService: "402 坐標轉換服務", 
    	spatialCoverageVectorConversionService: "403 涵蓋範圍/向量換算服務", 
    	spatialImageCoordinateConversionService: "404 影像坐標換算服務", 
    	spatialRectificationService: "405 校正服務", 
    	spatialOrthorectificationService: "406 正射化校正服務", 
    	spatialSensorGeometryModelAdjustmentService: "407 感應器幾何模型調整服務", 
    	spatialImageGeometryModelConversionService: "408 影像幾何模型換算服務", 
    	spatialSubsettingService: "409 子集設定服務", 
    	spatialSamplingService: "410 取樣服務", 
    	spatialTilingChangeService: "411 並排變更服務", 
    	spatialDimensionMeasurementService: "412 尺寸測量服務", 
    	spatialFeatureManipulationService: "413 圖徵操控服務", 
    	spatialFeatureMatchingService: "414 圖徵比對服務", 
    	spatialFeatureGeneralizationService: "415 圖徵歸納服務", 
    	spatialRouteDeterminationService: "416 路線確定服務", 
    	spatialPositioningService: "417 定位服務", 
    	spatialProximityAnalysisService: "418 鄰近分析服務", 
    	thematicProcessingService: "500 地理處理服務 - 主題",
    	thematicGoparameterCalculationService: "501 地理參數計算服務", 
    	thematicClassificationService: "502 主題分類服務", 
    	thematicFeatureGeneralizationService: "503 圖徵歸納服務", 
    	thematicSubsettingService: "504 子集設定服務", 
    	thematicSpatialCountingService: "505 空間計數服務", 
    	thematicChangeDetectionService: "506 變更偵測服務", 
    	thematicGeographicInformationExtractionService: "507 地理資訊擷取服務", 
    	thematicImageProcessingService: "508 影像處理服務", 
    	thematicReducedResolutionGenerationService: "509 降低解析度生成服務", 
    	thematicImageManipulationService: "510 影像操控服務", 
    	thematicImageUnderstandingService: "511 影像理解服務", 
    	thematicImageSynthesisService: "512 影像合成服務", 
    	thematicMultibandImageManipulationService: "513 多頻帶影像操控", 
    	thematicObjectDetectionService: "514 物體偵測服務", 
    	thematicGeoparsingService: "515 地理剖析服務", 
    	thematicGeocodingService: "516 地理編碼服務", 
    	temporalProcessingService: "600 地理處理服務 - 暫存", 
    	temporalReferenceSystemTransformationService: "601 暫存參考系統轉換服務", 
    	temporalSubsettingService: "602 子集設定服務", 
    	temporalSamplingService: "603 取樣服務", 
    	temporalProximityAnalysisService: "604 暫存鄰近分析服務", 
    	metadataProcessingService: "700 地理處理服務 - 中繼資料", 
    	metadataStatisticalCalculationService: "701 統計數字計算服務", 
    	metadataGeographicAnnotationService: "702 地理註釋服務", 
    	comService: "800 地理通訊服務", 
    	comEncodingService: "801 編碼服務", 
    	comTransferService: "802 傳輸服務", 
    	comGeographicCompressionService: "803 地理壓縮服務", 
    	comGeographicFormatConversionService: "804 地理格式轉換服務", 
    	comMessagingService: "805 傳訊服務", 
    	comRemoteFileAndExecutableManagement: "806 遠端檔案與可執行的管理"
    },
    
    useLimitation: {
    	noCondition: "沒有條件適用",
    	unknownCondition: "條件未知",
    	freeText: "自由文字"
    }

  })
);
