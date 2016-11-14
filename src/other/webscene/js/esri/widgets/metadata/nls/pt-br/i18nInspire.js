define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ã_INSPIRE (Data)_____Ç",
    		description: ""
    	},
    	service: {
    		caption: "ã_INSPIRE (Service)______Ç",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ã_Inspire Data Theme______Ç"
    },
    
    inspireServiceType: {
      discovery: "Serviço de Descoberta",
      view: "Visualizar Serviço",
      download: "Serviço de Download",
      transformation: "Serviço de Transformação",
      invoke: "Serviço de Solicitação",
      other: "Outro Serviço"
    },
    
    keywordSections: {
    	dataTheme: "ã_Inspire Data Theme______Ç",
    	serviceCategory: "ã_ISO 19119 Service Category_________Ç",
    	gemetConcept: "ã_GEMET Concept_____Ç",
    	otherKeywords: "ã_Other Keywords_____Ç"
    },
    
    LanguageCode: {
    	bul: "ã_Bulgarian____Ç",
    	cze: "ã_Czech___Ç",
    	dan: "ã_Danish___Ç",
    	dut: "ã_Dutch___Ç",
    	eng: "ã_English___Ç",
    	est: "ã_Estonian___Ç",
    	fin: "ã_Finnish___Ç",
    	fre: "ã_French___Ç",
    	ger: "ã_German___Ç",
    	gre: "ã_Greek___Ç",
    	hun: "ã_Hungarian____Ç",
    	gle: "ã_Gaelic (Irish)_____Ç",
    	ita: "ã_Italian___Ç",
    	lav: "ã_Latvian___Ç",
    	lit: "ã_Lithuanian____Ç",
    	mlt: "ã_Maltese___Ç",
    	pol: "ã_Polish___Ç", 
    	por: "ã_Portuguese____Ç",
    	rum: "ã_Romanian___Ç",
    	slo: "ã_Slovak___Ç",
    	slv: "ã_Slovenian____Ç",  	
    	spa: "ã_Spanish___Ç",
    	swe: "ã_Swedish___Ç",
    	
    	chi: "ã_Chinese___Ç",
    	kor: "ã_Korean___Ç",
    	nor: "ã_Norwegian____Ç",
    	rus: "ã_Russian___Ç",
    	tur: "ã_Turkish___Ç"
    },
    
    otherConstraints: {
    	noLimitations: "ã_No limitations_____Ç",
    	confidentialityOfProceedings: "ã_The confidentiality of the proceedings of public authorities____________________Ç...",
    	internationalRelations: "ã_International relations, public security or national defence___________________Ç",
    	courseOfJustice: "ã_The course of justice, the ability of any person to receive a fair trial________________________Ç...",
    	confidentialityOfCommercial: "ã_The confidentiality of commercial or industrial information____________________Ç...",
    	intellectualProperty: "ã_Intellectual property rights_________Ç",
    	confidentialityOfPersonalData: "ã_The confidentiality of personal data and/or files_________________Ç...",
    	interestsOrProtection: "ã_The interests or protection of any person who supplied the information_______________________Ç...",
    	protectionOfEnvironment: "ã_The protection of the environment to which such information relates______________________Ç...",
    	freeText: "ã_Free text____Ç"
    },
    
    serviceType: {
    	humanInteractionService: "ã_100 Geographic human interaction services_____________Ç", 
    	humanCatalogueViewer: "ã_101 Catalogue viewer_______Ç", 
    	humanGeographicViewer: "ã_102 Geographic viewer_______Ç", 
    	humanGeographicSpreadsheetViewer: "ã_103 Geographic spreadsheet viewer___________Ç", 
    	humanServiceEditor: "ã_104 Service editor______Ç", 
    	humanChainDefinitionEditor: "ã_105 Chain definition editor_________Ç", 
    	humanWorkflowEnactmentManager: "ã_106 Workflow enactment manager__________Ç",
    	humanGeographicFeatureEditor: "ã_107 Geographic feature editor__________Ç", 
    	humanGeographicSymbolEditor: "ã_108 Geographic symbol editor__________Ç ",
    	humanFeatureGeneralizationEditor: "ã_109 Feature generalisation editor___________Ç", 
    	humanGeographicDataStructureViewer: "ã_110 Geographic data-structure viewer____________Ç", 
    	infoManagementService: "ã_200 Geographic model/information management service________________Ç", 
    	infoFeatureAccessService: "ã_201 Feature access service_________Ç", 
    	infoMapAccessService: "ã_202 Map access service________Ç", 
    	infoCoverageAccessService: "ã_203 Coverage access service_________Ç", 
    	infoSensorDescriptionService: "ã_204 Sensor description service__________Ç", 
    	infoProductAccessService: "ã_205 Product access service_________Ç", 
    	infoFeatureTypeService: "ã_206 Feature type service________Ç", 
    	infoCatalogueService: "ã_207 Catalogue service_______Ç", 
    	infoRegistryService: "ã_208 Registry Service_______Ç", 
    	infoGazetteerService: "ã_209 Gazetteer service_______Ç", 
    	infoOrderHandlingService: "ã_210 Order handling service_________Ç", 
    	infoStandingOrderService: "ã_211 Standing order service_________Ç", 
    	taskManagementService: "ã_300 Geographic workflow/task management services_______________Ç", 
    	chainDefinitionService: "ã_301 Chain definition service_________Ç", 
    	workflowEnactmentService: "ã_302 Workflow enactment service__________Ç", 
    	subscriptionService: "ã_303 Subscription service________Ç", 
    	spatialProcessingService: "ã_400 Geographic processing services - spatial______________Ç", 
    	spatialCoordinateConversionService: "ã_401 Coordinate conversion service___________Ç", 
    	spatialCoordinateTransformationService: "ã_402 Coordinate transformation service____________Ç", 
    	spatialCoverageVectorConversionService: "ã_403 Coverage/vector conversion service____________Ç", 
    	spatialImageCoordinateConversionService: "ã_404 Image coordinate conversion service_____________Ç", 
    	spatialRectificationService: "ã_405 Rectification service_________Ç", 
    	spatialOrthorectificationService: "ã_406 Orthorectification service__________Ç", 
    	spatialSensorGeometryModelAdjustmentService: "ã_407 Sensor geometry model adjustment service______________Ç", 
    	spatialImageGeometryModelConversionService: "ã_408 Image geometry model conversion service______________Ç", 
    	spatialSubsettingService: "ã_409 Subsetting service________Ç", 
    	spatialSamplingService: "ã_410 Sampling service_______Ç", 
    	spatialTilingChangeService: "ã_411 Tiling change service_________Ç", 
    	spatialDimensionMeasurementService: "ã_412 Dimension measurement service___________Ç", 
    	spatialFeatureManipulationService: "ã_413 Feature manipulation services___________Ç", 
    	spatialFeatureMatchingService: "ã_414 Feature matching service_________Ç", 
    	spatialFeatureGeneralizationService: "ã_415 Feature generalisation service___________Ç", 
    	spatialRouteDeterminationService: "ã_416 Route determination service__________Ç", 
    	spatialPositioningService: "ã_417 Positioning service________Ç", 
    	spatialProximityAnalysisService: "ã_418 Proximity analysis service__________Ç", 
    	thematicProcessingService: "ã_500 Geographic processing services - thematic_______________Ç",
    	thematicGoparameterCalculationService: "ã_501 Geoparameter calculation service____________Ç", 
    	thematicClassificationService: "ã_502 Thematic classification service____________Ç", 
    	thematicFeatureGeneralizationService: "ã_503 Feature generalisation service___________Ç", 
    	thematicSubsettingService: "ã_504 Subsetting service________Ç", 
    	thematicSpatialCountingService: "ã_505 Spatial counting service_________Ç", 
    	thematicChangeDetectionService: "ã_506 Change detection service_________Ç", 
    	thematicGeographicInformationExtractionService: "ã_507 Geographic information extraction services_______________Ç", 
    	thematicImageProcessingService: "ã_508 Image processing service_________Ç", 
    	thematicReducedResolutionGenerationService: "ã_509 Reduced resolution generation service_____________Ç", 
    	thematicImageManipulationService: "ã_510 Image Manipulation Services__________Ç", 
    	thematicImageUnderstandingService: "ã_511 Image understanding services___________Ç", 
    	thematicImageSynthesisService: "ã_512 Image synthesis services_________Ç", 
    	thematicMultibandImageManipulationService: "ã_513 Multiband image manipulation___________Ç", 
    	thematicObjectDetectionService: "ã_514 Object detection service_________Ç", 
    	thematicGeoparsingService: "ã_515 Geoparsing service________Ç", 
    	thematicGeocodingService: "ã_516 Geocoding service_______Ç", 
    	temporalProcessingService: "ã_600 Geographic processing services - temporal_______________Ç", 
    	temporalReferenceSystemTransformationService: "ã_601 Temporal reference system transformation service_________________Ç", 
    	temporalSubsettingService: "ã_602 Subsetting service________Ç", 
    	temporalSamplingService: "ã_603 Sampling service_______Ç", 
    	temporalProximityAnalysisService: "ã_604 Temporal proximity analysis service_____________Ç", 
    	metadataProcessingService: "ã_700 Geographic processing services - metadata_______________Ç", 
    	metadataStatisticalCalculationService: "ã_701 Statistical calculation service____________Ç", 
    	metadataGeographicAnnotationService: "ã_702 Geographic annotation services___________Ç", 
    	comService: "ã_800 Geographic communication services____________Ç", 
    	comEncodingService: "ã_801 Encoding service_______Ç", 
    	comTransferService: "ã_802 Transfer service_______Ç", 
    	comGeographicCompressionService: "ã_803 Geographic compression service___________Ç", 
    	comGeographicFormatConversionService: "ã_804 Geographic format conversion service_____________Ç", 
    	comMessagingService: "ã_805 Messaging service_______Ç", 
    	comRemoteFileAndExecutableManagement: "ã_806 Remote file and executable management_____________Ç"
    },
    
    useLimitation: {
    	noCondition: "ã_No conditions apply_______Ç",
    	unknownCondition: "ã_Conditions unknown______Ç",
    	freeText: "ã_Free text____Ç"
    }

  })
);
