define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "π_INSPIRE (Data)_____Ω",
    		description: ""
    	},
    	service: {
    		caption: "π_INSPIRE (Service)______Ω",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "π_Inspire Data Theme______Ω"
    },
    
    inspireServiceType: {
      discovery: "Υπηρεσία εντοπισμού",
      view: "Υπηρεσία προβολής",
      download: "Υπηρεσία λήψης",
      transformation: "Υπηρεσία μετασχηματισμού",
      invoke: "Υπηρεσία κλήσης",
      other: "Άλλη υπηρεσία"
    },
    
    keywordSections: {
    	dataTheme: "π_Inspire Data Theme______Ω",
    	serviceCategory: "π_ISO 19119 Service Category_________Ω",
    	gemetConcept: "π_GEMET Concept_____Ω",
    	otherKeywords: "π_Other Keywords_____Ω"
    },
    
    LanguageCode: {
    	bul: "π_Bulgarian____Ω",
    	cze: "π_Czech___Ω",
    	dan: "π_Danish___Ω",
    	dut: "π_Dutch___Ω",
    	eng: "π_English___Ω",
    	est: "π_Estonian___Ω",
    	fin: "π_Finnish___Ω",
    	fre: "π_French___Ω",
    	ger: "π_German___Ω",
    	gre: "π_Greek___Ω",
    	hun: "π_Hungarian____Ω",
    	gle: "π_Gaelic (Irish)_____Ω",
    	ita: "π_Italian___Ω",
    	lav: "π_Latvian___Ω",
    	lit: "π_Lithuanian____Ω",
    	mlt: "π_Maltese___Ω",
    	pol: "π_Polish___Ω", 
    	por: "π_Portuguese____Ω",
    	rum: "π_Romanian___Ω",
    	slo: "π_Slovak___Ω",
    	slv: "π_Slovenian____Ω",  	
    	spa: "π_Spanish___Ω",
    	swe: "π_Swedish___Ω",
    	
    	chi: "π_Chinese___Ω",
    	kor: "π_Korean___Ω",
    	nor: "π_Norwegian____Ω",
    	rus: "π_Russian___Ω",
    	tur: "π_Turkish___Ω"
    },
    
    otherConstraints: {
    	noLimitations: "π_No limitations_____Ω",
    	confidentialityOfProceedings: "π_The confidentiality of the proceedings of public authorities____________________Ω...",
    	internationalRelations: "π_International relations, public security or national defence___________________Ω",
    	courseOfJustice: "π_The course of justice, the ability of any person to receive a fair trial________________________Ω...",
    	confidentialityOfCommercial: "π_The confidentiality of commercial or industrial information____________________Ω...",
    	intellectualProperty: "π_Intellectual property rights_________Ω",
    	confidentialityOfPersonalData: "π_The confidentiality of personal data and/or files_________________Ω...",
    	interestsOrProtection: "π_The interests or protection of any person who supplied the information_______________________Ω...",
    	protectionOfEnvironment: "π_The protection of the environment to which such information relates______________________Ω...",
    	freeText: "π_Free text____Ω"
    },
    
    serviceType: {
    	humanInteractionService: "π_100 Geographic human interaction services_____________Ω", 
    	humanCatalogueViewer: "π_101 Catalogue viewer_______Ω", 
    	humanGeographicViewer: "π_102 Geographic viewer_______Ω", 
    	humanGeographicSpreadsheetViewer: "π_103 Geographic spreadsheet viewer___________Ω", 
    	humanServiceEditor: "π_104 Service editor______Ω", 
    	humanChainDefinitionEditor: "π_105 Chain definition editor_________Ω", 
    	humanWorkflowEnactmentManager: "π_106 Workflow enactment manager__________Ω",
    	humanGeographicFeatureEditor: "π_107 Geographic feature editor__________Ω", 
    	humanGeographicSymbolEditor: "π_108 Geographic symbol editor__________Ω ",
    	humanFeatureGeneralizationEditor: "π_109 Feature generalisation editor___________Ω", 
    	humanGeographicDataStructureViewer: "π_110 Geographic data-structure viewer____________Ω", 
    	infoManagementService: "π_200 Geographic model/information management service________________Ω", 
    	infoFeatureAccessService: "π_201 Feature access service_________Ω", 
    	infoMapAccessService: "π_202 Map access service________Ω", 
    	infoCoverageAccessService: "π_203 Coverage access service_________Ω", 
    	infoSensorDescriptionService: "π_204 Sensor description service__________Ω", 
    	infoProductAccessService: "π_205 Product access service_________Ω", 
    	infoFeatureTypeService: "π_206 Feature type service________Ω", 
    	infoCatalogueService: "π_207 Catalogue service_______Ω", 
    	infoRegistryService: "π_208 Registry Service_______Ω", 
    	infoGazetteerService: "π_209 Gazetteer service_______Ω", 
    	infoOrderHandlingService: "π_210 Order handling service_________Ω", 
    	infoStandingOrderService: "π_211 Standing order service_________Ω", 
    	taskManagementService: "π_300 Geographic workflow/task management services_______________Ω", 
    	chainDefinitionService: "π_301 Chain definition service_________Ω", 
    	workflowEnactmentService: "π_302 Workflow enactment service__________Ω", 
    	subscriptionService: "π_303 Subscription service________Ω", 
    	spatialProcessingService: "π_400 Geographic processing services - spatial______________Ω", 
    	spatialCoordinateConversionService: "π_401 Coordinate conversion service___________Ω", 
    	spatialCoordinateTransformationService: "π_402 Coordinate transformation service____________Ω", 
    	spatialCoverageVectorConversionService: "π_403 Coverage/vector conversion service____________Ω", 
    	spatialImageCoordinateConversionService: "π_404 Image coordinate conversion service_____________Ω", 
    	spatialRectificationService: "π_405 Rectification service_________Ω", 
    	spatialOrthorectificationService: "π_406 Orthorectification service__________Ω", 
    	spatialSensorGeometryModelAdjustmentService: "π_407 Sensor geometry model adjustment service______________Ω", 
    	spatialImageGeometryModelConversionService: "π_408 Image geometry model conversion service______________Ω", 
    	spatialSubsettingService: "π_409 Subsetting service________Ω", 
    	spatialSamplingService: "π_410 Sampling service_______Ω", 
    	spatialTilingChangeService: "π_411 Tiling change service_________Ω", 
    	spatialDimensionMeasurementService: "π_412 Dimension measurement service___________Ω", 
    	spatialFeatureManipulationService: "π_413 Feature manipulation services___________Ω", 
    	spatialFeatureMatchingService: "π_414 Feature matching service_________Ω", 
    	spatialFeatureGeneralizationService: "π_415 Feature generalisation service___________Ω", 
    	spatialRouteDeterminationService: "π_416 Route determination service__________Ω", 
    	spatialPositioningService: "π_417 Positioning service________Ω", 
    	spatialProximityAnalysisService: "π_418 Proximity analysis service__________Ω", 
    	thematicProcessingService: "π_500 Geographic processing services - thematic_______________Ω",
    	thematicGoparameterCalculationService: "π_501 Geoparameter calculation service____________Ω", 
    	thematicClassificationService: "π_502 Thematic classification service____________Ω", 
    	thematicFeatureGeneralizationService: "π_503 Feature generalisation service___________Ω", 
    	thematicSubsettingService: "π_504 Subsetting service________Ω", 
    	thematicSpatialCountingService: "π_505 Spatial counting service_________Ω", 
    	thematicChangeDetectionService: "π_506 Change detection service_________Ω", 
    	thematicGeographicInformationExtractionService: "π_507 Geographic information extraction services_______________Ω", 
    	thematicImageProcessingService: "π_508 Image processing service_________Ω", 
    	thematicReducedResolutionGenerationService: "π_509 Reduced resolution generation service_____________Ω", 
    	thematicImageManipulationService: "π_510 Image Manipulation Services__________Ω", 
    	thematicImageUnderstandingService: "π_511 Image understanding services___________Ω", 
    	thematicImageSynthesisService: "π_512 Image synthesis services_________Ω", 
    	thematicMultibandImageManipulationService: "π_513 Multiband image manipulation___________Ω", 
    	thematicObjectDetectionService: "π_514 Object detection service_________Ω", 
    	thematicGeoparsingService: "π_515 Geoparsing service________Ω", 
    	thematicGeocodingService: "π_516 Geocoding service_______Ω", 
    	temporalProcessingService: "π_600 Geographic processing services - temporal_______________Ω", 
    	temporalReferenceSystemTransformationService: "π_601 Temporal reference system transformation service_________________Ω", 
    	temporalSubsettingService: "π_602 Subsetting service________Ω", 
    	temporalSamplingService: "π_603 Sampling service_______Ω", 
    	temporalProximityAnalysisService: "π_604 Temporal proximity analysis service_____________Ω", 
    	metadataProcessingService: "π_700 Geographic processing services - metadata_______________Ω", 
    	metadataStatisticalCalculationService: "π_701 Statistical calculation service____________Ω", 
    	metadataGeographicAnnotationService: "π_702 Geographic annotation services___________Ω", 
    	comService: "π_800 Geographic communication services____________Ω", 
    	comEncodingService: "π_801 Encoding service_______Ω", 
    	comTransferService: "π_802 Transfer service_______Ω", 
    	comGeographicCompressionService: "π_803 Geographic compression service___________Ω", 
    	comGeographicFormatConversionService: "π_804 Geographic format conversion service_____________Ω", 
    	comMessagingService: "π_805 Messaging service_______Ω", 
    	comRemoteFileAndExecutableManagement: "π_806 Remote file and executable management_____________Ω"
    },
    
    useLimitation: {
    	noCondition: "π_No conditions apply_______Ω",
    	unknownCondition: "π_Conditions unknown______Ω",
    	freeText: "π_Free text____Ω"
    }

  })
);
