define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "á_INSPIRE (Data)_____Ó",
    		description: ""
    	},
    	service: {
    		caption: "á_INSPIRE (Service)______Ó",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "á_Inspire Data Theme______Ó"
    },
    
    inspireServiceType: {
      discovery: "Servicio de descubrimiento",
      view: "Servicio de visualización",
      download: "Servicio de descarga",
      transformation: "Servicio de transformación",
      invoke: "Servicio de invocación",
      other: "Otro servicio"
    },
    
    keywordSections: {
    	dataTheme: "á_Inspire Data Theme______Ó",
    	serviceCategory: "á_ISO 19119 Service Category_________Ó",
    	gemetConcept: "á_GEMET Concept_____Ó",
    	otherKeywords: "á_Other Keywords_____Ó"
    },
    
    LanguageCode: {
    	bul: "á_Bulgarian____Ó",
    	cze: "á_Czech___Ó",
    	dan: "á_Danish___Ó",
    	dut: "á_Dutch___Ó",
    	eng: "á_English___Ó",
    	est: "á_Estonian___Ó",
    	fin: "á_Finnish___Ó",
    	fre: "á_French___Ó",
    	ger: "á_German___Ó",
    	gre: "á_Greek___Ó",
    	hun: "á_Hungarian____Ó",
    	gle: "á_Gaelic (Irish)_____Ó",
    	ita: "á_Italian___Ó",
    	lav: "á_Latvian___Ó",
    	lit: "á_Lithuanian____Ó",
    	mlt: "á_Maltese___Ó",
    	pol: "á_Polish___Ó", 
    	por: "á_Portuguese____Ó",
    	rum: "á_Romanian___Ó",
    	slo: "á_Slovak___Ó",
    	slv: "á_Slovenian____Ó",  	
    	spa: "á_Spanish___Ó",
    	swe: "á_Swedish___Ó",
    	
    	chi: "á_Chinese___Ó",
    	kor: "á_Korean___Ó",
    	nor: "á_Norwegian____Ó",
    	rus: "á_Russian___Ó",
    	tur: "á_Turkish___Ó"
    },
    
    otherConstraints: {
    	noLimitations: "á_No limitations_____Ó",
    	confidentialityOfProceedings: "á_The confidentiality of the proceedings of public authorities____________________Ó...",
    	internationalRelations: "á_International relations, public security or national defence___________________Ó",
    	courseOfJustice: "á_The course of justice, the ability of any person to receive a fair trial________________________Ó...",
    	confidentialityOfCommercial: "á_The confidentiality of commercial or industrial information____________________Ó...",
    	intellectualProperty: "á_Intellectual property rights_________Ó",
    	confidentialityOfPersonalData: "á_The confidentiality of personal data and/or files_________________Ó...",
    	interestsOrProtection: "á_The interests or protection of any person who supplied the information_______________________Ó...",
    	protectionOfEnvironment: "á_The protection of the environment to which such information relates______________________Ó...",
    	freeText: "á_Free text____Ó"
    },
    
    serviceType: {
    	humanInteractionService: "á_100 Geographic human interaction services_____________Ó", 
    	humanCatalogueViewer: "á_101 Catalogue viewer_______Ó", 
    	humanGeographicViewer: "á_102 Geographic viewer_______Ó", 
    	humanGeographicSpreadsheetViewer: "á_103 Geographic spreadsheet viewer___________Ó", 
    	humanServiceEditor: "á_104 Service editor______Ó", 
    	humanChainDefinitionEditor: "á_105 Chain definition editor_________Ó", 
    	humanWorkflowEnactmentManager: "á_106 Workflow enactment manager__________Ó",
    	humanGeographicFeatureEditor: "á_107 Geographic feature editor__________Ó", 
    	humanGeographicSymbolEditor: "á_108 Geographic symbol editor__________Ó ",
    	humanFeatureGeneralizationEditor: "á_109 Feature generalisation editor___________Ó", 
    	humanGeographicDataStructureViewer: "á_110 Geographic data-structure viewer____________Ó", 
    	infoManagementService: "á_200 Geographic model/information management service________________Ó", 
    	infoFeatureAccessService: "á_201 Feature access service_________Ó", 
    	infoMapAccessService: "á_202 Map access service________Ó", 
    	infoCoverageAccessService: "á_203 Coverage access service_________Ó", 
    	infoSensorDescriptionService: "á_204 Sensor description service__________Ó", 
    	infoProductAccessService: "á_205 Product access service_________Ó", 
    	infoFeatureTypeService: "á_206 Feature type service________Ó", 
    	infoCatalogueService: "á_207 Catalogue service_______Ó", 
    	infoRegistryService: "á_208 Registry Service_______Ó", 
    	infoGazetteerService: "á_209 Gazetteer service_______Ó", 
    	infoOrderHandlingService: "á_210 Order handling service_________Ó", 
    	infoStandingOrderService: "á_211 Standing order service_________Ó", 
    	taskManagementService: "á_300 Geographic workflow/task management services_______________Ó", 
    	chainDefinitionService: "á_301 Chain definition service_________Ó", 
    	workflowEnactmentService: "á_302 Workflow enactment service__________Ó", 
    	subscriptionService: "á_303 Subscription service________Ó", 
    	spatialProcessingService: "á_400 Geographic processing services - spatial______________Ó", 
    	spatialCoordinateConversionService: "á_401 Coordinate conversion service___________Ó", 
    	spatialCoordinateTransformationService: "á_402 Coordinate transformation service____________Ó", 
    	spatialCoverageVectorConversionService: "á_403 Coverage/vector conversion service____________Ó", 
    	spatialImageCoordinateConversionService: "á_404 Image coordinate conversion service_____________Ó", 
    	spatialRectificationService: "á_405 Rectification service_________Ó", 
    	spatialOrthorectificationService: "á_406 Orthorectification service__________Ó", 
    	spatialSensorGeometryModelAdjustmentService: "á_407 Sensor geometry model adjustment service______________Ó", 
    	spatialImageGeometryModelConversionService: "á_408 Image geometry model conversion service______________Ó", 
    	spatialSubsettingService: "á_409 Subsetting service________Ó", 
    	spatialSamplingService: "á_410 Sampling service_______Ó", 
    	spatialTilingChangeService: "á_411 Tiling change service_________Ó", 
    	spatialDimensionMeasurementService: "á_412 Dimension measurement service___________Ó", 
    	spatialFeatureManipulationService: "á_413 Feature manipulation services___________Ó", 
    	spatialFeatureMatchingService: "á_414 Feature matching service_________Ó", 
    	spatialFeatureGeneralizationService: "á_415 Feature generalisation service___________Ó", 
    	spatialRouteDeterminationService: "á_416 Route determination service__________Ó", 
    	spatialPositioningService: "á_417 Positioning service________Ó", 
    	spatialProximityAnalysisService: "á_418 Proximity analysis service__________Ó", 
    	thematicProcessingService: "á_500 Geographic processing services - thematic_______________Ó",
    	thematicGoparameterCalculationService: "á_501 Geoparameter calculation service____________Ó", 
    	thematicClassificationService: "á_502 Thematic classification service____________Ó", 
    	thematicFeatureGeneralizationService: "á_503 Feature generalisation service___________Ó", 
    	thematicSubsettingService: "á_504 Subsetting service________Ó", 
    	thematicSpatialCountingService: "á_505 Spatial counting service_________Ó", 
    	thematicChangeDetectionService: "á_506 Change detection service_________Ó", 
    	thematicGeographicInformationExtractionService: "á_507 Geographic information extraction services_______________Ó", 
    	thematicImageProcessingService: "á_508 Image processing service_________Ó", 
    	thematicReducedResolutionGenerationService: "á_509 Reduced resolution generation service_____________Ó", 
    	thematicImageManipulationService: "á_510 Image Manipulation Services__________Ó", 
    	thematicImageUnderstandingService: "á_511 Image understanding services___________Ó", 
    	thematicImageSynthesisService: "á_512 Image synthesis services_________Ó", 
    	thematicMultibandImageManipulationService: "á_513 Multiband image manipulation___________Ó", 
    	thematicObjectDetectionService: "á_514 Object detection service_________Ó", 
    	thematicGeoparsingService: "á_515 Geoparsing service________Ó", 
    	thematicGeocodingService: "á_516 Geocoding service_______Ó", 
    	temporalProcessingService: "á_600 Geographic processing services - temporal_______________Ó", 
    	temporalReferenceSystemTransformationService: "á_601 Temporal reference system transformation service_________________Ó", 
    	temporalSubsettingService: "á_602 Subsetting service________Ó", 
    	temporalSamplingService: "á_603 Sampling service_______Ó", 
    	temporalProximityAnalysisService: "á_604 Temporal proximity analysis service_____________Ó", 
    	metadataProcessingService: "á_700 Geographic processing services - metadata_______________Ó", 
    	metadataStatisticalCalculationService: "á_701 Statistical calculation service____________Ó", 
    	metadataGeographicAnnotationService: "á_702 Geographic annotation services___________Ó", 
    	comService: "á_800 Geographic communication services____________Ó", 
    	comEncodingService: "á_801 Encoding service_______Ó", 
    	comTransferService: "á_802 Transfer service_______Ó", 
    	comGeographicCompressionService: "á_803 Geographic compression service___________Ó", 
    	comGeographicFormatConversionService: "á_804 Geographic format conversion service_____________Ó", 
    	comMessagingService: "á_805 Messaging service_______Ó", 
    	comRemoteFileAndExecutableManagement: "á_806 Remote file and executable management_____________Ó"
    },
    
    useLimitation: {
    	noCondition: "á_No conditions apply_______Ó",
    	unknownCondition: "á_Conditions unknown______Ó",
    	freeText: "á_Free text____Ó"
    }

  })
);
