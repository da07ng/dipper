define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Ж_INSPIRE (Data)_____Я",
    		description: ""
    	},
    	service: {
    		caption: "Ж_INSPIRE (Service)______Я",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Ж_Inspire Data Theme______Я"
    },
    
    inspireServiceType: {
      discovery: "Сервис Discovery",
      view: "Просмотреть сервис",
      download: "Загрузить сервис",
      transformation: "Сервис преобразования",
      invoke: "Сервис Invoke",
      other: "Другой сервис"
    },
    
    keywordSections: {
    	dataTheme: "Ж_Inspire Data Theme______Я",
    	serviceCategory: "Ж_ISO 19119 Service Category_________Я",
    	gemetConcept: "Ж_GEMET Concept_____Я",
    	otherKeywords: "Ж_Other Keywords_____Я"
    },
    
    LanguageCode: {
    	bul: "Ж_Bulgarian____Я",
    	cze: "Ж_Czech___Я",
    	dan: "Ж_Danish___Я",
    	dut: "Ж_Dutch___Я",
    	eng: "Ж_English___Я",
    	est: "Ж_Estonian___Я",
    	fin: "Ж_Finnish___Я",
    	fre: "Ж_French___Я",
    	ger: "Ж_German___Я",
    	gre: "Ж_Greek___Я",
    	hun: "Ж_Hungarian____Я",
    	gle: "Ж_Gaelic (Irish)_____Я",
    	ita: "Ж_Italian___Я",
    	lav: "Ж_Latvian___Я",
    	lit: "Ж_Lithuanian____Я",
    	mlt: "Ж_Maltese___Я",
    	pol: "Ж_Polish___Я", 
    	por: "Ж_Portuguese____Я",
    	rum: "Ж_Romanian___Я",
    	slo: "Ж_Slovak___Я",
    	slv: "Ж_Slovenian____Я",  	
    	spa: "Ж_Spanish___Я",
    	swe: "Ж_Swedish___Я",
    	
    	chi: "Ж_Chinese___Я",
    	kor: "Ж_Korean___Я",
    	nor: "Ж_Norwegian____Я",
    	rus: "Ж_Russian___Я",
    	tur: "Ж_Turkish___Я"
    },
    
    otherConstraints: {
    	noLimitations: "Ж_No limitations_____Я",
    	confidentialityOfProceedings: "Ж_The confidentiality of the proceedings of public authorities____________________Я...",
    	internationalRelations: "Ж_International relations, public security or national defence___________________Я",
    	courseOfJustice: "Ж_The course of justice, the ability of any person to receive a fair trial________________________Я...",
    	confidentialityOfCommercial: "Ж_The confidentiality of commercial or industrial information____________________Я...",
    	intellectualProperty: "Ж_Intellectual property rights_________Я",
    	confidentialityOfPersonalData: "Ж_The confidentiality of personal data and/or files_________________Я...",
    	interestsOrProtection: "Ж_The interests or protection of any person who supplied the information_______________________Я...",
    	protectionOfEnvironment: "Ж_The protection of the environment to which such information relates______________________Я...",
    	freeText: "Ж_Free text____Я"
    },
    
    serviceType: {
    	humanInteractionService: "Ж_100 Geographic human interaction services_____________Я", 
    	humanCatalogueViewer: "Ж_101 Catalogue viewer_______Я", 
    	humanGeographicViewer: "Ж_102 Geographic viewer_______Я", 
    	humanGeographicSpreadsheetViewer: "Ж_103 Geographic spreadsheet viewer___________Я", 
    	humanServiceEditor: "Ж_104 Service editor______Я", 
    	humanChainDefinitionEditor: "Ж_105 Chain definition editor_________Я", 
    	humanWorkflowEnactmentManager: "Ж_106 Workflow enactment manager__________Я",
    	humanGeographicFeatureEditor: "Ж_107 Geographic feature editor__________Я", 
    	humanGeographicSymbolEditor: "Ж_108 Geographic symbol editor__________Я ",
    	humanFeatureGeneralizationEditor: "Ж_109 Feature generalisation editor___________Я", 
    	humanGeographicDataStructureViewer: "Ж_110 Geographic data-structure viewer____________Я", 
    	infoManagementService: "Ж_200 Geographic model/information management service________________Я", 
    	infoFeatureAccessService: "Ж_201 Feature access service_________Я", 
    	infoMapAccessService: "Ж_202 Map access service________Я", 
    	infoCoverageAccessService: "Ж_203 Coverage access service_________Я", 
    	infoSensorDescriptionService: "Ж_204 Sensor description service__________Я", 
    	infoProductAccessService: "Ж_205 Product access service_________Я", 
    	infoFeatureTypeService: "Ж_206 Feature type service________Я", 
    	infoCatalogueService: "Ж_207 Catalogue service_______Я", 
    	infoRegistryService: "Ж_208 Registry Service_______Я", 
    	infoGazetteerService: "Ж_209 Gazetteer service_______Я", 
    	infoOrderHandlingService: "Ж_210 Order handling service_________Я", 
    	infoStandingOrderService: "Ж_211 Standing order service_________Я", 
    	taskManagementService: "Ж_300 Geographic workflow/task management services_______________Я", 
    	chainDefinitionService: "Ж_301 Chain definition service_________Я", 
    	workflowEnactmentService: "Ж_302 Workflow enactment service__________Я", 
    	subscriptionService: "Ж_303 Subscription service________Я", 
    	spatialProcessingService: "Ж_400 Geographic processing services - spatial______________Я", 
    	spatialCoordinateConversionService: "Ж_401 Coordinate conversion service___________Я", 
    	spatialCoordinateTransformationService: "Ж_402 Coordinate transformation service____________Я", 
    	spatialCoverageVectorConversionService: "Ж_403 Coverage/vector conversion service____________Я", 
    	spatialImageCoordinateConversionService: "Ж_404 Image coordinate conversion service_____________Я", 
    	spatialRectificationService: "Ж_405 Rectification service_________Я", 
    	spatialOrthorectificationService: "Ж_406 Orthorectification service__________Я", 
    	spatialSensorGeometryModelAdjustmentService: "Ж_407 Sensor geometry model adjustment service______________Я", 
    	spatialImageGeometryModelConversionService: "Ж_408 Image geometry model conversion service______________Я", 
    	spatialSubsettingService: "Ж_409 Subsetting service________Я", 
    	spatialSamplingService: "Ж_410 Sampling service_______Я", 
    	spatialTilingChangeService: "Ж_411 Tiling change service_________Я", 
    	spatialDimensionMeasurementService: "Ж_412 Dimension measurement service___________Я", 
    	spatialFeatureManipulationService: "Ж_413 Feature manipulation services___________Я", 
    	spatialFeatureMatchingService: "Ж_414 Feature matching service_________Я", 
    	spatialFeatureGeneralizationService: "Ж_415 Feature generalisation service___________Я", 
    	spatialRouteDeterminationService: "Ж_416 Route determination service__________Я", 
    	spatialPositioningService: "Ж_417 Positioning service________Я", 
    	spatialProximityAnalysisService: "Ж_418 Proximity analysis service__________Я", 
    	thematicProcessingService: "Ж_500 Geographic processing services - thematic_______________Я",
    	thematicGoparameterCalculationService: "Ж_501 Geoparameter calculation service____________Я", 
    	thematicClassificationService: "Ж_502 Thematic classification service____________Я", 
    	thematicFeatureGeneralizationService: "Ж_503 Feature generalisation service___________Я", 
    	thematicSubsettingService: "Ж_504 Subsetting service________Я", 
    	thematicSpatialCountingService: "Ж_505 Spatial counting service_________Я", 
    	thematicChangeDetectionService: "Ж_506 Change detection service_________Я", 
    	thematicGeographicInformationExtractionService: "Ж_507 Geographic information extraction services_______________Я", 
    	thematicImageProcessingService: "Ж_508 Image processing service_________Я", 
    	thematicReducedResolutionGenerationService: "Ж_509 Reduced resolution generation service_____________Я", 
    	thematicImageManipulationService: "Ж_510 Image Manipulation Services__________Я", 
    	thematicImageUnderstandingService: "Ж_511 Image understanding services___________Я", 
    	thematicImageSynthesisService: "Ж_512 Image synthesis services_________Я", 
    	thematicMultibandImageManipulationService: "Ж_513 Multiband image manipulation___________Я", 
    	thematicObjectDetectionService: "Ж_514 Object detection service_________Я", 
    	thematicGeoparsingService: "Ж_515 Geoparsing service________Я", 
    	thematicGeocodingService: "Ж_516 Geocoding service_______Я", 
    	temporalProcessingService: "Ж_600 Geographic processing services - temporal_______________Я", 
    	temporalReferenceSystemTransformationService: "Ж_601 Temporal reference system transformation service_________________Я", 
    	temporalSubsettingService: "Ж_602 Subsetting service________Я", 
    	temporalSamplingService: "Ж_603 Sampling service_______Я", 
    	temporalProximityAnalysisService: "Ж_604 Temporal proximity analysis service_____________Я", 
    	metadataProcessingService: "Ж_700 Geographic processing services - metadata_______________Я", 
    	metadataStatisticalCalculationService: "Ж_701 Statistical calculation service____________Я", 
    	metadataGeographicAnnotationService: "Ж_702 Geographic annotation services___________Я", 
    	comService: "Ж_800 Geographic communication services____________Я", 
    	comEncodingService: "Ж_801 Encoding service_______Я", 
    	comTransferService: "Ж_802 Transfer service_______Я", 
    	comGeographicCompressionService: "Ж_803 Geographic compression service___________Я", 
    	comGeographicFormatConversionService: "Ж_804 Geographic format conversion service_____________Я", 
    	comMessagingService: "Ж_805 Messaging service_______Я", 
    	comRemoteFileAndExecutableManagement: "Ж_806 Remote file and executable management_____________Я"
    },
    
    useLimitation: {
    	noCondition: "Ж_No conditions apply_______Я",
    	unknownCondition: "Ж_Conditions unknown______Я",
    	freeText: "Ж_Free text____Я"
    }

  })
);
