define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "æ_INSPIRE (Data)_____Â",
    		description: ""
    	},
    	service: {
    		caption: "æ_INSPIRE (Service)______Â",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "æ_Inspire Data Theme______Â"
    },
    
    inspireServiceType: {
      discovery: "Services de découverte",
      view: "Service d\'affichage",
      download: "Service de téléchargement",
      transformation: "Service de transformation",
      invoke: "Service d\'invocation",
      other: "Autre service"
    },
    
    keywordSections: {
    	dataTheme: "æ_Inspire Data Theme______Â",
    	serviceCategory: "æ_ISO 19119 Service Category_________Â",
    	gemetConcept: "æ_GEMET Concept_____Â",
    	otherKeywords: "æ_Other Keywords_____Â"
    },
    
    LanguageCode: {
    	bul: "æ_Bulgarian____Â",
    	cze: "æ_Czech___Â",
    	dan: "æ_Danish___Â",
    	dut: "æ_Dutch___Â",
    	eng: "æ_English___Â",
    	est: "æ_Estonian___Â",
    	fin: "æ_Finnish___Â",
    	fre: "æ_French___Â",
    	ger: "æ_German___Â",
    	gre: "æ_Greek___Â",
    	hun: "æ_Hungarian____Â",
    	gle: "æ_Gaelic (Irish)_____Â",
    	ita: "æ_Italian___Â",
    	lav: "æ_Latvian___Â",
    	lit: "æ_Lithuanian____Â",
    	mlt: "æ_Maltese___Â",
    	pol: "æ_Polish___Â", 
    	por: "æ_Portuguese____Â",
    	rum: "æ_Romanian___Â",
    	slo: "æ_Slovak___Â",
    	slv: "æ_Slovenian____Â",  	
    	spa: "æ_Spanish___Â",
    	swe: "æ_Swedish___Â",
    	
    	chi: "æ_Chinese___Â",
    	kor: "æ_Korean___Â",
    	nor: "æ_Norwegian____Â",
    	rus: "æ_Russian___Â",
    	tur: "æ_Turkish___Â"
    },
    
    otherConstraints: {
    	noLimitations: "æ_No limitations_____Â",
    	confidentialityOfProceedings: "æ_The confidentiality of the proceedings of public authorities____________________Â...",
    	internationalRelations: "æ_International relations, public security or national defence___________________Â",
    	courseOfJustice: "æ_The course of justice, the ability of any person to receive a fair trial________________________Â...",
    	confidentialityOfCommercial: "æ_The confidentiality of commercial or industrial information____________________Â...",
    	intellectualProperty: "æ_Intellectual property rights_________Â",
    	confidentialityOfPersonalData: "æ_The confidentiality of personal data and/or files_________________Â...",
    	interestsOrProtection: "æ_The interests or protection of any person who supplied the information_______________________Â...",
    	protectionOfEnvironment: "æ_The protection of the environment to which such information relates______________________Â...",
    	freeText: "æ_Free text____Â"
    },
    
    serviceType: {
    	humanInteractionService: "æ_100 Geographic human interaction services_____________Â", 
    	humanCatalogueViewer: "æ_101 Catalogue viewer_______Â", 
    	humanGeographicViewer: "æ_102 Geographic viewer_______Â", 
    	humanGeographicSpreadsheetViewer: "æ_103 Geographic spreadsheet viewer___________Â", 
    	humanServiceEditor: "æ_104 Service editor______Â", 
    	humanChainDefinitionEditor: "æ_105 Chain definition editor_________Â", 
    	humanWorkflowEnactmentManager: "æ_106 Workflow enactment manager__________Â",
    	humanGeographicFeatureEditor: "æ_107 Geographic feature editor__________Â", 
    	humanGeographicSymbolEditor: "æ_108 Geographic symbol editor__________Â ",
    	humanFeatureGeneralizationEditor: "æ_109 Feature generalisation editor___________Â", 
    	humanGeographicDataStructureViewer: "æ_110 Geographic data-structure viewer____________Â", 
    	infoManagementService: "æ_200 Geographic model/information management service________________Â", 
    	infoFeatureAccessService: "æ_201 Feature access service_________Â", 
    	infoMapAccessService: "æ_202 Map access service________Â", 
    	infoCoverageAccessService: "æ_203 Coverage access service_________Â", 
    	infoSensorDescriptionService: "æ_204 Sensor description service__________Â", 
    	infoProductAccessService: "æ_205 Product access service_________Â", 
    	infoFeatureTypeService: "æ_206 Feature type service________Â", 
    	infoCatalogueService: "æ_207 Catalogue service_______Â", 
    	infoRegistryService: "æ_208 Registry Service_______Â", 
    	infoGazetteerService: "æ_209 Gazetteer service_______Â", 
    	infoOrderHandlingService: "æ_210 Order handling service_________Â", 
    	infoStandingOrderService: "æ_211 Standing order service_________Â", 
    	taskManagementService: "æ_300 Geographic workflow/task management services_______________Â", 
    	chainDefinitionService: "æ_301 Chain definition service_________Â", 
    	workflowEnactmentService: "æ_302 Workflow enactment service__________Â", 
    	subscriptionService: "æ_303 Subscription service________Â", 
    	spatialProcessingService: "æ_400 Geographic processing services - spatial______________Â", 
    	spatialCoordinateConversionService: "æ_401 Coordinate conversion service___________Â", 
    	spatialCoordinateTransformationService: "æ_402 Coordinate transformation service____________Â", 
    	spatialCoverageVectorConversionService: "æ_403 Coverage/vector conversion service____________Â", 
    	spatialImageCoordinateConversionService: "æ_404 Image coordinate conversion service_____________Â", 
    	spatialRectificationService: "æ_405 Rectification service_________Â", 
    	spatialOrthorectificationService: "æ_406 Orthorectification service__________Â", 
    	spatialSensorGeometryModelAdjustmentService: "æ_407 Sensor geometry model adjustment service______________Â", 
    	spatialImageGeometryModelConversionService: "æ_408 Image geometry model conversion service______________Â", 
    	spatialSubsettingService: "æ_409 Subsetting service________Â", 
    	spatialSamplingService: "æ_410 Sampling service_______Â", 
    	spatialTilingChangeService: "æ_411 Tiling change service_________Â", 
    	spatialDimensionMeasurementService: "æ_412 Dimension measurement service___________Â", 
    	spatialFeatureManipulationService: "æ_413 Feature manipulation services___________Â", 
    	spatialFeatureMatchingService: "æ_414 Feature matching service_________Â", 
    	spatialFeatureGeneralizationService: "æ_415 Feature generalisation service___________Â", 
    	spatialRouteDeterminationService: "æ_416 Route determination service__________Â", 
    	spatialPositioningService: "æ_417 Positioning service________Â", 
    	spatialProximityAnalysisService: "æ_418 Proximity analysis service__________Â", 
    	thematicProcessingService: "æ_500 Geographic processing services - thematic_______________Â",
    	thematicGoparameterCalculationService: "æ_501 Geoparameter calculation service____________Â", 
    	thematicClassificationService: "æ_502 Thematic classification service____________Â", 
    	thematicFeatureGeneralizationService: "æ_503 Feature generalisation service___________Â", 
    	thematicSubsettingService: "æ_504 Subsetting service________Â", 
    	thematicSpatialCountingService: "æ_505 Spatial counting service_________Â", 
    	thematicChangeDetectionService: "æ_506 Change detection service_________Â", 
    	thematicGeographicInformationExtractionService: "æ_507 Geographic information extraction services_______________Â", 
    	thematicImageProcessingService: "æ_508 Image processing service_________Â", 
    	thematicReducedResolutionGenerationService: "æ_509 Reduced resolution generation service_____________Â", 
    	thematicImageManipulationService: "æ_510 Image Manipulation Services__________Â", 
    	thematicImageUnderstandingService: "æ_511 Image understanding services___________Â", 
    	thematicImageSynthesisService: "æ_512 Image synthesis services_________Â", 
    	thematicMultibandImageManipulationService: "æ_513 Multiband image manipulation___________Â", 
    	thematicObjectDetectionService: "æ_514 Object detection service_________Â", 
    	thematicGeoparsingService: "æ_515 Geoparsing service________Â", 
    	thematicGeocodingService: "æ_516 Geocoding service_______Â", 
    	temporalProcessingService: "æ_600 Geographic processing services - temporal_______________Â", 
    	temporalReferenceSystemTransformationService: "æ_601 Temporal reference system transformation service_________________Â", 
    	temporalSubsettingService: "æ_602 Subsetting service________Â", 
    	temporalSamplingService: "æ_603 Sampling service_______Â", 
    	temporalProximityAnalysisService: "æ_604 Temporal proximity analysis service_____________Â", 
    	metadataProcessingService: "æ_700 Geographic processing services - metadata_______________Â", 
    	metadataStatisticalCalculationService: "æ_701 Statistical calculation service____________Â", 
    	metadataGeographicAnnotationService: "æ_702 Geographic annotation services___________Â", 
    	comService: "æ_800 Geographic communication services____________Â", 
    	comEncodingService: "æ_801 Encoding service_______Â", 
    	comTransferService: "æ_802 Transfer service_______Â", 
    	comGeographicCompressionService: "æ_803 Geographic compression service___________Â", 
    	comGeographicFormatConversionService: "æ_804 Geographic format conversion service_____________Â", 
    	comMessagingService: "æ_805 Messaging service_______Â", 
    	comRemoteFileAndExecutableManagement: "æ_806 Remote file and executable management_____________Â"
    },
    
    useLimitation: {
    	noCondition: "æ_No conditions apply_______Â",
    	unknownCondition: "æ_Conditions unknown______Â",
    	freeText: "æ_Free text____Â"
    }

  })
);
