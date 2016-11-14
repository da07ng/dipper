define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "å_INSPIRE (Data)_____ø",
    		description: ""
    	},
    	service: {
    		caption: "å_INSPIRE (Service)______ø",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "å_Inspire Data Theme______ø"
    },
    
    inspireServiceType: {
      discovery: "Oppdagelsestjeneste",
      view: "Visningstjeneste",
      download: "Nedlastingstjeneste",
      transformation: "Forandringstjeneste",
      invoke: "Start tjeneste",
      other: "Annen tjeneste"
    },
    
    keywordSections: {
    	dataTheme: "å_Inspire Data Theme______ø",
    	serviceCategory: "å_ISO 19119 Service Category_________ø",
    	gemetConcept: "å_GEMET Concept_____ø",
    	otherKeywords: "å_Other Keywords_____ø"
    },
    
    LanguageCode: {
    	bul: "å_Bulgarian____ø",
    	cze: "å_Czech___ø",
    	dan: "å_Danish___ø",
    	dut: "å_Dutch___ø",
    	eng: "å_English___ø",
    	est: "å_Estonian___ø",
    	fin: "å_Finnish___ø",
    	fre: "å_French___ø",
    	ger: "å_German___ø",
    	gre: "å_Greek___ø",
    	hun: "å_Hungarian____ø",
    	gle: "å_Gaelic (Irish)_____ø",
    	ita: "å_Italian___ø",
    	lav: "å_Latvian___ø",
    	lit: "å_Lithuanian____ø",
    	mlt: "å_Maltese___ø",
    	pol: "å_Polish___ø", 
    	por: "å_Portuguese____ø",
    	rum: "å_Romanian___ø",
    	slo: "å_Slovak___ø",
    	slv: "å_Slovenian____ø",  	
    	spa: "å_Spanish___ø",
    	swe: "å_Swedish___ø",
    	
    	chi: "å_Chinese___ø",
    	kor: "å_Korean___ø",
    	nor: "å_Norwegian____ø",
    	rus: "å_Russian___ø",
    	tur: "å_Turkish___ø"
    },
    
    otherConstraints: {
    	noLimitations: "å_No limitations_____ø",
    	confidentialityOfProceedings: "å_The confidentiality of the proceedings of public authorities____________________ø...",
    	internationalRelations: "å_International relations, public security or national defence___________________ø",
    	courseOfJustice: "å_The course of justice, the ability of any person to receive a fair trial________________________ø...",
    	confidentialityOfCommercial: "å_The confidentiality of commercial or industrial information____________________ø...",
    	intellectualProperty: "å_Intellectual property rights_________ø",
    	confidentialityOfPersonalData: "å_The confidentiality of personal data and/or files_________________ø...",
    	interestsOrProtection: "å_The interests or protection of any person who supplied the information_______________________ø...",
    	protectionOfEnvironment: "å_The protection of the environment to which such information relates______________________ø...",
    	freeText: "å_Free text____ø"
    },
    
    serviceType: {
    	humanInteractionService: "å_100 Geographic human interaction services_____________ø", 
    	humanCatalogueViewer: "å_101 Catalogue viewer_______ø", 
    	humanGeographicViewer: "å_102 Geographic viewer_______ø", 
    	humanGeographicSpreadsheetViewer: "å_103 Geographic spreadsheet viewer___________ø", 
    	humanServiceEditor: "å_104 Service editor______ø", 
    	humanChainDefinitionEditor: "å_105 Chain definition editor_________ø", 
    	humanWorkflowEnactmentManager: "å_106 Workflow enactment manager__________ø",
    	humanGeographicFeatureEditor: "å_107 Geographic feature editor__________ø", 
    	humanGeographicSymbolEditor: "å_108 Geographic symbol editor__________ø ",
    	humanFeatureGeneralizationEditor: "å_109 Feature generalisation editor___________ø", 
    	humanGeographicDataStructureViewer: "å_110 Geographic data-structure viewer____________ø", 
    	infoManagementService: "å_200 Geographic model/information management service________________ø", 
    	infoFeatureAccessService: "å_201 Feature access service_________ø", 
    	infoMapAccessService: "å_202 Map access service________ø", 
    	infoCoverageAccessService: "å_203 Coverage access service_________ø", 
    	infoSensorDescriptionService: "å_204 Sensor description service__________ø", 
    	infoProductAccessService: "å_205 Product access service_________ø", 
    	infoFeatureTypeService: "å_206 Feature type service________ø", 
    	infoCatalogueService: "å_207 Catalogue service_______ø", 
    	infoRegistryService: "å_208 Registry Service_______ø", 
    	infoGazetteerService: "å_209 Gazetteer service_______ø", 
    	infoOrderHandlingService: "å_210 Order handling service_________ø", 
    	infoStandingOrderService: "å_211 Standing order service_________ø", 
    	taskManagementService: "å_300 Geographic workflow/task management services_______________ø", 
    	chainDefinitionService: "å_301 Chain definition service_________ø", 
    	workflowEnactmentService: "å_302 Workflow enactment service__________ø", 
    	subscriptionService: "å_303 Subscription service________ø", 
    	spatialProcessingService: "å_400 Geographic processing services - spatial______________ø", 
    	spatialCoordinateConversionService: "å_401 Coordinate conversion service___________ø", 
    	spatialCoordinateTransformationService: "å_402 Coordinate transformation service____________ø", 
    	spatialCoverageVectorConversionService: "å_403 Coverage/vector conversion service____________ø", 
    	spatialImageCoordinateConversionService: "å_404 Image coordinate conversion service_____________ø", 
    	spatialRectificationService: "å_405 Rectification service_________ø", 
    	spatialOrthorectificationService: "å_406 Orthorectification service__________ø", 
    	spatialSensorGeometryModelAdjustmentService: "å_407 Sensor geometry model adjustment service______________ø", 
    	spatialImageGeometryModelConversionService: "å_408 Image geometry model conversion service______________ø", 
    	spatialSubsettingService: "å_409 Subsetting service________ø", 
    	spatialSamplingService: "å_410 Sampling service_______ø", 
    	spatialTilingChangeService: "å_411 Tiling change service_________ø", 
    	spatialDimensionMeasurementService: "å_412 Dimension measurement service___________ø", 
    	spatialFeatureManipulationService: "å_413 Feature manipulation services___________ø", 
    	spatialFeatureMatchingService: "å_414 Feature matching service_________ø", 
    	spatialFeatureGeneralizationService: "å_415 Feature generalisation service___________ø", 
    	spatialRouteDeterminationService: "å_416 Route determination service__________ø", 
    	spatialPositioningService: "å_417 Positioning service________ø", 
    	spatialProximityAnalysisService: "å_418 Proximity analysis service__________ø", 
    	thematicProcessingService: "å_500 Geographic processing services - thematic_______________ø",
    	thematicGoparameterCalculationService: "å_501 Geoparameter calculation service____________ø", 
    	thematicClassificationService: "å_502 Thematic classification service____________ø", 
    	thematicFeatureGeneralizationService: "å_503 Feature generalisation service___________ø", 
    	thematicSubsettingService: "å_504 Subsetting service________ø", 
    	thematicSpatialCountingService: "å_505 Spatial counting service_________ø", 
    	thematicChangeDetectionService: "å_506 Change detection service_________ø", 
    	thematicGeographicInformationExtractionService: "å_507 Geographic information extraction services_______________ø", 
    	thematicImageProcessingService: "å_508 Image processing service_________ø", 
    	thematicReducedResolutionGenerationService: "å_509 Reduced resolution generation service_____________ø", 
    	thematicImageManipulationService: "å_510 Image Manipulation Services__________ø", 
    	thematicImageUnderstandingService: "å_511 Image understanding services___________ø", 
    	thematicImageSynthesisService: "å_512 Image synthesis services_________ø", 
    	thematicMultibandImageManipulationService: "å_513 Multiband image manipulation___________ø", 
    	thematicObjectDetectionService: "å_514 Object detection service_________ø", 
    	thematicGeoparsingService: "å_515 Geoparsing service________ø", 
    	thematicGeocodingService: "å_516 Geocoding service_______ø", 
    	temporalProcessingService: "å_600 Geographic processing services - temporal_______________ø", 
    	temporalReferenceSystemTransformationService: "å_601 Temporal reference system transformation service_________________ø", 
    	temporalSubsettingService: "å_602 Subsetting service________ø", 
    	temporalSamplingService: "å_603 Sampling service_______ø", 
    	temporalProximityAnalysisService: "å_604 Temporal proximity analysis service_____________ø", 
    	metadataProcessingService: "å_700 Geographic processing services - metadata_______________ø", 
    	metadataStatisticalCalculationService: "å_701 Statistical calculation service____________ø", 
    	metadataGeographicAnnotationService: "å_702 Geographic annotation services___________ø", 
    	comService: "å_800 Geographic communication services____________ø", 
    	comEncodingService: "å_801 Encoding service_______ø", 
    	comTransferService: "å_802 Transfer service_______ø", 
    	comGeographicCompressionService: "å_803 Geographic compression service___________ø", 
    	comGeographicFormatConversionService: "å_804 Geographic format conversion service_____________ø", 
    	comMessagingService: "å_805 Messaging service_______ø", 
    	comRemoteFileAndExecutableManagement: "å_806 Remote file and executable management_____________ø"
    },
    
    useLimitation: {
    	noCondition: "å_No conditions apply_______ø",
    	unknownCondition: "å_Conditions unknown______ø",
    	freeText: "å_Free text____ø"
    }

  })
);
