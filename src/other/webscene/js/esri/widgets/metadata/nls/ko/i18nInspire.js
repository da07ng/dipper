define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "한_INSPIRE (Data)_____빠",
    		description: ""
    	},
    	service: {
    		caption: "한_INSPIRE (Service)______빠",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "한_Inspire Data Theme______빠"
    },
    
    inspireServiceType: {
      discovery: "검색 서비스",
      view: "조회 서비스",
      download: "다운로드 서비스",
      transformation: "변환 서비스",
      invoke: "호출 서비스",
      other: "기타 서비스"
    },
    
    keywordSections: {
    	dataTheme: "한_Inspire Data Theme______빠",
    	serviceCategory: "한_ISO 19119 Service Category_________빠",
    	gemetConcept: "한_GEMET Concept_____빠",
    	otherKeywords: "한_Other Keywords_____빠"
    },
    
    LanguageCode: {
    	bul: "한_Bulgarian____빠",
    	cze: "한_Czech___빠",
    	dan: "한_Danish___빠",
    	dut: "한_Dutch___빠",
    	eng: "한_English___빠",
    	est: "한_Estonian___빠",
    	fin: "한_Finnish___빠",
    	fre: "한_French___빠",
    	ger: "한_German___빠",
    	gre: "한_Greek___빠",
    	hun: "한_Hungarian____빠",
    	gle: "한_Gaelic (Irish)_____빠",
    	ita: "한_Italian___빠",
    	lav: "한_Latvian___빠",
    	lit: "한_Lithuanian____빠",
    	mlt: "한_Maltese___빠",
    	pol: "한_Polish___빠", 
    	por: "한_Portuguese____빠",
    	rum: "한_Romanian___빠",
    	slo: "한_Slovak___빠",
    	slv: "한_Slovenian____빠",  	
    	spa: "한_Spanish___빠",
    	swe: "한_Swedish___빠",
    	
    	chi: "한_Chinese___빠",
    	kor: "한_Korean___빠",
    	nor: "한_Norwegian____빠",
    	rus: "한_Russian___빠",
    	tur: "한_Turkish___빠"
    },
    
    otherConstraints: {
    	noLimitations: "한_No limitations_____빠",
    	confidentialityOfProceedings: "한_The confidentiality of the proceedings of public authorities____________________빠...",
    	internationalRelations: "한_International relations, public security or national defence___________________빠",
    	courseOfJustice: "한_The course of justice, the ability of any person to receive a fair trial________________________빠...",
    	confidentialityOfCommercial: "한_The confidentiality of commercial or industrial information____________________빠...",
    	intellectualProperty: "한_Intellectual property rights_________빠",
    	confidentialityOfPersonalData: "한_The confidentiality of personal data and/or files_________________빠...",
    	interestsOrProtection: "한_The interests or protection of any person who supplied the information_______________________빠...",
    	protectionOfEnvironment: "한_The protection of the environment to which such information relates______________________빠...",
    	freeText: "한_Free text____빠"
    },
    
    serviceType: {
    	humanInteractionService: "한_100 Geographic human interaction services_____________빠", 
    	humanCatalogueViewer: "한_101 Catalogue viewer_______빠", 
    	humanGeographicViewer: "한_102 Geographic viewer_______빠", 
    	humanGeographicSpreadsheetViewer: "한_103 Geographic spreadsheet viewer___________빠", 
    	humanServiceEditor: "한_104 Service editor______빠", 
    	humanChainDefinitionEditor: "한_105 Chain definition editor_________빠", 
    	humanWorkflowEnactmentManager: "한_106 Workflow enactment manager__________빠",
    	humanGeographicFeatureEditor: "한_107 Geographic feature editor__________빠", 
    	humanGeographicSymbolEditor: "한_108 Geographic symbol editor__________빠 ",
    	humanFeatureGeneralizationEditor: "한_109 Feature generalisation editor___________빠", 
    	humanGeographicDataStructureViewer: "한_110 Geographic data-structure viewer____________빠", 
    	infoManagementService: "한_200 Geographic model/information management service________________빠", 
    	infoFeatureAccessService: "한_201 Feature access service_________빠", 
    	infoMapAccessService: "한_202 Map access service________빠", 
    	infoCoverageAccessService: "한_203 Coverage access service_________빠", 
    	infoSensorDescriptionService: "한_204 Sensor description service__________빠", 
    	infoProductAccessService: "한_205 Product access service_________빠", 
    	infoFeatureTypeService: "한_206 Feature type service________빠", 
    	infoCatalogueService: "한_207 Catalogue service_______빠", 
    	infoRegistryService: "한_208 Registry Service_______빠", 
    	infoGazetteerService: "한_209 Gazetteer service_______빠", 
    	infoOrderHandlingService: "한_210 Order handling service_________빠", 
    	infoStandingOrderService: "한_211 Standing order service_________빠", 
    	taskManagementService: "한_300 Geographic workflow/task management services_______________빠", 
    	chainDefinitionService: "한_301 Chain definition service_________빠", 
    	workflowEnactmentService: "한_302 Workflow enactment service__________빠", 
    	subscriptionService: "한_303 Subscription service________빠", 
    	spatialProcessingService: "한_400 Geographic processing services - spatial______________빠", 
    	spatialCoordinateConversionService: "한_401 Coordinate conversion service___________빠", 
    	spatialCoordinateTransformationService: "한_402 Coordinate transformation service____________빠", 
    	spatialCoverageVectorConversionService: "한_403 Coverage/vector conversion service____________빠", 
    	spatialImageCoordinateConversionService: "한_404 Image coordinate conversion service_____________빠", 
    	spatialRectificationService: "한_405 Rectification service_________빠", 
    	spatialOrthorectificationService: "한_406 Orthorectification service__________빠", 
    	spatialSensorGeometryModelAdjustmentService: "한_407 Sensor geometry model adjustment service______________빠", 
    	spatialImageGeometryModelConversionService: "한_408 Image geometry model conversion service______________빠", 
    	spatialSubsettingService: "한_409 Subsetting service________빠", 
    	spatialSamplingService: "한_410 Sampling service_______빠", 
    	spatialTilingChangeService: "한_411 Tiling change service_________빠", 
    	spatialDimensionMeasurementService: "한_412 Dimension measurement service___________빠", 
    	spatialFeatureManipulationService: "한_413 Feature manipulation services___________빠", 
    	spatialFeatureMatchingService: "한_414 Feature matching service_________빠", 
    	spatialFeatureGeneralizationService: "한_415 Feature generalisation service___________빠", 
    	spatialRouteDeterminationService: "한_416 Route determination service__________빠", 
    	spatialPositioningService: "한_417 Positioning service________빠", 
    	spatialProximityAnalysisService: "한_418 Proximity analysis service__________빠", 
    	thematicProcessingService: "한_500 Geographic processing services - thematic_______________빠",
    	thematicGoparameterCalculationService: "한_501 Geoparameter calculation service____________빠", 
    	thematicClassificationService: "한_502 Thematic classification service____________빠", 
    	thematicFeatureGeneralizationService: "한_503 Feature generalisation service___________빠", 
    	thematicSubsettingService: "한_504 Subsetting service________빠", 
    	thematicSpatialCountingService: "한_505 Spatial counting service_________빠", 
    	thematicChangeDetectionService: "한_506 Change detection service_________빠", 
    	thematicGeographicInformationExtractionService: "한_507 Geographic information extraction services_______________빠", 
    	thematicImageProcessingService: "한_508 Image processing service_________빠", 
    	thematicReducedResolutionGenerationService: "한_509 Reduced resolution generation service_____________빠", 
    	thematicImageManipulationService: "한_510 Image Manipulation Services__________빠", 
    	thematicImageUnderstandingService: "한_511 Image understanding services___________빠", 
    	thematicImageSynthesisService: "한_512 Image synthesis services_________빠", 
    	thematicMultibandImageManipulationService: "한_513 Multiband image manipulation___________빠", 
    	thematicObjectDetectionService: "한_514 Object detection service_________빠", 
    	thematicGeoparsingService: "한_515 Geoparsing service________빠", 
    	thematicGeocodingService: "한_516 Geocoding service_______빠", 
    	temporalProcessingService: "한_600 Geographic processing services - temporal_______________빠", 
    	temporalReferenceSystemTransformationService: "한_601 Temporal reference system transformation service_________________빠", 
    	temporalSubsettingService: "한_602 Subsetting service________빠", 
    	temporalSamplingService: "한_603 Sampling service_______빠", 
    	temporalProximityAnalysisService: "한_604 Temporal proximity analysis service_____________빠", 
    	metadataProcessingService: "한_700 Geographic processing services - metadata_______________빠", 
    	metadataStatisticalCalculationService: "한_701 Statistical calculation service____________빠", 
    	metadataGeographicAnnotationService: "한_702 Geographic annotation services___________빠", 
    	comService: "한_800 Geographic communication services____________빠", 
    	comEncodingService: "한_801 Encoding service_______빠", 
    	comTransferService: "한_802 Transfer service_______빠", 
    	comGeographicCompressionService: "한_803 Geographic compression service___________빠", 
    	comGeographicFormatConversionService: "한_804 Geographic format conversion service_____________빠", 
    	comMessagingService: "한_805 Messaging service_______빠", 
    	comRemoteFileAndExecutableManagement: "한_806 Remote file and executable management_____________빠"
    },
    
    useLimitation: {
    	noCondition: "한_No conditions apply_______빠",
    	unknownCondition: "한_Conditions unknown______빠",
    	freeText: "한_Free text____빠"
    }

  })
);
