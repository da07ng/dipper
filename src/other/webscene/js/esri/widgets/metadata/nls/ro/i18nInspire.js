define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Ă_INSPIRE (Data)_____ș",
    		description: ""
    	},
    	service: {
    		caption: "Ă_INSPIRE (Service)______ș",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Ă_Inspire Data Theme______ș"
    },
    
    inspireServiceType: {
      discovery: "Serviciu descoperire",
      view: "Serviciu vizualizare",
      download: "Serviciu descărcare",
      transformation: "Serviciu transformare",
      invoke: "Serviciu invocare",
      other: "Alt serviciu"
    },
    
    keywordSections: {
    	dataTheme: "Ă_Inspire Data Theme______ș",
    	serviceCategory: "Ă_ISO 19119 Service Category_________ș",
    	gemetConcept: "Ă_GEMET Concept_____ș",
    	otherKeywords: "Ă_Other Keywords_____ș"
    },
    
    LanguageCode: {
    	bul: "Ă_Bulgarian____ș",
    	cze: "Ă_Czech___ș",
    	dan: "Ă_Danish___ș",
    	dut: "Ă_Dutch___ș",
    	eng: "Ă_English___ș",
    	est: "Ă_Estonian___ș",
    	fin: "Ă_Finnish___ș",
    	fre: "Ă_French___ș",
    	ger: "Ă_German___ș",
    	gre: "Ă_Greek___ș",
    	hun: "Ă_Hungarian____ș",
    	gle: "Ă_Gaelic (Irish)_____ș",
    	ita: "Ă_Italian___ș",
    	lav: "Ă_Latvian___ș",
    	lit: "Ă_Lithuanian____ș",
    	mlt: "Ă_Maltese___ș",
    	pol: "Ă_Polish___ș", 
    	por: "Ă_Portuguese____ș",
    	rum: "Ă_Romanian___ș",
    	slo: "Ă_Slovak___ș",
    	slv: "Ă_Slovenian____ș",  	
    	spa: "Ă_Spanish___ș",
    	swe: "Ă_Swedish___ș",
    	
    	chi: "Ă_Chinese___ș",
    	kor: "Ă_Korean___ș",
    	nor: "Ă_Norwegian____ș",
    	rus: "Ă_Russian___ș",
    	tur: "Ă_Turkish___ș"
    },
    
    otherConstraints: {
    	noLimitations: "Ă_No limitations_____ș",
    	confidentialityOfProceedings: "Ă_The confidentiality of the proceedings of public authorities____________________ș...",
    	internationalRelations: "Ă_International relations, public security or national defence___________________ș",
    	courseOfJustice: "Ă_The course of justice, the ability of any person to receive a fair trial________________________ș...",
    	confidentialityOfCommercial: "Ă_The confidentiality of commercial or industrial information____________________ș...",
    	intellectualProperty: "Ă_Intellectual property rights_________ș",
    	confidentialityOfPersonalData: "Ă_The confidentiality of personal data and/or files_________________ș...",
    	interestsOrProtection: "Ă_The interests or protection of any person who supplied the information_______________________ș...",
    	protectionOfEnvironment: "Ă_The protection of the environment to which such information relates______________________ș...",
    	freeText: "Ă_Free text____ș"
    },
    
    serviceType: {
    	humanInteractionService: "Ă_100 Geographic human interaction services_____________ș", 
    	humanCatalogueViewer: "Ă_101 Catalogue viewer_______ș", 
    	humanGeographicViewer: "Ă_102 Geographic viewer_______ș", 
    	humanGeographicSpreadsheetViewer: "Ă_103 Geographic spreadsheet viewer___________ș", 
    	humanServiceEditor: "Ă_104 Service editor______ș", 
    	humanChainDefinitionEditor: "Ă_105 Chain definition editor_________ș", 
    	humanWorkflowEnactmentManager: "Ă_106 Workflow enactment manager__________ș",
    	humanGeographicFeatureEditor: "Ă_107 Geographic feature editor__________ș", 
    	humanGeographicSymbolEditor: "Ă_108 Geographic symbol editor__________ș ",
    	humanFeatureGeneralizationEditor: "Ă_109 Feature generalisation editor___________ș", 
    	humanGeographicDataStructureViewer: "Ă_110 Geographic data-structure viewer____________ș", 
    	infoManagementService: "Ă_200 Geographic model/information management service________________ș", 
    	infoFeatureAccessService: "Ă_201 Feature access service_________ș", 
    	infoMapAccessService: "Ă_202 Map access service________ș", 
    	infoCoverageAccessService: "Ă_203 Coverage access service_________ș", 
    	infoSensorDescriptionService: "Ă_204 Sensor description service__________ș", 
    	infoProductAccessService: "Ă_205 Product access service_________ș", 
    	infoFeatureTypeService: "Ă_206 Feature type service________ș", 
    	infoCatalogueService: "Ă_207 Catalogue service_______ș", 
    	infoRegistryService: "Ă_208 Registry Service_______ș", 
    	infoGazetteerService: "Ă_209 Gazetteer service_______ș", 
    	infoOrderHandlingService: "Ă_210 Order handling service_________ș", 
    	infoStandingOrderService: "Ă_211 Standing order service_________ș", 
    	taskManagementService: "Ă_300 Geographic workflow/task management services_______________ș", 
    	chainDefinitionService: "Ă_301 Chain definition service_________ș", 
    	workflowEnactmentService: "Ă_302 Workflow enactment service__________ș", 
    	subscriptionService: "Ă_303 Subscription service________ș", 
    	spatialProcessingService: "Ă_400 Geographic processing services - spatial______________ș", 
    	spatialCoordinateConversionService: "Ă_401 Coordinate conversion service___________ș", 
    	spatialCoordinateTransformationService: "Ă_402 Coordinate transformation service____________ș", 
    	spatialCoverageVectorConversionService: "Ă_403 Coverage/vector conversion service____________ș", 
    	spatialImageCoordinateConversionService: "Ă_404 Image coordinate conversion service_____________ș", 
    	spatialRectificationService: "Ă_405 Rectification service_________ș", 
    	spatialOrthorectificationService: "Ă_406 Orthorectification service__________ș", 
    	spatialSensorGeometryModelAdjustmentService: "Ă_407 Sensor geometry model adjustment service______________ș", 
    	spatialImageGeometryModelConversionService: "Ă_408 Image geometry model conversion service______________ș", 
    	spatialSubsettingService: "Ă_409 Subsetting service________ș", 
    	spatialSamplingService: "Ă_410 Sampling service_______ș", 
    	spatialTilingChangeService: "Ă_411 Tiling change service_________ș", 
    	spatialDimensionMeasurementService: "Ă_412 Dimension measurement service___________ș", 
    	spatialFeatureManipulationService: "Ă_413 Feature manipulation services___________ș", 
    	spatialFeatureMatchingService: "Ă_414 Feature matching service_________ș", 
    	spatialFeatureGeneralizationService: "Ă_415 Feature generalisation service___________ș", 
    	spatialRouteDeterminationService: "Ă_416 Route determination service__________ș", 
    	spatialPositioningService: "Ă_417 Positioning service________ș", 
    	spatialProximityAnalysisService: "Ă_418 Proximity analysis service__________ș", 
    	thematicProcessingService: "Ă_500 Geographic processing services - thematic_______________ș",
    	thematicGoparameterCalculationService: "Ă_501 Geoparameter calculation service____________ș", 
    	thematicClassificationService: "Ă_502 Thematic classification service____________ș", 
    	thematicFeatureGeneralizationService: "Ă_503 Feature generalisation service___________ș", 
    	thematicSubsettingService: "Ă_504 Subsetting service________ș", 
    	thematicSpatialCountingService: "Ă_505 Spatial counting service_________ș", 
    	thematicChangeDetectionService: "Ă_506 Change detection service_________ș", 
    	thematicGeographicInformationExtractionService: "Ă_507 Geographic information extraction services_______________ș", 
    	thematicImageProcessingService: "Ă_508 Image processing service_________ș", 
    	thematicReducedResolutionGenerationService: "Ă_509 Reduced resolution generation service_____________ș", 
    	thematicImageManipulationService: "Ă_510 Image Manipulation Services__________ș", 
    	thematicImageUnderstandingService: "Ă_511 Image understanding services___________ș", 
    	thematicImageSynthesisService: "Ă_512 Image synthesis services_________ș", 
    	thematicMultibandImageManipulationService: "Ă_513 Multiband image manipulation___________ș", 
    	thematicObjectDetectionService: "Ă_514 Object detection service_________ș", 
    	thematicGeoparsingService: "Ă_515 Geoparsing service________ș", 
    	thematicGeocodingService: "Ă_516 Geocoding service_______ș", 
    	temporalProcessingService: "Ă_600 Geographic processing services - temporal_______________ș", 
    	temporalReferenceSystemTransformationService: "Ă_601 Temporal reference system transformation service_________________ș", 
    	temporalSubsettingService: "Ă_602 Subsetting service________ș", 
    	temporalSamplingService: "Ă_603 Sampling service_______ș", 
    	temporalProximityAnalysisService: "Ă_604 Temporal proximity analysis service_____________ș", 
    	metadataProcessingService: "Ă_700 Geographic processing services - metadata_______________ș", 
    	metadataStatisticalCalculationService: "Ă_701 Statistical calculation service____________ș", 
    	metadataGeographicAnnotationService: "Ă_702 Geographic annotation services___________ș", 
    	comService: "Ă_800 Geographic communication services____________ș", 
    	comEncodingService: "Ă_801 Encoding service_______ș", 
    	comTransferService: "Ă_802 Transfer service_______ș", 
    	comGeographicCompressionService: "Ă_803 Geographic compression service___________ș", 
    	comGeographicFormatConversionService: "Ă_804 Geographic format conversion service_____________ș", 
    	comMessagingService: "Ă_805 Messaging service_______ș", 
    	comRemoteFileAndExecutableManagement: "Ă_806 Remote file and executable management_____________ș"
    },
    
    useLimitation: {
    	noCondition: "Ă_No conditions apply_______ș",
    	unknownCondition: "Ă_Conditions unknown______ș",
    	freeText: "Ă_Free text____ș"
    }

  })
);
