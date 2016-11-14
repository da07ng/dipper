define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Ř_INSPIRE (Data)_____ů",
    		description: ""
    	},
    	service: {
    		caption: "Ř_INSPIRE (Service)______ů",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Ř_Inspire Data Theme______ů"
    },
    
    inspireServiceType: {
      discovery: "Sužba Discovery",
      view: "Zobrazit službu",
      download: "Stáhnout službu",
      transformation: "Transformační služba",
      invoke: "Vyvolat službu",
      other: "Jiná služba"
    },
    
    keywordSections: {
    	dataTheme: "Ř_Inspire Data Theme______ů",
    	serviceCategory: "Ř_ISO 19119 Service Category_________ů",
    	gemetConcept: "Ř_GEMET Concept_____ů",
    	otherKeywords: "Ř_Other Keywords_____ů"
    },
    
    LanguageCode: {
    	bul: "Ř_Bulgarian____ů",
    	cze: "Ř_Czech___ů",
    	dan: "Ř_Danish___ů",
    	dut: "Ř_Dutch___ů",
    	eng: "Ř_English___ů",
    	est: "Ř_Estonian___ů",
    	fin: "Ř_Finnish___ů",
    	fre: "Ř_French___ů",
    	ger: "Ř_German___ů",
    	gre: "Ř_Greek___ů",
    	hun: "Ř_Hungarian____ů",
    	gle: "Ř_Gaelic (Irish)_____ů",
    	ita: "Ř_Italian___ů",
    	lav: "Ř_Latvian___ů",
    	lit: "Ř_Lithuanian____ů",
    	mlt: "Ř_Maltese___ů",
    	pol: "Ř_Polish___ů", 
    	por: "Ř_Portuguese____ů",
    	rum: "Ř_Romanian___ů",
    	slo: "Ř_Slovak___ů",
    	slv: "Ř_Slovenian____ů",  	
    	spa: "Ř_Spanish___ů",
    	swe: "Ř_Swedish___ů",
    	
    	chi: "Ř_Chinese___ů",
    	kor: "Ř_Korean___ů",
    	nor: "Ř_Norwegian____ů",
    	rus: "Ř_Russian___ů",
    	tur: "Ř_Turkish___ů"
    },
    
    otherConstraints: {
    	noLimitations: "Ř_No limitations_____ů",
    	confidentialityOfProceedings: "Ř_The confidentiality of the proceedings of public authorities____________________ů...",
    	internationalRelations: "Ř_International relations, public security or national defence___________________ů",
    	courseOfJustice: "Ř_The course of justice, the ability of any person to receive a fair trial________________________ů...",
    	confidentialityOfCommercial: "Ř_The confidentiality of commercial or industrial information____________________ů...",
    	intellectualProperty: "Ř_Intellectual property rights_________ů",
    	confidentialityOfPersonalData: "Ř_The confidentiality of personal data and/or files_________________ů...",
    	interestsOrProtection: "Ř_The interests or protection of any person who supplied the information_______________________ů...",
    	protectionOfEnvironment: "Ř_The protection of the environment to which such information relates______________________ů...",
    	freeText: "Ř_Free text____ů"
    },
    
    serviceType: {
    	humanInteractionService: "Ř_100 Geographic human interaction services_____________ů", 
    	humanCatalogueViewer: "Ř_101 Catalogue viewer_______ů", 
    	humanGeographicViewer: "Ř_102 Geographic viewer_______ů", 
    	humanGeographicSpreadsheetViewer: "Ř_103 Geographic spreadsheet viewer___________ů", 
    	humanServiceEditor: "Ř_104 Service editor______ů", 
    	humanChainDefinitionEditor: "Ř_105 Chain definition editor_________ů", 
    	humanWorkflowEnactmentManager: "Ř_106 Workflow enactment manager__________ů",
    	humanGeographicFeatureEditor: "Ř_107 Geographic feature editor__________ů", 
    	humanGeographicSymbolEditor: "Ř_108 Geographic symbol editor__________ů ",
    	humanFeatureGeneralizationEditor: "Ř_109 Feature generalisation editor___________ů", 
    	humanGeographicDataStructureViewer: "Ř_110 Geographic data-structure viewer____________ů", 
    	infoManagementService: "Ř_200 Geographic model/information management service________________ů", 
    	infoFeatureAccessService: "Ř_201 Feature access service_________ů", 
    	infoMapAccessService: "Ř_202 Map access service________ů", 
    	infoCoverageAccessService: "Ř_203 Coverage access service_________ů", 
    	infoSensorDescriptionService: "Ř_204 Sensor description service__________ů", 
    	infoProductAccessService: "Ř_205 Product access service_________ů", 
    	infoFeatureTypeService: "Ř_206 Feature type service________ů", 
    	infoCatalogueService: "Ř_207 Catalogue service_______ů", 
    	infoRegistryService: "Ř_208 Registry Service_______ů", 
    	infoGazetteerService: "Ř_209 Gazetteer service_______ů", 
    	infoOrderHandlingService: "Ř_210 Order handling service_________ů", 
    	infoStandingOrderService: "Ř_211 Standing order service_________ů", 
    	taskManagementService: "Ř_300 Geographic workflow/task management services_______________ů", 
    	chainDefinitionService: "Ř_301 Chain definition service_________ů", 
    	workflowEnactmentService: "Ř_302 Workflow enactment service__________ů", 
    	subscriptionService: "Ř_303 Subscription service________ů", 
    	spatialProcessingService: "Ř_400 Geographic processing services - spatial______________ů", 
    	spatialCoordinateConversionService: "Ř_401 Coordinate conversion service___________ů", 
    	spatialCoordinateTransformationService: "Ř_402 Coordinate transformation service____________ů", 
    	spatialCoverageVectorConversionService: "Ř_403 Coverage/vector conversion service____________ů", 
    	spatialImageCoordinateConversionService: "Ř_404 Image coordinate conversion service_____________ů", 
    	spatialRectificationService: "Ř_405 Rectification service_________ů", 
    	spatialOrthorectificationService: "Ř_406 Orthorectification service__________ů", 
    	spatialSensorGeometryModelAdjustmentService: "Ř_407 Sensor geometry model adjustment service______________ů", 
    	spatialImageGeometryModelConversionService: "Ř_408 Image geometry model conversion service______________ů", 
    	spatialSubsettingService: "Ř_409 Subsetting service________ů", 
    	spatialSamplingService: "Ř_410 Sampling service_______ů", 
    	spatialTilingChangeService: "Ř_411 Tiling change service_________ů", 
    	spatialDimensionMeasurementService: "Ř_412 Dimension measurement service___________ů", 
    	spatialFeatureManipulationService: "Ř_413 Feature manipulation services___________ů", 
    	spatialFeatureMatchingService: "Ř_414 Feature matching service_________ů", 
    	spatialFeatureGeneralizationService: "Ř_415 Feature generalisation service___________ů", 
    	spatialRouteDeterminationService: "Ř_416 Route determination service__________ů", 
    	spatialPositioningService: "Ř_417 Positioning service________ů", 
    	spatialProximityAnalysisService: "Ř_418 Proximity analysis service__________ů", 
    	thematicProcessingService: "Ř_500 Geographic processing services - thematic_______________ů",
    	thematicGoparameterCalculationService: "Ř_501 Geoparameter calculation service____________ů", 
    	thematicClassificationService: "Ř_502 Thematic classification service____________ů", 
    	thematicFeatureGeneralizationService: "Ř_503 Feature generalisation service___________ů", 
    	thematicSubsettingService: "Ř_504 Subsetting service________ů", 
    	thematicSpatialCountingService: "Ř_505 Spatial counting service_________ů", 
    	thematicChangeDetectionService: "Ř_506 Change detection service_________ů", 
    	thematicGeographicInformationExtractionService: "Ř_507 Geographic information extraction services_______________ů", 
    	thematicImageProcessingService: "Ř_508 Image processing service_________ů", 
    	thematicReducedResolutionGenerationService: "Ř_509 Reduced resolution generation service_____________ů", 
    	thematicImageManipulationService: "Ř_510 Image Manipulation Services__________ů", 
    	thematicImageUnderstandingService: "Ř_511 Image understanding services___________ů", 
    	thematicImageSynthesisService: "Ř_512 Image synthesis services_________ů", 
    	thematicMultibandImageManipulationService: "Ř_513 Multiband image manipulation___________ů", 
    	thematicObjectDetectionService: "Ř_514 Object detection service_________ů", 
    	thematicGeoparsingService: "Ř_515 Geoparsing service________ů", 
    	thematicGeocodingService: "Ř_516 Geocoding service_______ů", 
    	temporalProcessingService: "Ř_600 Geographic processing services - temporal_______________ů", 
    	temporalReferenceSystemTransformationService: "Ř_601 Temporal reference system transformation service_________________ů", 
    	temporalSubsettingService: "Ř_602 Subsetting service________ů", 
    	temporalSamplingService: "Ř_603 Sampling service_______ů", 
    	temporalProximityAnalysisService: "Ř_604 Temporal proximity analysis service_____________ů", 
    	metadataProcessingService: "Ř_700 Geographic processing services - metadata_______________ů", 
    	metadataStatisticalCalculationService: "Ř_701 Statistical calculation service____________ů", 
    	metadataGeographicAnnotationService: "Ř_702 Geographic annotation services___________ů", 
    	comService: "Ř_800 Geographic communication services____________ů", 
    	comEncodingService: "Ř_801 Encoding service_______ů", 
    	comTransferService: "Ř_802 Transfer service_______ů", 
    	comGeographicCompressionService: "Ř_803 Geographic compression service___________ů", 
    	comGeographicFormatConversionService: "Ř_804 Geographic format conversion service_____________ů", 
    	comMessagingService: "Ř_805 Messaging service_______ů", 
    	comRemoteFileAndExecutableManagement: "Ř_806 Remote file and executable management_____________ů"
    },
    
    useLimitation: {
    	noCondition: "Ř_No conditions apply_______ů",
    	unknownCondition: "Ř_Conditions unknown______ů",
    	freeText: "Ř_Free text____ů"
    }

  })
);
