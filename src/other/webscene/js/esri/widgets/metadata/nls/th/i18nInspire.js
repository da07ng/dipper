define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ก้_INSPIRE (Data)_____ษฺ",
    		description: ""
    	},
    	service: {
    		caption: "ก้_INSPIRE (Service)______ษฺ",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ก้_Inspire Data Theme______ษฺ"
    },
    
    inspireServiceType: {
      discovery: "การบริการการค้นคว้า",
      view: "มุมมองการบริการ",
      download: "การบริการดาวโหลด",
      transformation: "การบริการการเปลี่ยนแปลง",
      invoke: "เรียกใช้บริการ",
      other: "บริการอื่นๆ"
    },
    
    keywordSections: {
    	dataTheme: "ก้_Inspire Data Theme______ษฺ",
    	serviceCategory: "ก้_ISO 19119 Service Category_________ษฺ",
    	gemetConcept: "ก้_GEMET Concept_____ษฺ",
    	otherKeywords: "ก้_Other Keywords_____ษฺ"
    },
    
    LanguageCode: {
    	bul: "ก้_Bulgarian____ษฺ",
    	cze: "ก้_Czech___ษฺ",
    	dan: "ก้_Danish___ษฺ",
    	dut: "ก้_Dutch___ษฺ",
    	eng: "ก้_English___ษฺ",
    	est: "ก้_Estonian___ษฺ",
    	fin: "ก้_Finnish___ษฺ",
    	fre: "ก้_French___ษฺ",
    	ger: "ก้_German___ษฺ",
    	gre: "ก้_Greek___ษฺ",
    	hun: "ก้_Hungarian____ษฺ",
    	gle: "ก้_Gaelic (Irish)_____ษฺ",
    	ita: "ก้_Italian___ษฺ",
    	lav: "ก้_Latvian___ษฺ",
    	lit: "ก้_Lithuanian____ษฺ",
    	mlt: "ก้_Maltese___ษฺ",
    	pol: "ก้_Polish___ษฺ", 
    	por: "ก้_Portuguese____ษฺ",
    	rum: "ก้_Romanian___ษฺ",
    	slo: "ก้_Slovak___ษฺ",
    	slv: "ก้_Slovenian____ษฺ",  	
    	spa: "ก้_Spanish___ษฺ",
    	swe: "ก้_Swedish___ษฺ",
    	
    	chi: "ก้_Chinese___ษฺ",
    	kor: "ก้_Korean___ษฺ",
    	nor: "ก้_Norwegian____ษฺ",
    	rus: "ก้_Russian___ษฺ",
    	tur: "ก้_Turkish___ษฺ"
    },
    
    otherConstraints: {
    	noLimitations: "ก้_No limitations_____ษฺ",
    	confidentialityOfProceedings: "ก้_The confidentiality of the proceedings of public authorities____________________ษฺ...",
    	internationalRelations: "ก้_International relations, public security or national defence___________________ษฺ",
    	courseOfJustice: "ก้_The course of justice, the ability of any person to receive a fair trial________________________ษฺ...",
    	confidentialityOfCommercial: "ก้_The confidentiality of commercial or industrial information____________________ษฺ...",
    	intellectualProperty: "ก้_Intellectual property rights_________ษฺ",
    	confidentialityOfPersonalData: "ก้_The confidentiality of personal data and/or files_________________ษฺ...",
    	interestsOrProtection: "ก้_The interests or protection of any person who supplied the information_______________________ษฺ...",
    	protectionOfEnvironment: "ก้_The protection of the environment to which such information relates______________________ษฺ...",
    	freeText: "ก้_Free text____ษฺ"
    },
    
    serviceType: {
    	humanInteractionService: "ก้_100 Geographic human interaction services_____________ษฺ", 
    	humanCatalogueViewer: "ก้_101 Catalogue viewer_______ษฺ", 
    	humanGeographicViewer: "ก้_102 Geographic viewer_______ษฺ", 
    	humanGeographicSpreadsheetViewer: "ก้_103 Geographic spreadsheet viewer___________ษฺ", 
    	humanServiceEditor: "ก้_104 Service editor______ษฺ", 
    	humanChainDefinitionEditor: "ก้_105 Chain definition editor_________ษฺ", 
    	humanWorkflowEnactmentManager: "ก้_106 Workflow enactment manager__________ษฺ",
    	humanGeographicFeatureEditor: "ก้_107 Geographic feature editor__________ษฺ", 
    	humanGeographicSymbolEditor: "ก้_108 Geographic symbol editor__________ษฺ ",
    	humanFeatureGeneralizationEditor: "ก้_109 Feature generalisation editor___________ษฺ", 
    	humanGeographicDataStructureViewer: "ก้_110 Geographic data-structure viewer____________ษฺ", 
    	infoManagementService: "ก้_200 Geographic model/information management service________________ษฺ", 
    	infoFeatureAccessService: "ก้_201 Feature access service_________ษฺ", 
    	infoMapAccessService: "ก้_202 Map access service________ษฺ", 
    	infoCoverageAccessService: "ก้_203 Coverage access service_________ษฺ", 
    	infoSensorDescriptionService: "ก้_204 Sensor description service__________ษฺ", 
    	infoProductAccessService: "ก้_205 Product access service_________ษฺ", 
    	infoFeatureTypeService: "ก้_206 Feature type service________ษฺ", 
    	infoCatalogueService: "ก้_207 Catalogue service_______ษฺ", 
    	infoRegistryService: "ก้_208 Registry Service_______ษฺ", 
    	infoGazetteerService: "ก้_209 Gazetteer service_______ษฺ", 
    	infoOrderHandlingService: "ก้_210 Order handling service_________ษฺ", 
    	infoStandingOrderService: "ก้_211 Standing order service_________ษฺ", 
    	taskManagementService: "ก้_300 Geographic workflow/task management services_______________ษฺ", 
    	chainDefinitionService: "ก้_301 Chain definition service_________ษฺ", 
    	workflowEnactmentService: "ก้_302 Workflow enactment service__________ษฺ", 
    	subscriptionService: "ก้_303 Subscription service________ษฺ", 
    	spatialProcessingService: "ก้_400 Geographic processing services - spatial______________ษฺ", 
    	spatialCoordinateConversionService: "ก้_401 Coordinate conversion service___________ษฺ", 
    	spatialCoordinateTransformationService: "ก้_402 Coordinate transformation service____________ษฺ", 
    	spatialCoverageVectorConversionService: "ก้_403 Coverage/vector conversion service____________ษฺ", 
    	spatialImageCoordinateConversionService: "ก้_404 Image coordinate conversion service_____________ษฺ", 
    	spatialRectificationService: "ก้_405 Rectification service_________ษฺ", 
    	spatialOrthorectificationService: "ก้_406 Orthorectification service__________ษฺ", 
    	spatialSensorGeometryModelAdjustmentService: "ก้_407 Sensor geometry model adjustment service______________ษฺ", 
    	spatialImageGeometryModelConversionService: "ก้_408 Image geometry model conversion service______________ษฺ", 
    	spatialSubsettingService: "ก้_409 Subsetting service________ษฺ", 
    	spatialSamplingService: "ก้_410 Sampling service_______ษฺ", 
    	spatialTilingChangeService: "ก้_411 Tiling change service_________ษฺ", 
    	spatialDimensionMeasurementService: "ก้_412 Dimension measurement service___________ษฺ", 
    	spatialFeatureManipulationService: "ก้_413 Feature manipulation services___________ษฺ", 
    	spatialFeatureMatchingService: "ก้_414 Feature matching service_________ษฺ", 
    	spatialFeatureGeneralizationService: "ก้_415 Feature generalisation service___________ษฺ", 
    	spatialRouteDeterminationService: "ก้_416 Route determination service__________ษฺ", 
    	spatialPositioningService: "ก้_417 Positioning service________ษฺ", 
    	spatialProximityAnalysisService: "ก้_418 Proximity analysis service__________ษฺ", 
    	thematicProcessingService: "ก้_500 Geographic processing services - thematic_______________ษฺ",
    	thematicGoparameterCalculationService: "ก้_501 Geoparameter calculation service____________ษฺ", 
    	thematicClassificationService: "ก้_502 Thematic classification service____________ษฺ", 
    	thematicFeatureGeneralizationService: "ก้_503 Feature generalisation service___________ษฺ", 
    	thematicSubsettingService: "ก้_504 Subsetting service________ษฺ", 
    	thematicSpatialCountingService: "ก้_505 Spatial counting service_________ษฺ", 
    	thematicChangeDetectionService: "ก้_506 Change detection service_________ษฺ", 
    	thematicGeographicInformationExtractionService: "ก้_507 Geographic information extraction services_______________ษฺ", 
    	thematicImageProcessingService: "ก้_508 Image processing service_________ษฺ", 
    	thematicReducedResolutionGenerationService: "ก้_509 Reduced resolution generation service_____________ษฺ", 
    	thematicImageManipulationService: "ก้_510 Image Manipulation Services__________ษฺ", 
    	thematicImageUnderstandingService: "ก้_511 Image understanding services___________ษฺ", 
    	thematicImageSynthesisService: "ก้_512 Image synthesis services_________ษฺ", 
    	thematicMultibandImageManipulationService: "ก้_513 Multiband image manipulation___________ษฺ", 
    	thematicObjectDetectionService: "ก้_514 Object detection service_________ษฺ", 
    	thematicGeoparsingService: "ก้_515 Geoparsing service________ษฺ", 
    	thematicGeocodingService: "ก้_516 Geocoding service_______ษฺ", 
    	temporalProcessingService: "ก้_600 Geographic processing services - temporal_______________ษฺ", 
    	temporalReferenceSystemTransformationService: "ก้_601 Temporal reference system transformation service_________________ษฺ", 
    	temporalSubsettingService: "ก้_602 Subsetting service________ษฺ", 
    	temporalSamplingService: "ก้_603 Sampling service_______ษฺ", 
    	temporalProximityAnalysisService: "ก้_604 Temporal proximity analysis service_____________ษฺ", 
    	metadataProcessingService: "ก้_700 Geographic processing services - metadata_______________ษฺ", 
    	metadataStatisticalCalculationService: "ก้_701 Statistical calculation service____________ษฺ", 
    	metadataGeographicAnnotationService: "ก้_702 Geographic annotation services___________ษฺ", 
    	comService: "ก้_800 Geographic communication services____________ษฺ", 
    	comEncodingService: "ก้_801 Encoding service_______ษฺ", 
    	comTransferService: "ก้_802 Transfer service_______ษฺ", 
    	comGeographicCompressionService: "ก้_803 Geographic compression service___________ษฺ", 
    	comGeographicFormatConversionService: "ก้_804 Geographic format conversion service_____________ษฺ", 
    	comMessagingService: "ก้_805 Messaging service_______ษฺ", 
    	comRemoteFileAndExecutableManagement: "ก้_806 Remote file and executable management_____________ษฺ"
    },
    
    useLimitation: {
    	noCondition: "ก้_No conditions apply_______ษฺ",
    	unknownCondition: "ก้_Conditions unknown______ษฺ",
    	freeText: "ก้_Free text____ษฺ"
    }

  })
);
