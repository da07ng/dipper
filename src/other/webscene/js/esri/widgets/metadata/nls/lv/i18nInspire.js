define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ķ_INSPIRE (Data)_____ū",
    		description: ""
    	},
    	service: {
    		caption: "ķ_INSPIRE (Service)______ū",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ķ_Inspire Data Theme______ū"
    },
    
    inspireServiceType: {
      discovery: "Atklāšanas serviss",
      view: "Skatīšanas serviss",
      download: "Lejupielādes serviss",
      transformation: "Transformācijas serviss",
      invoke: "Izsaukšanas serviss",
      other: "Cits serviss"
    },
    
    keywordSections: {
    	dataTheme: "ķ_Inspire Data Theme______ū",
    	serviceCategory: "ķ_ISO 19119 Service Category_________ū",
    	gemetConcept: "ķ_GEMET Concept_____ū",
    	otherKeywords: "ķ_Other Keywords_____ū"
    },
    
    LanguageCode: {
    	bul: "ķ_Bulgarian____ū",
    	cze: "ķ_Czech___ū",
    	dan: "ķ_Danish___ū",
    	dut: "ķ_Dutch___ū",
    	eng: "ķ_English___ū",
    	est: "ķ_Estonian___ū",
    	fin: "ķ_Finnish___ū",
    	fre: "ķ_French___ū",
    	ger: "ķ_German___ū",
    	gre: "ķ_Greek___ū",
    	hun: "ķ_Hungarian____ū",
    	gle: "ķ_Gaelic (Irish)_____ū",
    	ita: "ķ_Italian___ū",
    	lav: "ķ_Latvian___ū",
    	lit: "ķ_Lithuanian____ū",
    	mlt: "ķ_Maltese___ū",
    	pol: "ķ_Polish___ū", 
    	por: "ķ_Portuguese____ū",
    	rum: "ķ_Romanian___ū",
    	slo: "ķ_Slovak___ū",
    	slv: "ķ_Slovenian____ū",  	
    	spa: "ķ_Spanish___ū",
    	swe: "ķ_Swedish___ū",
    	
    	chi: "ķ_Chinese___ū",
    	kor: "ķ_Korean___ū",
    	nor: "ķ_Norwegian____ū",
    	rus: "ķ_Russian___ū",
    	tur: "ķ_Turkish___ū"
    },
    
    otherConstraints: {
    	noLimitations: "ķ_No limitations_____ū",
    	confidentialityOfProceedings: "ķ_The confidentiality of the proceedings of public authorities____________________ū...",
    	internationalRelations: "ķ_International relations, public security or national defence___________________ū",
    	courseOfJustice: "ķ_The course of justice, the ability of any person to receive a fair trial________________________ū...",
    	confidentialityOfCommercial: "ķ_The confidentiality of commercial or industrial information____________________ū...",
    	intellectualProperty: "ķ_Intellectual property rights_________ū",
    	confidentialityOfPersonalData: "ķ_The confidentiality of personal data and/or files_________________ū...",
    	interestsOrProtection: "ķ_The interests or protection of any person who supplied the information_______________________ū...",
    	protectionOfEnvironment: "ķ_The protection of the environment to which such information relates______________________ū...",
    	freeText: "ķ_Free text____ū"
    },
    
    serviceType: {
    	humanInteractionService: "ķ_100 Geographic human interaction services_____________ū", 
    	humanCatalogueViewer: "ķ_101 Catalogue viewer_______ū", 
    	humanGeographicViewer: "ķ_102 Geographic viewer_______ū", 
    	humanGeographicSpreadsheetViewer: "ķ_103 Geographic spreadsheet viewer___________ū", 
    	humanServiceEditor: "ķ_104 Service editor______ū", 
    	humanChainDefinitionEditor: "ķ_105 Chain definition editor_________ū", 
    	humanWorkflowEnactmentManager: "ķ_106 Workflow enactment manager__________ū",
    	humanGeographicFeatureEditor: "ķ_107 Geographic feature editor__________ū", 
    	humanGeographicSymbolEditor: "ķ_108 Geographic symbol editor__________ū ",
    	humanFeatureGeneralizationEditor: "ķ_109 Feature generalisation editor___________ū", 
    	humanGeographicDataStructureViewer: "ķ_110 Geographic data-structure viewer____________ū", 
    	infoManagementService: "ķ_200 Geographic model/information management service________________ū", 
    	infoFeatureAccessService: "ķ_201 Feature access service_________ū", 
    	infoMapAccessService: "ķ_202 Map access service________ū", 
    	infoCoverageAccessService: "ķ_203 Coverage access service_________ū", 
    	infoSensorDescriptionService: "ķ_204 Sensor description service__________ū", 
    	infoProductAccessService: "ķ_205 Product access service_________ū", 
    	infoFeatureTypeService: "ķ_206 Feature type service________ū", 
    	infoCatalogueService: "ķ_207 Catalogue service_______ū", 
    	infoRegistryService: "ķ_208 Registry Service_______ū", 
    	infoGazetteerService: "ķ_209 Gazetteer service_______ū", 
    	infoOrderHandlingService: "ķ_210 Order handling service_________ū", 
    	infoStandingOrderService: "ķ_211 Standing order service_________ū", 
    	taskManagementService: "ķ_300 Geographic workflow/task management services_______________ū", 
    	chainDefinitionService: "ķ_301 Chain definition service_________ū", 
    	workflowEnactmentService: "ķ_302 Workflow enactment service__________ū", 
    	subscriptionService: "ķ_303 Subscription service________ū", 
    	spatialProcessingService: "ķ_400 Geographic processing services - spatial______________ū", 
    	spatialCoordinateConversionService: "ķ_401 Coordinate conversion service___________ū", 
    	spatialCoordinateTransformationService: "ķ_402 Coordinate transformation service____________ū", 
    	spatialCoverageVectorConversionService: "ķ_403 Coverage/vector conversion service____________ū", 
    	spatialImageCoordinateConversionService: "ķ_404 Image coordinate conversion service_____________ū", 
    	spatialRectificationService: "ķ_405 Rectification service_________ū", 
    	spatialOrthorectificationService: "ķ_406 Orthorectification service__________ū", 
    	spatialSensorGeometryModelAdjustmentService: "ķ_407 Sensor geometry model adjustment service______________ū", 
    	spatialImageGeometryModelConversionService: "ķ_408 Image geometry model conversion service______________ū", 
    	spatialSubsettingService: "ķ_409 Subsetting service________ū", 
    	spatialSamplingService: "ķ_410 Sampling service_______ū", 
    	spatialTilingChangeService: "ķ_411 Tiling change service_________ū", 
    	spatialDimensionMeasurementService: "ķ_412 Dimension measurement service___________ū", 
    	spatialFeatureManipulationService: "ķ_413 Feature manipulation services___________ū", 
    	spatialFeatureMatchingService: "ķ_414 Feature matching service_________ū", 
    	spatialFeatureGeneralizationService: "ķ_415 Feature generalisation service___________ū", 
    	spatialRouteDeterminationService: "ķ_416 Route determination service__________ū", 
    	spatialPositioningService: "ķ_417 Positioning service________ū", 
    	spatialProximityAnalysisService: "ķ_418 Proximity analysis service__________ū", 
    	thematicProcessingService: "ķ_500 Geographic processing services - thematic_______________ū",
    	thematicGoparameterCalculationService: "ķ_501 Geoparameter calculation service____________ū", 
    	thematicClassificationService: "ķ_502 Thematic classification service____________ū", 
    	thematicFeatureGeneralizationService: "ķ_503 Feature generalisation service___________ū", 
    	thematicSubsettingService: "ķ_504 Subsetting service________ū", 
    	thematicSpatialCountingService: "ķ_505 Spatial counting service_________ū", 
    	thematicChangeDetectionService: "ķ_506 Change detection service_________ū", 
    	thematicGeographicInformationExtractionService: "ķ_507 Geographic information extraction services_______________ū", 
    	thematicImageProcessingService: "ķ_508 Image processing service_________ū", 
    	thematicReducedResolutionGenerationService: "ķ_509 Reduced resolution generation service_____________ū", 
    	thematicImageManipulationService: "ķ_510 Image Manipulation Services__________ū", 
    	thematicImageUnderstandingService: "ķ_511 Image understanding services___________ū", 
    	thematicImageSynthesisService: "ķ_512 Image synthesis services_________ū", 
    	thematicMultibandImageManipulationService: "ķ_513 Multiband image manipulation___________ū", 
    	thematicObjectDetectionService: "ķ_514 Object detection service_________ū", 
    	thematicGeoparsingService: "ķ_515 Geoparsing service________ū", 
    	thematicGeocodingService: "ķ_516 Geocoding service_______ū", 
    	temporalProcessingService: "ķ_600 Geographic processing services - temporal_______________ū", 
    	temporalReferenceSystemTransformationService: "ķ_601 Temporal reference system transformation service_________________ū", 
    	temporalSubsettingService: "ķ_602 Subsetting service________ū", 
    	temporalSamplingService: "ķ_603 Sampling service_______ū", 
    	temporalProximityAnalysisService: "ķ_604 Temporal proximity analysis service_____________ū", 
    	metadataProcessingService: "ķ_700 Geographic processing services - metadata_______________ū", 
    	metadataStatisticalCalculationService: "ķ_701 Statistical calculation service____________ū", 
    	metadataGeographicAnnotationService: "ķ_702 Geographic annotation services___________ū", 
    	comService: "ķ_800 Geographic communication services____________ū", 
    	comEncodingService: "ķ_801 Encoding service_______ū", 
    	comTransferService: "ķ_802 Transfer service_______ū", 
    	comGeographicCompressionService: "ķ_803 Geographic compression service___________ū", 
    	comGeographicFormatConversionService: "ķ_804 Geographic format conversion service_____________ū", 
    	comMessagingService: "ķ_805 Messaging service_______ū", 
    	comRemoteFileAndExecutableManagement: "ķ_806 Remote file and executable management_____________ū"
    },
    
    useLimitation: {
    	noCondition: "ķ_No conditions apply_______ū",
    	unknownCondition: "ķ_Conditions unknown______ū",
    	freeText: "ķ_Free text____ū"
    }

  })
);
