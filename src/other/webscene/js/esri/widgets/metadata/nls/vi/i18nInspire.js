define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Đ_INSPIRE (Data)_____ớ",
    		description: ""
    	},
    	service: {
    		caption: "Đ_INSPIRE (Service)______ớ",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Đ_Inspire Data Theme______ớ"
    },
    
    inspireServiceType: {
      discovery: "Dịch vụ Tìm kiếm Tài nguyên",
      view: "Dịch vụ Xem",
      download: "Dịch vụ Tải xuống",
      transformation: "Dịch vụ Chuyển đổi",
      invoke: "Dịch vụ Lấy dữ liệu",
      other: "Dịch vụ Khác"
    },
    
    keywordSections: {
    	dataTheme: "Đ_Inspire Data Theme______ớ",
    	serviceCategory: "Đ_ISO 19119 Service Category_________ớ",
    	gemetConcept: "Đ_GEMET Concept_____ớ",
    	otherKeywords: "Đ_Other Keywords_____ớ"
    },
    
    LanguageCode: {
    	bul: "Đ_Bulgarian____ớ",
    	cze: "Đ_Czech___ớ",
    	dan: "Đ_Danish___ớ",
    	dut: "Đ_Dutch___ớ",
    	eng: "Đ_English___ớ",
    	est: "Đ_Estonian___ớ",
    	fin: "Đ_Finnish___ớ",
    	fre: "Đ_French___ớ",
    	ger: "Đ_German___ớ",
    	gre: "Đ_Greek___ớ",
    	hun: "Đ_Hungarian____ớ",
    	gle: "Đ_Gaelic (Irish)_____ớ",
    	ita: "Đ_Italian___ớ",
    	lav: "Đ_Latvian___ớ",
    	lit: "Đ_Lithuanian____ớ",
    	mlt: "Đ_Maltese___ớ",
    	pol: "Đ_Polish___ớ", 
    	por: "Đ_Portuguese____ớ",
    	rum: "Đ_Romanian___ớ",
    	slo: "Đ_Slovak___ớ",
    	slv: "Đ_Slovenian____ớ",  	
    	spa: "Đ_Spanish___ớ",
    	swe: "Đ_Swedish___ớ",
    	
    	chi: "Đ_Chinese___ớ",
    	kor: "Đ_Korean___ớ",
    	nor: "Đ_Norwegian____ớ",
    	rus: "Đ_Russian___ớ",
    	tur: "Đ_Turkish___ớ"
    },
    
    otherConstraints: {
    	noLimitations: "Đ_No limitations_____ớ",
    	confidentialityOfProceedings: "Đ_The confidentiality of the proceedings of public authorities____________________ớ...",
    	internationalRelations: "Đ_International relations, public security or national defence___________________ớ",
    	courseOfJustice: "Đ_The course of justice, the ability of any person to receive a fair trial________________________ớ...",
    	confidentialityOfCommercial: "Đ_The confidentiality of commercial or industrial information____________________ớ...",
    	intellectualProperty: "Đ_Intellectual property rights_________ớ",
    	confidentialityOfPersonalData: "Đ_The confidentiality of personal data and/or files_________________ớ...",
    	interestsOrProtection: "Đ_The interests or protection of any person who supplied the information_______________________ớ...",
    	protectionOfEnvironment: "Đ_The protection of the environment to which such information relates______________________ớ...",
    	freeText: "Đ_Free text____ớ"
    },
    
    serviceType: {
    	humanInteractionService: "Đ_100 Geographic human interaction services_____________ớ", 
    	humanCatalogueViewer: "Đ_101 Catalogue viewer_______ớ", 
    	humanGeographicViewer: "Đ_102 Geographic viewer_______ớ", 
    	humanGeographicSpreadsheetViewer: "Đ_103 Geographic spreadsheet viewer___________ớ", 
    	humanServiceEditor: "Đ_104 Service editor______ớ", 
    	humanChainDefinitionEditor: "Đ_105 Chain definition editor_________ớ", 
    	humanWorkflowEnactmentManager: "Đ_106 Workflow enactment manager__________ớ",
    	humanGeographicFeatureEditor: "Đ_107 Geographic feature editor__________ớ", 
    	humanGeographicSymbolEditor: "Đ_108 Geographic symbol editor__________ớ ",
    	humanFeatureGeneralizationEditor: "Đ_109 Feature generalisation editor___________ớ", 
    	humanGeographicDataStructureViewer: "Đ_110 Geographic data-structure viewer____________ớ", 
    	infoManagementService: "Đ_200 Geographic model/information management service________________ớ", 
    	infoFeatureAccessService: "Đ_201 Feature access service_________ớ", 
    	infoMapAccessService: "Đ_202 Map access service________ớ", 
    	infoCoverageAccessService: "Đ_203 Coverage access service_________ớ", 
    	infoSensorDescriptionService: "Đ_204 Sensor description service__________ớ", 
    	infoProductAccessService: "Đ_205 Product access service_________ớ", 
    	infoFeatureTypeService: "Đ_206 Feature type service________ớ", 
    	infoCatalogueService: "Đ_207 Catalogue service_______ớ", 
    	infoRegistryService: "Đ_208 Registry Service_______ớ", 
    	infoGazetteerService: "Đ_209 Gazetteer service_______ớ", 
    	infoOrderHandlingService: "Đ_210 Order handling service_________ớ", 
    	infoStandingOrderService: "Đ_211 Standing order service_________ớ", 
    	taskManagementService: "Đ_300 Geographic workflow/task management services_______________ớ", 
    	chainDefinitionService: "Đ_301 Chain definition service_________ớ", 
    	workflowEnactmentService: "Đ_302 Workflow enactment service__________ớ", 
    	subscriptionService: "Đ_303 Subscription service________ớ", 
    	spatialProcessingService: "Đ_400 Geographic processing services - spatial______________ớ", 
    	spatialCoordinateConversionService: "Đ_401 Coordinate conversion service___________ớ", 
    	spatialCoordinateTransformationService: "Đ_402 Coordinate transformation service____________ớ", 
    	spatialCoverageVectorConversionService: "Đ_403 Coverage/vector conversion service____________ớ", 
    	spatialImageCoordinateConversionService: "Đ_404 Image coordinate conversion service_____________ớ", 
    	spatialRectificationService: "Đ_405 Rectification service_________ớ", 
    	spatialOrthorectificationService: "Đ_406 Orthorectification service__________ớ", 
    	spatialSensorGeometryModelAdjustmentService: "Đ_407 Sensor geometry model adjustment service______________ớ", 
    	spatialImageGeometryModelConversionService: "Đ_408 Image geometry model conversion service______________ớ", 
    	spatialSubsettingService: "Đ_409 Subsetting service________ớ", 
    	spatialSamplingService: "Đ_410 Sampling service_______ớ", 
    	spatialTilingChangeService: "Đ_411 Tiling change service_________ớ", 
    	spatialDimensionMeasurementService: "Đ_412 Dimension measurement service___________ớ", 
    	spatialFeatureManipulationService: "Đ_413 Feature manipulation services___________ớ", 
    	spatialFeatureMatchingService: "Đ_414 Feature matching service_________ớ", 
    	spatialFeatureGeneralizationService: "Đ_415 Feature generalisation service___________ớ", 
    	spatialRouteDeterminationService: "Đ_416 Route determination service__________ớ", 
    	spatialPositioningService: "Đ_417 Positioning service________ớ", 
    	spatialProximityAnalysisService: "Đ_418 Proximity analysis service__________ớ", 
    	thematicProcessingService: "Đ_500 Geographic processing services - thematic_______________ớ",
    	thematicGoparameterCalculationService: "Đ_501 Geoparameter calculation service____________ớ", 
    	thematicClassificationService: "Đ_502 Thematic classification service____________ớ", 
    	thematicFeatureGeneralizationService: "Đ_503 Feature generalisation service___________ớ", 
    	thematicSubsettingService: "Đ_504 Subsetting service________ớ", 
    	thematicSpatialCountingService: "Đ_505 Spatial counting service_________ớ", 
    	thematicChangeDetectionService: "Đ_506 Change detection service_________ớ", 
    	thematicGeographicInformationExtractionService: "Đ_507 Geographic information extraction services_______________ớ", 
    	thematicImageProcessingService: "Đ_508 Image processing service_________ớ", 
    	thematicReducedResolutionGenerationService: "Đ_509 Reduced resolution generation service_____________ớ", 
    	thematicImageManipulationService: "Đ_510 Image Manipulation Services__________ớ", 
    	thematicImageUnderstandingService: "Đ_511 Image understanding services___________ớ", 
    	thematicImageSynthesisService: "Đ_512 Image synthesis services_________ớ", 
    	thematicMultibandImageManipulationService: "Đ_513 Multiband image manipulation___________ớ", 
    	thematicObjectDetectionService: "Đ_514 Object detection service_________ớ", 
    	thematicGeoparsingService: "Đ_515 Geoparsing service________ớ", 
    	thematicGeocodingService: "Đ_516 Geocoding service_______ớ", 
    	temporalProcessingService: "Đ_600 Geographic processing services - temporal_______________ớ", 
    	temporalReferenceSystemTransformationService: "Đ_601 Temporal reference system transformation service_________________ớ", 
    	temporalSubsettingService: "Đ_602 Subsetting service________ớ", 
    	temporalSamplingService: "Đ_603 Sampling service_______ớ", 
    	temporalProximityAnalysisService: "Đ_604 Temporal proximity analysis service_____________ớ", 
    	metadataProcessingService: "Đ_700 Geographic processing services - metadata_______________ớ", 
    	metadataStatisticalCalculationService: "Đ_701 Statistical calculation service____________ớ", 
    	metadataGeographicAnnotationService: "Đ_702 Geographic annotation services___________ớ", 
    	comService: "Đ_800 Geographic communication services____________ớ", 
    	comEncodingService: "Đ_801 Encoding service_______ớ", 
    	comTransferService: "Đ_802 Transfer service_______ớ", 
    	comGeographicCompressionService: "Đ_803 Geographic compression service___________ớ", 
    	comGeographicFormatConversionService: "Đ_804 Geographic format conversion service_____________ớ", 
    	comMessagingService: "Đ_805 Messaging service_______ớ", 
    	comRemoteFileAndExecutableManagement: "Đ_806 Remote file and executable management_____________ớ"
    },
    
    useLimitation: {
    	noCondition: "Đ_No conditions apply_______ớ",
    	unknownCondition: "Đ_Conditions unknown______ớ",
    	freeText: "Đ_Free text____ớ"
    }

  })
);
