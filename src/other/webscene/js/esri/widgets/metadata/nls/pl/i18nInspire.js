define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ł_INSPIRE (Data)_____ą",
    		description: ""
    	},
    	service: {
    		caption: "ł_INSPIRE (Service)______ą",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ł_Inspire Data Theme______ą"
    },
    
    inspireServiceType: {
      discovery: "Usługa odkrywania",
      view: "Usługa przeglądu",
      download: "Usługa pobierania",
      transformation: "Usługa transformacji",
      invoke: "Usługa uruchamiania",
      other: "Inna usługa"
    },
    
    keywordSections: {
    	dataTheme: "ł_Inspire Data Theme______ą",
    	serviceCategory: "ł_ISO 19119 Service Category_________ą",
    	gemetConcept: "ł_GEMET Concept_____ą",
    	otherKeywords: "ł_Other Keywords_____ą"
    },
    
    LanguageCode: {
    	bul: "ł_Bulgarian____ą",
    	cze: "ł_Czech___ą",
    	dan: "ł_Danish___ą",
    	dut: "ł_Dutch___ą",
    	eng: "ł_English___ą",
    	est: "ł_Estonian___ą",
    	fin: "ł_Finnish___ą",
    	fre: "ł_French___ą",
    	ger: "ł_German___ą",
    	gre: "ł_Greek___ą",
    	hun: "ł_Hungarian____ą",
    	gle: "ł_Gaelic (Irish)_____ą",
    	ita: "ł_Italian___ą",
    	lav: "ł_Latvian___ą",
    	lit: "ł_Lithuanian____ą",
    	mlt: "ł_Maltese___ą",
    	pol: "ł_Polish___ą", 
    	por: "ł_Portuguese____ą",
    	rum: "ł_Romanian___ą",
    	slo: "ł_Slovak___ą",
    	slv: "ł_Slovenian____ą",  	
    	spa: "ł_Spanish___ą",
    	swe: "ł_Swedish___ą",
    	
    	chi: "ł_Chinese___ą",
    	kor: "ł_Korean___ą",
    	nor: "ł_Norwegian____ą",
    	rus: "ł_Russian___ą",
    	tur: "ł_Turkish___ą"
    },
    
    otherConstraints: {
    	noLimitations: "ł_No limitations_____ą",
    	confidentialityOfProceedings: "ł_The confidentiality of the proceedings of public authorities____________________ą...",
    	internationalRelations: "ł_International relations, public security or national defence___________________ą",
    	courseOfJustice: "ł_The course of justice, the ability of any person to receive a fair trial________________________ą...",
    	confidentialityOfCommercial: "ł_The confidentiality of commercial or industrial information____________________ą...",
    	intellectualProperty: "ł_Intellectual property rights_________ą",
    	confidentialityOfPersonalData: "ł_The confidentiality of personal data and/or files_________________ą...",
    	interestsOrProtection: "ł_The interests or protection of any person who supplied the information_______________________ą...",
    	protectionOfEnvironment: "ł_The protection of the environment to which such information relates______________________ą...",
    	freeText: "ł_Free text____ą"
    },
    
    serviceType: {
    	humanInteractionService: "ł_100 Geographic human interaction services_____________ą", 
    	humanCatalogueViewer: "ł_101 Catalogue viewer_______ą", 
    	humanGeographicViewer: "ł_102 Geographic viewer_______ą", 
    	humanGeographicSpreadsheetViewer: "ł_103 Geographic spreadsheet viewer___________ą", 
    	humanServiceEditor: "ł_104 Service editor______ą", 
    	humanChainDefinitionEditor: "ł_105 Chain definition editor_________ą", 
    	humanWorkflowEnactmentManager: "ł_106 Workflow enactment manager__________ą",
    	humanGeographicFeatureEditor: "ł_107 Geographic feature editor__________ą", 
    	humanGeographicSymbolEditor: "ł_108 Geographic symbol editor__________ą ",
    	humanFeatureGeneralizationEditor: "ł_109 Feature generalisation editor___________ą", 
    	humanGeographicDataStructureViewer: "ł_110 Geographic data-structure viewer____________ą", 
    	infoManagementService: "ł_200 Geographic model/information management service________________ą", 
    	infoFeatureAccessService: "ł_201 Feature access service_________ą", 
    	infoMapAccessService: "ł_202 Map access service________ą", 
    	infoCoverageAccessService: "ł_203 Coverage access service_________ą", 
    	infoSensorDescriptionService: "ł_204 Sensor description service__________ą", 
    	infoProductAccessService: "ł_205 Product access service_________ą", 
    	infoFeatureTypeService: "ł_206 Feature type service________ą", 
    	infoCatalogueService: "ł_207 Catalogue service_______ą", 
    	infoRegistryService: "ł_208 Registry Service_______ą", 
    	infoGazetteerService: "ł_209 Gazetteer service_______ą", 
    	infoOrderHandlingService: "ł_210 Order handling service_________ą", 
    	infoStandingOrderService: "ł_211 Standing order service_________ą", 
    	taskManagementService: "ł_300 Geographic workflow/task management services_______________ą", 
    	chainDefinitionService: "ł_301 Chain definition service_________ą", 
    	workflowEnactmentService: "ł_302 Workflow enactment service__________ą", 
    	subscriptionService: "ł_303 Subscription service________ą", 
    	spatialProcessingService: "ł_400 Geographic processing services - spatial______________ą", 
    	spatialCoordinateConversionService: "ł_401 Coordinate conversion service___________ą", 
    	spatialCoordinateTransformationService: "ł_402 Coordinate transformation service____________ą", 
    	spatialCoverageVectorConversionService: "ł_403 Coverage/vector conversion service____________ą", 
    	spatialImageCoordinateConversionService: "ł_404 Image coordinate conversion service_____________ą", 
    	spatialRectificationService: "ł_405 Rectification service_________ą", 
    	spatialOrthorectificationService: "ł_406 Orthorectification service__________ą", 
    	spatialSensorGeometryModelAdjustmentService: "ł_407 Sensor geometry model adjustment service______________ą", 
    	spatialImageGeometryModelConversionService: "ł_408 Image geometry model conversion service______________ą", 
    	spatialSubsettingService: "ł_409 Subsetting service________ą", 
    	spatialSamplingService: "ł_410 Sampling service_______ą", 
    	spatialTilingChangeService: "ł_411 Tiling change service_________ą", 
    	spatialDimensionMeasurementService: "ł_412 Dimension measurement service___________ą", 
    	spatialFeatureManipulationService: "ł_413 Feature manipulation services___________ą", 
    	spatialFeatureMatchingService: "ł_414 Feature matching service_________ą", 
    	spatialFeatureGeneralizationService: "ł_415 Feature generalisation service___________ą", 
    	spatialRouteDeterminationService: "ł_416 Route determination service__________ą", 
    	spatialPositioningService: "ł_417 Positioning service________ą", 
    	spatialProximityAnalysisService: "ł_418 Proximity analysis service__________ą", 
    	thematicProcessingService: "ł_500 Geographic processing services - thematic_______________ą",
    	thematicGoparameterCalculationService: "ł_501 Geoparameter calculation service____________ą", 
    	thematicClassificationService: "ł_502 Thematic classification service____________ą", 
    	thematicFeatureGeneralizationService: "ł_503 Feature generalisation service___________ą", 
    	thematicSubsettingService: "ł_504 Subsetting service________ą", 
    	thematicSpatialCountingService: "ł_505 Spatial counting service_________ą", 
    	thematicChangeDetectionService: "ł_506 Change detection service_________ą", 
    	thematicGeographicInformationExtractionService: "ł_507 Geographic information extraction services_______________ą", 
    	thematicImageProcessingService: "ł_508 Image processing service_________ą", 
    	thematicReducedResolutionGenerationService: "ł_509 Reduced resolution generation service_____________ą", 
    	thematicImageManipulationService: "ł_510 Image Manipulation Services__________ą", 
    	thematicImageUnderstandingService: "ł_511 Image understanding services___________ą", 
    	thematicImageSynthesisService: "ł_512 Image synthesis services_________ą", 
    	thematicMultibandImageManipulationService: "ł_513 Multiband image manipulation___________ą", 
    	thematicObjectDetectionService: "ł_514 Object detection service_________ą", 
    	thematicGeoparsingService: "ł_515 Geoparsing service________ą", 
    	thematicGeocodingService: "ł_516 Geocoding service_______ą", 
    	temporalProcessingService: "ł_600 Geographic processing services - temporal_______________ą", 
    	temporalReferenceSystemTransformationService: "ł_601 Temporal reference system transformation service_________________ą", 
    	temporalSubsettingService: "ł_602 Subsetting service________ą", 
    	temporalSamplingService: "ł_603 Sampling service_______ą", 
    	temporalProximityAnalysisService: "ł_604 Temporal proximity analysis service_____________ą", 
    	metadataProcessingService: "ł_700 Geographic processing services - metadata_______________ą", 
    	metadataStatisticalCalculationService: "ł_701 Statistical calculation service____________ą", 
    	metadataGeographicAnnotationService: "ł_702 Geographic annotation services___________ą", 
    	comService: "ł_800 Geographic communication services____________ą", 
    	comEncodingService: "ł_801 Encoding service_______ą", 
    	comTransferService: "ł_802 Transfer service_______ą", 
    	comGeographicCompressionService: "ł_803 Geographic compression service___________ą", 
    	comGeographicFormatConversionService: "ł_804 Geographic format conversion service_____________ą", 
    	comMessagingService: "ł_805 Messaging service_______ą", 
    	comRemoteFileAndExecutableManagement: "ł_806 Remote file and executable management_____________ą"
    },
    
    useLimitation: {
    	noCondition: "ł_No conditions apply_______ą",
    	unknownCondition: "ł_Conditions unknown______ą",
    	freeText: "ł_Free text____ą"
    }

  })
);
