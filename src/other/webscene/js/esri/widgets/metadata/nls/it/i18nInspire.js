define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "é_INSPIRE (Data)_____È",
    		description: ""
    	},
    	service: {
    		caption: "é_INSPIRE (Service)______È",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "é_Inspire Data Theme______È"
    },
    
    inspireServiceType: {
      discovery: "Servizio di ricerca",
      view: "Visualizza servizio",
      download: "Scarica servizio",
      transformation: "Servizio di trasformazione",
      invoke: "Richiama servizio",
      other: "Altro servizio"
    },
    
    keywordSections: {
    	dataTheme: "é_Inspire Data Theme______È",
    	serviceCategory: "é_ISO 19119 Service Category_________È",
    	gemetConcept: "é_GEMET Concept_____È",
    	otherKeywords: "é_Other Keywords_____È"
    },
    
    LanguageCode: {
    	bul: "é_Bulgarian____È",
    	cze: "é_Czech___È",
    	dan: "é_Danish___È",
    	dut: "é_Dutch___È",
    	eng: "é_English___È",
    	est: "é_Estonian___È",
    	fin: "é_Finnish___È",
    	fre: "é_French___È",
    	ger: "é_German___È",
    	gre: "é_Greek___È",
    	hun: "é_Hungarian____È",
    	gle: "é_Gaelic (Irish)_____È",
    	ita: "é_Italian___È",
    	lav: "é_Latvian___È",
    	lit: "é_Lithuanian____È",
    	mlt: "é_Maltese___È",
    	pol: "é_Polish___È", 
    	por: "é_Portuguese____È",
    	rum: "é_Romanian___È",
    	slo: "é_Slovak___È",
    	slv: "é_Slovenian____È",  	
    	spa: "é_Spanish___È",
    	swe: "é_Swedish___È",
    	
    	chi: "é_Chinese___È",
    	kor: "é_Korean___È",
    	nor: "é_Norwegian____È",
    	rus: "é_Russian___È",
    	tur: "é_Turkish___È"
    },
    
    otherConstraints: {
    	noLimitations: "é_No limitations_____È",
    	confidentialityOfProceedings: "é_The confidentiality of the proceedings of public authorities____________________È...",
    	internationalRelations: "é_International relations, public security or national defence___________________È",
    	courseOfJustice: "é_The course of justice, the ability of any person to receive a fair trial________________________È...",
    	confidentialityOfCommercial: "é_The confidentiality of commercial or industrial information____________________È...",
    	intellectualProperty: "é_Intellectual property rights_________È",
    	confidentialityOfPersonalData: "é_The confidentiality of personal data and/or files_________________È...",
    	interestsOrProtection: "é_The interests or protection of any person who supplied the information_______________________È...",
    	protectionOfEnvironment: "é_The protection of the environment to which such information relates______________________È...",
    	freeText: "é_Free text____È"
    },
    
    serviceType: {
    	humanInteractionService: "é_100 Geographic human interaction services_____________È", 
    	humanCatalogueViewer: "é_101 Catalogue viewer_______È", 
    	humanGeographicViewer: "é_102 Geographic viewer_______È", 
    	humanGeographicSpreadsheetViewer: "é_103 Geographic spreadsheet viewer___________È", 
    	humanServiceEditor: "é_104 Service editor______È", 
    	humanChainDefinitionEditor: "é_105 Chain definition editor_________È", 
    	humanWorkflowEnactmentManager: "é_106 Workflow enactment manager__________È",
    	humanGeographicFeatureEditor: "é_107 Geographic feature editor__________È", 
    	humanGeographicSymbolEditor: "é_108 Geographic symbol editor__________È ",
    	humanFeatureGeneralizationEditor: "é_109 Feature generalisation editor___________È", 
    	humanGeographicDataStructureViewer: "é_110 Geographic data-structure viewer____________È", 
    	infoManagementService: "é_200 Geographic model/information management service________________È", 
    	infoFeatureAccessService: "é_201 Feature access service_________È", 
    	infoMapAccessService: "é_202 Map access service________È", 
    	infoCoverageAccessService: "é_203 Coverage access service_________È", 
    	infoSensorDescriptionService: "é_204 Sensor description service__________È", 
    	infoProductAccessService: "é_205 Product access service_________È", 
    	infoFeatureTypeService: "é_206 Feature type service________È", 
    	infoCatalogueService: "é_207 Catalogue service_______È", 
    	infoRegistryService: "é_208 Registry Service_______È", 
    	infoGazetteerService: "é_209 Gazetteer service_______È", 
    	infoOrderHandlingService: "é_210 Order handling service_________È", 
    	infoStandingOrderService: "é_211 Standing order service_________È", 
    	taskManagementService: "é_300 Geographic workflow/task management services_______________È", 
    	chainDefinitionService: "é_301 Chain definition service_________È", 
    	workflowEnactmentService: "é_302 Workflow enactment service__________È", 
    	subscriptionService: "é_303 Subscription service________È", 
    	spatialProcessingService: "é_400 Geographic processing services - spatial______________È", 
    	spatialCoordinateConversionService: "é_401 Coordinate conversion service___________È", 
    	spatialCoordinateTransformationService: "é_402 Coordinate transformation service____________È", 
    	spatialCoverageVectorConversionService: "é_403 Coverage/vector conversion service____________È", 
    	spatialImageCoordinateConversionService: "é_404 Image coordinate conversion service_____________È", 
    	spatialRectificationService: "é_405 Rectification service_________È", 
    	spatialOrthorectificationService: "é_406 Orthorectification service__________È", 
    	spatialSensorGeometryModelAdjustmentService: "é_407 Sensor geometry model adjustment service______________È", 
    	spatialImageGeometryModelConversionService: "é_408 Image geometry model conversion service______________È", 
    	spatialSubsettingService: "é_409 Subsetting service________È", 
    	spatialSamplingService: "é_410 Sampling service_______È", 
    	spatialTilingChangeService: "é_411 Tiling change service_________È", 
    	spatialDimensionMeasurementService: "é_412 Dimension measurement service___________È", 
    	spatialFeatureManipulationService: "é_413 Feature manipulation services___________È", 
    	spatialFeatureMatchingService: "é_414 Feature matching service_________È", 
    	spatialFeatureGeneralizationService: "é_415 Feature generalisation service___________È", 
    	spatialRouteDeterminationService: "é_416 Route determination service__________È", 
    	spatialPositioningService: "é_417 Positioning service________È", 
    	spatialProximityAnalysisService: "é_418 Proximity analysis service__________È", 
    	thematicProcessingService: "é_500 Geographic processing services - thematic_______________È",
    	thematicGoparameterCalculationService: "é_501 Geoparameter calculation service____________È", 
    	thematicClassificationService: "é_502 Thematic classification service____________È", 
    	thematicFeatureGeneralizationService: "é_503 Feature generalisation service___________È", 
    	thematicSubsettingService: "é_504 Subsetting service________È", 
    	thematicSpatialCountingService: "é_505 Spatial counting service_________È", 
    	thematicChangeDetectionService: "é_506 Change detection service_________È", 
    	thematicGeographicInformationExtractionService: "é_507 Geographic information extraction services_______________È", 
    	thematicImageProcessingService: "é_508 Image processing service_________È", 
    	thematicReducedResolutionGenerationService: "é_509 Reduced resolution generation service_____________È", 
    	thematicImageManipulationService: "é_510 Image Manipulation Services__________È", 
    	thematicImageUnderstandingService: "é_511 Image understanding services___________È", 
    	thematicImageSynthesisService: "é_512 Image synthesis services_________È", 
    	thematicMultibandImageManipulationService: "é_513 Multiband image manipulation___________È", 
    	thematicObjectDetectionService: "é_514 Object detection service_________È", 
    	thematicGeoparsingService: "é_515 Geoparsing service________È", 
    	thematicGeocodingService: "é_516 Geocoding service_______È", 
    	temporalProcessingService: "é_600 Geographic processing services - temporal_______________È", 
    	temporalReferenceSystemTransformationService: "é_601 Temporal reference system transformation service_________________È", 
    	temporalSubsettingService: "é_602 Subsetting service________È", 
    	temporalSamplingService: "é_603 Sampling service_______È", 
    	temporalProximityAnalysisService: "é_604 Temporal proximity analysis service_____________È", 
    	metadataProcessingService: "é_700 Geographic processing services - metadata_______________È", 
    	metadataStatisticalCalculationService: "é_701 Statistical calculation service____________È", 
    	metadataGeographicAnnotationService: "é_702 Geographic annotation services___________È", 
    	comService: "é_800 Geographic communication services____________È", 
    	comEncodingService: "é_801 Encoding service_______È", 
    	comTransferService: "é_802 Transfer service_______È", 
    	comGeographicCompressionService: "é_803 Geographic compression service___________È", 
    	comGeographicFormatConversionService: "é_804 Geographic format conversion service_____________È", 
    	comMessagingService: "é_805 Messaging service_______È", 
    	comRemoteFileAndExecutableManagement: "é_806 Remote file and executable management_____________È"
    },
    
    useLimitation: {
    	noCondition: "é_No conditions apply_______È",
    	unknownCondition: "é_Conditions unknown______È",
    	freeText: "é_Free text____È"
    }

  })
);
