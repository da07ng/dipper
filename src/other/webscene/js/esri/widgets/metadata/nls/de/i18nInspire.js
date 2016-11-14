define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ä_INSPIRE (Data)_____Ü",
    		description: ""
    	},
    	service: {
    		caption: "ä_INSPIRE (Service)______Ü",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ä_Inspire Data Theme______Ü"
    },
    
    inspireServiceType: {
      discovery: "Suchdienst",
      view: "Darstellungsdienst",
      download: "Download-Dienst",
      transformation: "Transformationsdienst",
      invoke: "Invoke-Dienst",
      other: "Sonstiger Dienst"
    },
    
    keywordSections: {
    	dataTheme: "ä_Inspire Data Theme______Ü",
    	serviceCategory: "ä_ISO 19119 Service Category_________Ü",
    	gemetConcept: "ä_GEMET Concept_____Ü",
    	otherKeywords: "ä_Other Keywords_____Ü"
    },
    
    LanguageCode: {
    	bul: "ä_Bulgarian____Ü",
    	cze: "ä_Czech___Ü",
    	dan: "ä_Danish___Ü",
    	dut: "ä_Dutch___Ü",
    	eng: "ä_English___Ü",
    	est: "ä_Estonian___Ü",
    	fin: "ä_Finnish___Ü",
    	fre: "ä_French___Ü",
    	ger: "ä_German___Ü",
    	gre: "ä_Greek___Ü",
    	hun: "ä_Hungarian____Ü",
    	gle: "ä_Gaelic (Irish)_____Ü",
    	ita: "ä_Italian___Ü",
    	lav: "ä_Latvian___Ü",
    	lit: "ä_Lithuanian____Ü",
    	mlt: "ä_Maltese___Ü",
    	pol: "ä_Polish___Ü", 
    	por: "ä_Portuguese____Ü",
    	rum: "ä_Romanian___Ü",
    	slo: "ä_Slovak___Ü",
    	slv: "ä_Slovenian____Ü",  	
    	spa: "ä_Spanish___Ü",
    	swe: "ä_Swedish___Ü",
    	
    	chi: "ä_Chinese___Ü",
    	kor: "ä_Korean___Ü",
    	nor: "ä_Norwegian____Ü",
    	rus: "ä_Russian___Ü",
    	tur: "ä_Turkish___Ü"
    },
    
    otherConstraints: {
    	noLimitations: "ä_No limitations_____Ü",
    	confidentialityOfProceedings: "ä_The confidentiality of the proceedings of public authorities____________________Ü...",
    	internationalRelations: "ä_International relations, public security or national defence___________________Ü",
    	courseOfJustice: "ä_The course of justice, the ability of any person to receive a fair trial________________________Ü...",
    	confidentialityOfCommercial: "ä_The confidentiality of commercial or industrial information____________________Ü...",
    	intellectualProperty: "ä_Intellectual property rights_________Ü",
    	confidentialityOfPersonalData: "ä_The confidentiality of personal data and/or files_________________Ü...",
    	interestsOrProtection: "ä_The interests or protection of any person who supplied the information_______________________Ü...",
    	protectionOfEnvironment: "ä_The protection of the environment to which such information relates______________________Ü...",
    	freeText: "ä_Free text____Ü"
    },
    
    serviceType: {
    	humanInteractionService: "ä_100 Geographic human interaction services_____________Ü", 
    	humanCatalogueViewer: "ä_101 Catalogue viewer_______Ü", 
    	humanGeographicViewer: "ä_102 Geographic viewer_______Ü", 
    	humanGeographicSpreadsheetViewer: "ä_103 Geographic spreadsheet viewer___________Ü", 
    	humanServiceEditor: "ä_104 Service editor______Ü", 
    	humanChainDefinitionEditor: "ä_105 Chain definition editor_________Ü", 
    	humanWorkflowEnactmentManager: "ä_106 Workflow enactment manager__________Ü",
    	humanGeographicFeatureEditor: "ä_107 Geographic feature editor__________Ü", 
    	humanGeographicSymbolEditor: "ä_108 Geographic symbol editor__________Ü ",
    	humanFeatureGeneralizationEditor: "ä_109 Feature generalisation editor___________Ü", 
    	humanGeographicDataStructureViewer: "ä_110 Geographic data-structure viewer____________Ü", 
    	infoManagementService: "ä_200 Geographic model/information management service________________Ü", 
    	infoFeatureAccessService: "ä_201 Feature access service_________Ü", 
    	infoMapAccessService: "ä_202 Map access service________Ü", 
    	infoCoverageAccessService: "ä_203 Coverage access service_________Ü", 
    	infoSensorDescriptionService: "ä_204 Sensor description service__________Ü", 
    	infoProductAccessService: "ä_205 Product access service_________Ü", 
    	infoFeatureTypeService: "ä_206 Feature type service________Ü", 
    	infoCatalogueService: "ä_207 Catalogue service_______Ü", 
    	infoRegistryService: "ä_208 Registry Service_______Ü", 
    	infoGazetteerService: "ä_209 Gazetteer service_______Ü", 
    	infoOrderHandlingService: "ä_210 Order handling service_________Ü", 
    	infoStandingOrderService: "ä_211 Standing order service_________Ü", 
    	taskManagementService: "ä_300 Geographic workflow/task management services_______________Ü", 
    	chainDefinitionService: "ä_301 Chain definition service_________Ü", 
    	workflowEnactmentService: "ä_302 Workflow enactment service__________Ü", 
    	subscriptionService: "ä_303 Subscription service________Ü", 
    	spatialProcessingService: "ä_400 Geographic processing services - spatial______________Ü", 
    	spatialCoordinateConversionService: "ä_401 Coordinate conversion service___________Ü", 
    	spatialCoordinateTransformationService: "ä_402 Coordinate transformation service____________Ü", 
    	spatialCoverageVectorConversionService: "ä_403 Coverage/vector conversion service____________Ü", 
    	spatialImageCoordinateConversionService: "ä_404 Image coordinate conversion service_____________Ü", 
    	spatialRectificationService: "ä_405 Rectification service_________Ü", 
    	spatialOrthorectificationService: "ä_406 Orthorectification service__________Ü", 
    	spatialSensorGeometryModelAdjustmentService: "ä_407 Sensor geometry model adjustment service______________Ü", 
    	spatialImageGeometryModelConversionService: "ä_408 Image geometry model conversion service______________Ü", 
    	spatialSubsettingService: "ä_409 Subsetting service________Ü", 
    	spatialSamplingService: "ä_410 Sampling service_______Ü", 
    	spatialTilingChangeService: "ä_411 Tiling change service_________Ü", 
    	spatialDimensionMeasurementService: "ä_412 Dimension measurement service___________Ü", 
    	spatialFeatureManipulationService: "ä_413 Feature manipulation services___________Ü", 
    	spatialFeatureMatchingService: "ä_414 Feature matching service_________Ü", 
    	spatialFeatureGeneralizationService: "ä_415 Feature generalisation service___________Ü", 
    	spatialRouteDeterminationService: "ä_416 Route determination service__________Ü", 
    	spatialPositioningService: "ä_417 Positioning service________Ü", 
    	spatialProximityAnalysisService: "ä_418 Proximity analysis service__________Ü", 
    	thematicProcessingService: "ä_500 Geographic processing services - thematic_______________Ü",
    	thematicGoparameterCalculationService: "ä_501 Geoparameter calculation service____________Ü", 
    	thematicClassificationService: "ä_502 Thematic classification service____________Ü", 
    	thematicFeatureGeneralizationService: "ä_503 Feature generalisation service___________Ü", 
    	thematicSubsettingService: "ä_504 Subsetting service________Ü", 
    	thematicSpatialCountingService: "ä_505 Spatial counting service_________Ü", 
    	thematicChangeDetectionService: "ä_506 Change detection service_________Ü", 
    	thematicGeographicInformationExtractionService: "ä_507 Geographic information extraction services_______________Ü", 
    	thematicImageProcessingService: "ä_508 Image processing service_________Ü", 
    	thematicReducedResolutionGenerationService: "ä_509 Reduced resolution generation service_____________Ü", 
    	thematicImageManipulationService: "ä_510 Image Manipulation Services__________Ü", 
    	thematicImageUnderstandingService: "ä_511 Image understanding services___________Ü", 
    	thematicImageSynthesisService: "ä_512 Image synthesis services_________Ü", 
    	thematicMultibandImageManipulationService: "ä_513 Multiband image manipulation___________Ü", 
    	thematicObjectDetectionService: "ä_514 Object detection service_________Ü", 
    	thematicGeoparsingService: "ä_515 Geoparsing service________Ü", 
    	thematicGeocodingService: "ä_516 Geocoding service_______Ü", 
    	temporalProcessingService: "ä_600 Geographic processing services - temporal_______________Ü", 
    	temporalReferenceSystemTransformationService: "ä_601 Temporal reference system transformation service_________________Ü", 
    	temporalSubsettingService: "ä_602 Subsetting service________Ü", 
    	temporalSamplingService: "ä_603 Sampling service_______Ü", 
    	temporalProximityAnalysisService: "ä_604 Temporal proximity analysis service_____________Ü", 
    	metadataProcessingService: "ä_700 Geographic processing services - metadata_______________Ü", 
    	metadataStatisticalCalculationService: "ä_701 Statistical calculation service____________Ü", 
    	metadataGeographicAnnotationService: "ä_702 Geographic annotation services___________Ü", 
    	comService: "ä_800 Geographic communication services____________Ü", 
    	comEncodingService: "ä_801 Encoding service_______Ü", 
    	comTransferService: "ä_802 Transfer service_______Ü", 
    	comGeographicCompressionService: "ä_803 Geographic compression service___________Ü", 
    	comGeographicFormatConversionService: "ä_804 Geographic format conversion service_____________Ü", 
    	comMessagingService: "ä_805 Messaging service_______Ü", 
    	comRemoteFileAndExecutableManagement: "ä_806 Remote file and executable management_____________Ü"
    },
    
    useLimitation: {
    	noCondition: "ä_No conditions apply_______Ü",
    	unknownCondition: "ä_Conditions unknown______Ü",
    	freeText: "ä_Free text____Ü"
    }

  })
);
