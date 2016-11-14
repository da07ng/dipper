define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Ĳ_INSPIRE (Data)_____ä",
    		description: ""
    	},
    	service: {
    		caption: "Ĳ_INSPIRE (Service)______ä",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Ĳ_Inspire Data Theme______ä"
    },
    
    inspireServiceType: {
      discovery: "Discovery Service",
      view: "Service weergeven",
      download: "Service downloaden",
      transformation: "Transformatieservice",
      invoke: "Service oproepen",
      other: "Overige service"
    },
    
    keywordSections: {
    	dataTheme: "Ĳ_Inspire Data Theme______ä",
    	serviceCategory: "Ĳ_ISO 19119 Service Category_________ä",
    	gemetConcept: "Ĳ_GEMET Concept_____ä",
    	otherKeywords: "Ĳ_Other Keywords_____ä"
    },
    
    LanguageCode: {
    	bul: "Ĳ_Bulgarian____ä",
    	cze: "Ĳ_Czech___ä",
    	dan: "Ĳ_Danish___ä",
    	dut: "Ĳ_Dutch___ä",
    	eng: "Ĳ_English___ä",
    	est: "Ĳ_Estonian___ä",
    	fin: "Ĳ_Finnish___ä",
    	fre: "Ĳ_French___ä",
    	ger: "Ĳ_German___ä",
    	gre: "Ĳ_Greek___ä",
    	hun: "Ĳ_Hungarian____ä",
    	gle: "Ĳ_Gaelic (Irish)_____ä",
    	ita: "Ĳ_Italian___ä",
    	lav: "Ĳ_Latvian___ä",
    	lit: "Ĳ_Lithuanian____ä",
    	mlt: "Ĳ_Maltese___ä",
    	pol: "Ĳ_Polish___ä", 
    	por: "Ĳ_Portuguese____ä",
    	rum: "Ĳ_Romanian___ä",
    	slo: "Ĳ_Slovak___ä",
    	slv: "Ĳ_Slovenian____ä",  	
    	spa: "Ĳ_Spanish___ä",
    	swe: "Ĳ_Swedish___ä",
    	
    	chi: "Ĳ_Chinese___ä",
    	kor: "Ĳ_Korean___ä",
    	nor: "Ĳ_Norwegian____ä",
    	rus: "Ĳ_Russian___ä",
    	tur: "Ĳ_Turkish___ä"
    },
    
    otherConstraints: {
    	noLimitations: "Ĳ_No limitations_____ä",
    	confidentialityOfProceedings: "Ĳ_The confidentiality of the proceedings of public authorities____________________ä...",
    	internationalRelations: "Ĳ_International relations, public security or national defence___________________ä",
    	courseOfJustice: "Ĳ_The course of justice, the ability of any person to receive a fair trial________________________ä...",
    	confidentialityOfCommercial: "Ĳ_The confidentiality of commercial or industrial information____________________ä...",
    	intellectualProperty: "Ĳ_Intellectual property rights_________ä",
    	confidentialityOfPersonalData: "Ĳ_The confidentiality of personal data and/or files_________________ä...",
    	interestsOrProtection: "Ĳ_The interests or protection of any person who supplied the information_______________________ä...",
    	protectionOfEnvironment: "Ĳ_The protection of the environment to which such information relates______________________ä...",
    	freeText: "Ĳ_Free text____ä"
    },
    
    serviceType: {
    	humanInteractionService: "Ĳ_100 Geographic human interaction services_____________ä", 
    	humanCatalogueViewer: "Ĳ_101 Catalogue viewer_______ä", 
    	humanGeographicViewer: "Ĳ_102 Geographic viewer_______ä", 
    	humanGeographicSpreadsheetViewer: "Ĳ_103 Geographic spreadsheet viewer___________ä", 
    	humanServiceEditor: "Ĳ_104 Service editor______ä", 
    	humanChainDefinitionEditor: "Ĳ_105 Chain definition editor_________ä", 
    	humanWorkflowEnactmentManager: "Ĳ_106 Workflow enactment manager__________ä",
    	humanGeographicFeatureEditor: "Ĳ_107 Geographic feature editor__________ä", 
    	humanGeographicSymbolEditor: "Ĳ_108 Geographic symbol editor__________ä ",
    	humanFeatureGeneralizationEditor: "Ĳ_109 Feature generalisation editor___________ä", 
    	humanGeographicDataStructureViewer: "Ĳ_110 Geographic data-structure viewer____________ä", 
    	infoManagementService: "Ĳ_200 Geographic model/information management service________________ä", 
    	infoFeatureAccessService: "Ĳ_201 Feature access service_________ä", 
    	infoMapAccessService: "Ĳ_202 Map access service________ä", 
    	infoCoverageAccessService: "Ĳ_203 Coverage access service_________ä", 
    	infoSensorDescriptionService: "Ĳ_204 Sensor description service__________ä", 
    	infoProductAccessService: "Ĳ_205 Product access service_________ä", 
    	infoFeatureTypeService: "Ĳ_206 Feature type service________ä", 
    	infoCatalogueService: "Ĳ_207 Catalogue service_______ä", 
    	infoRegistryService: "Ĳ_208 Registry Service_______ä", 
    	infoGazetteerService: "Ĳ_209 Gazetteer service_______ä", 
    	infoOrderHandlingService: "Ĳ_210 Order handling service_________ä", 
    	infoStandingOrderService: "Ĳ_211 Standing order service_________ä", 
    	taskManagementService: "Ĳ_300 Geographic workflow/task management services_______________ä", 
    	chainDefinitionService: "Ĳ_301 Chain definition service_________ä", 
    	workflowEnactmentService: "Ĳ_302 Workflow enactment service__________ä", 
    	subscriptionService: "Ĳ_303 Subscription service________ä", 
    	spatialProcessingService: "Ĳ_400 Geographic processing services - spatial______________ä", 
    	spatialCoordinateConversionService: "Ĳ_401 Coordinate conversion service___________ä", 
    	spatialCoordinateTransformationService: "Ĳ_402 Coordinate transformation service____________ä", 
    	spatialCoverageVectorConversionService: "Ĳ_403 Coverage/vector conversion service____________ä", 
    	spatialImageCoordinateConversionService: "Ĳ_404 Image coordinate conversion service_____________ä", 
    	spatialRectificationService: "Ĳ_405 Rectification service_________ä", 
    	spatialOrthorectificationService: "Ĳ_406 Orthorectification service__________ä", 
    	spatialSensorGeometryModelAdjustmentService: "Ĳ_407 Sensor geometry model adjustment service______________ä", 
    	spatialImageGeometryModelConversionService: "Ĳ_408 Image geometry model conversion service______________ä", 
    	spatialSubsettingService: "Ĳ_409 Subsetting service________ä", 
    	spatialSamplingService: "Ĳ_410 Sampling service_______ä", 
    	spatialTilingChangeService: "Ĳ_411 Tiling change service_________ä", 
    	spatialDimensionMeasurementService: "Ĳ_412 Dimension measurement service___________ä", 
    	spatialFeatureManipulationService: "Ĳ_413 Feature manipulation services___________ä", 
    	spatialFeatureMatchingService: "Ĳ_414 Feature matching service_________ä", 
    	spatialFeatureGeneralizationService: "Ĳ_415 Feature generalisation service___________ä", 
    	spatialRouteDeterminationService: "Ĳ_416 Route determination service__________ä", 
    	spatialPositioningService: "Ĳ_417 Positioning service________ä", 
    	spatialProximityAnalysisService: "Ĳ_418 Proximity analysis service__________ä", 
    	thematicProcessingService: "Ĳ_500 Geographic processing services - thematic_______________ä",
    	thematicGoparameterCalculationService: "Ĳ_501 Geoparameter calculation service____________ä", 
    	thematicClassificationService: "Ĳ_502 Thematic classification service____________ä", 
    	thematicFeatureGeneralizationService: "Ĳ_503 Feature generalisation service___________ä", 
    	thematicSubsettingService: "Ĳ_504 Subsetting service________ä", 
    	thematicSpatialCountingService: "Ĳ_505 Spatial counting service_________ä", 
    	thematicChangeDetectionService: "Ĳ_506 Change detection service_________ä", 
    	thematicGeographicInformationExtractionService: "Ĳ_507 Geographic information extraction services_______________ä", 
    	thematicImageProcessingService: "Ĳ_508 Image processing service_________ä", 
    	thematicReducedResolutionGenerationService: "Ĳ_509 Reduced resolution generation service_____________ä", 
    	thematicImageManipulationService: "Ĳ_510 Image Manipulation Services__________ä", 
    	thematicImageUnderstandingService: "Ĳ_511 Image understanding services___________ä", 
    	thematicImageSynthesisService: "Ĳ_512 Image synthesis services_________ä", 
    	thematicMultibandImageManipulationService: "Ĳ_513 Multiband image manipulation___________ä", 
    	thematicObjectDetectionService: "Ĳ_514 Object detection service_________ä", 
    	thematicGeoparsingService: "Ĳ_515 Geoparsing service________ä", 
    	thematicGeocodingService: "Ĳ_516 Geocoding service_______ä", 
    	temporalProcessingService: "Ĳ_600 Geographic processing services - temporal_______________ä", 
    	temporalReferenceSystemTransformationService: "Ĳ_601 Temporal reference system transformation service_________________ä", 
    	temporalSubsettingService: "Ĳ_602 Subsetting service________ä", 
    	temporalSamplingService: "Ĳ_603 Sampling service_______ä", 
    	temporalProximityAnalysisService: "Ĳ_604 Temporal proximity analysis service_____________ä", 
    	metadataProcessingService: "Ĳ_700 Geographic processing services - metadata_______________ä", 
    	metadataStatisticalCalculationService: "Ĳ_701 Statistical calculation service____________ä", 
    	metadataGeographicAnnotationService: "Ĳ_702 Geographic annotation services___________ä", 
    	comService: "Ĳ_800 Geographic communication services____________ä", 
    	comEncodingService: "Ĳ_801 Encoding service_______ä", 
    	comTransferService: "Ĳ_802 Transfer service_______ä", 
    	comGeographicCompressionService: "Ĳ_803 Geographic compression service___________ä", 
    	comGeographicFormatConversionService: "Ĳ_804 Geographic format conversion service_____________ä", 
    	comMessagingService: "Ĳ_805 Messaging service_______ä", 
    	comRemoteFileAndExecutableManagement: "Ĳ_806 Remote file and executable management_____________ä"
    },
    
    useLimitation: {
    	noCondition: "Ĳ_No conditions apply_______ä",
    	unknownCondition: "Ĳ_Conditions unknown______ä",
    	freeText: "Ĳ_Free text____ä"
    }

  })
);
