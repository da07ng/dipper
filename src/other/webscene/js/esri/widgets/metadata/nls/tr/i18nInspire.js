define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ı_INSPIRE (Data)_____İ",
    		description: ""
    	},
    	service: {
    		caption: "ı_INSPIRE (Service)______İ",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ı_Inspire Data Theme______İ"
    },
    
    inspireServiceType: {
      discovery: "Keşif Hizmeti",
      view: "Görüntüleme Hizmeti",
      download: "İndirme Hizmeti",
      transformation: "Dönüşüm Hizmeti",
      invoke: "Çağırma Hizmeti",
      other: "Diğer Hizmetler"
    },
    
    keywordSections: {
    	dataTheme: "ı_Inspire Data Theme______İ",
    	serviceCategory: "ı_ISO 19119 Service Category_________İ",
    	gemetConcept: "ı_GEMET Concept_____İ",
    	otherKeywords: "ı_Other Keywords_____İ"
    },
    
    LanguageCode: {
    	bul: "ı_Bulgarian____İ",
    	cze: "ı_Czech___İ",
    	dan: "ı_Danish___İ",
    	dut: "ı_Dutch___İ",
    	eng: "ı_English___İ",
    	est: "ı_Estonian___İ",
    	fin: "ı_Finnish___İ",
    	fre: "ı_French___İ",
    	ger: "ı_German___İ",
    	gre: "ı_Greek___İ",
    	hun: "ı_Hungarian____İ",
    	gle: "ı_Gaelic (Irish)_____İ",
    	ita: "ı_Italian___İ",
    	lav: "ı_Latvian___İ",
    	lit: "ı_Lithuanian____İ",
    	mlt: "ı_Maltese___İ",
    	pol: "ı_Polish___İ", 
    	por: "ı_Portuguese____İ",
    	rum: "ı_Romanian___İ",
    	slo: "ı_Slovak___İ",
    	slv: "ı_Slovenian____İ",  	
    	spa: "ı_Spanish___İ",
    	swe: "ı_Swedish___İ",
    	
    	chi: "ı_Chinese___İ",
    	kor: "ı_Korean___İ",
    	nor: "ı_Norwegian____İ",
    	rus: "ı_Russian___İ",
    	tur: "ı_Turkish___İ"
    },
    
    otherConstraints: {
    	noLimitations: "ı_No limitations_____İ",
    	confidentialityOfProceedings: "ı_The confidentiality of the proceedings of public authorities____________________İ...",
    	internationalRelations: "ı_International relations, public security or national defence___________________İ",
    	courseOfJustice: "ı_The course of justice, the ability of any person to receive a fair trial________________________İ...",
    	confidentialityOfCommercial: "ı_The confidentiality of commercial or industrial information____________________İ...",
    	intellectualProperty: "ı_Intellectual property rights_________İ",
    	confidentialityOfPersonalData: "ı_The confidentiality of personal data and/or files_________________İ...",
    	interestsOrProtection: "ı_The interests or protection of any person who supplied the information_______________________İ...",
    	protectionOfEnvironment: "ı_The protection of the environment to which such information relates______________________İ...",
    	freeText: "ı_Free text____İ"
    },
    
    serviceType: {
    	humanInteractionService: "ı_100 Geographic human interaction services_____________İ", 
    	humanCatalogueViewer: "ı_101 Catalogue viewer_______İ", 
    	humanGeographicViewer: "ı_102 Geographic viewer_______İ", 
    	humanGeographicSpreadsheetViewer: "ı_103 Geographic spreadsheet viewer___________İ", 
    	humanServiceEditor: "ı_104 Service editor______İ", 
    	humanChainDefinitionEditor: "ı_105 Chain definition editor_________İ", 
    	humanWorkflowEnactmentManager: "ı_106 Workflow enactment manager__________İ",
    	humanGeographicFeatureEditor: "ı_107 Geographic feature editor__________İ", 
    	humanGeographicSymbolEditor: "ı_108 Geographic symbol editor__________İ ",
    	humanFeatureGeneralizationEditor: "ı_109 Feature generalisation editor___________İ", 
    	humanGeographicDataStructureViewer: "ı_110 Geographic data-structure viewer____________İ", 
    	infoManagementService: "ı_200 Geographic model/information management service________________İ", 
    	infoFeatureAccessService: "ı_201 Feature access service_________İ", 
    	infoMapAccessService: "ı_202 Map access service________İ", 
    	infoCoverageAccessService: "ı_203 Coverage access service_________İ", 
    	infoSensorDescriptionService: "ı_204 Sensor description service__________İ", 
    	infoProductAccessService: "ı_205 Product access service_________İ", 
    	infoFeatureTypeService: "ı_206 Feature type service________İ", 
    	infoCatalogueService: "ı_207 Catalogue service_______İ", 
    	infoRegistryService: "ı_208 Registry Service_______İ", 
    	infoGazetteerService: "ı_209 Gazetteer service_______İ", 
    	infoOrderHandlingService: "ı_210 Order handling service_________İ", 
    	infoStandingOrderService: "ı_211 Standing order service_________İ", 
    	taskManagementService: "ı_300 Geographic workflow/task management services_______________İ", 
    	chainDefinitionService: "ı_301 Chain definition service_________İ", 
    	workflowEnactmentService: "ı_302 Workflow enactment service__________İ", 
    	subscriptionService: "ı_303 Subscription service________İ", 
    	spatialProcessingService: "ı_400 Geographic processing services - spatial______________İ", 
    	spatialCoordinateConversionService: "ı_401 Coordinate conversion service___________İ", 
    	spatialCoordinateTransformationService: "ı_402 Coordinate transformation service____________İ", 
    	spatialCoverageVectorConversionService: "ı_403 Coverage/vector conversion service____________İ", 
    	spatialImageCoordinateConversionService: "ı_404 Image coordinate conversion service_____________İ", 
    	spatialRectificationService: "ı_405 Rectification service_________İ", 
    	spatialOrthorectificationService: "ı_406 Orthorectification service__________İ", 
    	spatialSensorGeometryModelAdjustmentService: "ı_407 Sensor geometry model adjustment service______________İ", 
    	spatialImageGeometryModelConversionService: "ı_408 Image geometry model conversion service______________İ", 
    	spatialSubsettingService: "ı_409 Subsetting service________İ", 
    	spatialSamplingService: "ı_410 Sampling service_______İ", 
    	spatialTilingChangeService: "ı_411 Tiling change service_________İ", 
    	spatialDimensionMeasurementService: "ı_412 Dimension measurement service___________İ", 
    	spatialFeatureManipulationService: "ı_413 Feature manipulation services___________İ", 
    	spatialFeatureMatchingService: "ı_414 Feature matching service_________İ", 
    	spatialFeatureGeneralizationService: "ı_415 Feature generalisation service___________İ", 
    	spatialRouteDeterminationService: "ı_416 Route determination service__________İ", 
    	spatialPositioningService: "ı_417 Positioning service________İ", 
    	spatialProximityAnalysisService: "ı_418 Proximity analysis service__________İ", 
    	thematicProcessingService: "ı_500 Geographic processing services - thematic_______________İ",
    	thematicGoparameterCalculationService: "ı_501 Geoparameter calculation service____________İ", 
    	thematicClassificationService: "ı_502 Thematic classification service____________İ", 
    	thematicFeatureGeneralizationService: "ı_503 Feature generalisation service___________İ", 
    	thematicSubsettingService: "ı_504 Subsetting service________İ", 
    	thematicSpatialCountingService: "ı_505 Spatial counting service_________İ", 
    	thematicChangeDetectionService: "ı_506 Change detection service_________İ", 
    	thematicGeographicInformationExtractionService: "ı_507 Geographic information extraction services_______________İ", 
    	thematicImageProcessingService: "ı_508 Image processing service_________İ", 
    	thematicReducedResolutionGenerationService: "ı_509 Reduced resolution generation service_____________İ", 
    	thematicImageManipulationService: "ı_510 Image Manipulation Services__________İ", 
    	thematicImageUnderstandingService: "ı_511 Image understanding services___________İ", 
    	thematicImageSynthesisService: "ı_512 Image synthesis services_________İ", 
    	thematicMultibandImageManipulationService: "ı_513 Multiband image manipulation___________İ", 
    	thematicObjectDetectionService: "ı_514 Object detection service_________İ", 
    	thematicGeoparsingService: "ı_515 Geoparsing service________İ", 
    	thematicGeocodingService: "ı_516 Geocoding service_______İ", 
    	temporalProcessingService: "ı_600 Geographic processing services - temporal_______________İ", 
    	temporalReferenceSystemTransformationService: "ı_601 Temporal reference system transformation service_________________İ", 
    	temporalSubsettingService: "ı_602 Subsetting service________İ", 
    	temporalSamplingService: "ı_603 Sampling service_______İ", 
    	temporalProximityAnalysisService: "ı_604 Temporal proximity analysis service_____________İ", 
    	metadataProcessingService: "ı_700 Geographic processing services - metadata_______________İ", 
    	metadataStatisticalCalculationService: "ı_701 Statistical calculation service____________İ", 
    	metadataGeographicAnnotationService: "ı_702 Geographic annotation services___________İ", 
    	comService: "ı_800 Geographic communication services____________İ", 
    	comEncodingService: "ı_801 Encoding service_______İ", 
    	comTransferService: "ı_802 Transfer service_______İ", 
    	comGeographicCompressionService: "ı_803 Geographic compression service___________İ", 
    	comGeographicFormatConversionService: "ı_804 Geographic format conversion service_____________İ", 
    	comMessagingService: "ı_805 Messaging service_______İ", 
    	comRemoteFileAndExecutableManagement: "ı_806 Remote file and executable management_____________İ"
    },
    
    useLimitation: {
    	noCondition: "ı_No conditions apply_______İ",
    	unknownCondition: "ı_Conditions unknown______İ",
    	freeText: "ı_Free text____İ"
    }

  })
);
