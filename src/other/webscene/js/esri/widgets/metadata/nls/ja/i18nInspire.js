define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "須_INSPIRE (Data)_____鷗",
    		description: ""
    	},
    	service: {
    		caption: "須_INSPIRE (Service)______鷗",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "須_Inspire Data Theme______鷗"
    },
    
    inspireServiceType: {
      discovery: "検出サービス",
      view: "サービスの表示",
      download: "サービスのダウンロード",
      transformation: "座標変換サービス",
      invoke: "サービスの呼び出し",
      other: "その他のサービス"
    },
    
    keywordSections: {
    	dataTheme: "須_Inspire Data Theme______鷗",
    	serviceCategory: "須_ISO 19119 Service Category_________鷗",
    	gemetConcept: "須_GEMET Concept_____鷗",
    	otherKeywords: "須_Other Keywords_____鷗"
    },
    
    LanguageCode: {
    	bul: "須_Bulgarian____鷗",
    	cze: "須_Czech___鷗",
    	dan: "須_Danish___鷗",
    	dut: "須_Dutch___鷗",
    	eng: "須_English___鷗",
    	est: "須_Estonian___鷗",
    	fin: "須_Finnish___鷗",
    	fre: "須_French___鷗",
    	ger: "須_German___鷗",
    	gre: "須_Greek___鷗",
    	hun: "須_Hungarian____鷗",
    	gle: "須_Gaelic (Irish)_____鷗",
    	ita: "須_Italian___鷗",
    	lav: "須_Latvian___鷗",
    	lit: "須_Lithuanian____鷗",
    	mlt: "須_Maltese___鷗",
    	pol: "須_Polish___鷗", 
    	por: "須_Portuguese____鷗",
    	rum: "須_Romanian___鷗",
    	slo: "須_Slovak___鷗",
    	slv: "須_Slovenian____鷗",  	
    	spa: "須_Spanish___鷗",
    	swe: "須_Swedish___鷗",
    	
    	chi: "須_Chinese___鷗",
    	kor: "須_Korean___鷗",
    	nor: "須_Norwegian____鷗",
    	rus: "須_Russian___鷗",
    	tur: "須_Turkish___鷗"
    },
    
    otherConstraints: {
    	noLimitations: "須_No limitations_____鷗",
    	confidentialityOfProceedings: "須_The confidentiality of the proceedings of public authorities____________________鷗...",
    	internationalRelations: "須_International relations, public security or national defence___________________鷗",
    	courseOfJustice: "須_The course of justice, the ability of any person to receive a fair trial________________________鷗...",
    	confidentialityOfCommercial: "須_The confidentiality of commercial or industrial information____________________鷗...",
    	intellectualProperty: "須_Intellectual property rights_________鷗",
    	confidentialityOfPersonalData: "須_The confidentiality of personal data and/or files_________________鷗...",
    	interestsOrProtection: "須_The interests or protection of any person who supplied the information_______________________鷗...",
    	protectionOfEnvironment: "須_The protection of the environment to which such information relates______________________鷗...",
    	freeText: "須_Free text____鷗"
    },
    
    serviceType: {
    	humanInteractionService: "須_100 Geographic human interaction services_____________鷗", 
    	humanCatalogueViewer: "須_101 Catalogue viewer_______鷗", 
    	humanGeographicViewer: "須_102 Geographic viewer_______鷗", 
    	humanGeographicSpreadsheetViewer: "須_103 Geographic spreadsheet viewer___________鷗", 
    	humanServiceEditor: "須_104 Service editor______鷗", 
    	humanChainDefinitionEditor: "須_105 Chain definition editor_________鷗", 
    	humanWorkflowEnactmentManager: "須_106 Workflow enactment manager__________鷗",
    	humanGeographicFeatureEditor: "須_107 Geographic feature editor__________鷗", 
    	humanGeographicSymbolEditor: "須_108 Geographic symbol editor__________鷗 ",
    	humanFeatureGeneralizationEditor: "須_109 Feature generalisation editor___________鷗", 
    	humanGeographicDataStructureViewer: "須_110 Geographic data-structure viewer____________鷗", 
    	infoManagementService: "須_200 Geographic model/information management service________________鷗", 
    	infoFeatureAccessService: "須_201 Feature access service_________鷗", 
    	infoMapAccessService: "須_202 Map access service________鷗", 
    	infoCoverageAccessService: "須_203 Coverage access service_________鷗", 
    	infoSensorDescriptionService: "須_204 Sensor description service__________鷗", 
    	infoProductAccessService: "須_205 Product access service_________鷗", 
    	infoFeatureTypeService: "須_206 Feature type service________鷗", 
    	infoCatalogueService: "須_207 Catalogue service_______鷗", 
    	infoRegistryService: "須_208 Registry Service_______鷗", 
    	infoGazetteerService: "須_209 Gazetteer service_______鷗", 
    	infoOrderHandlingService: "須_210 Order handling service_________鷗", 
    	infoStandingOrderService: "須_211 Standing order service_________鷗", 
    	taskManagementService: "須_300 Geographic workflow/task management services_______________鷗", 
    	chainDefinitionService: "須_301 Chain definition service_________鷗", 
    	workflowEnactmentService: "須_302 Workflow enactment service__________鷗", 
    	subscriptionService: "須_303 Subscription service________鷗", 
    	spatialProcessingService: "須_400 Geographic processing services - spatial______________鷗", 
    	spatialCoordinateConversionService: "須_401 Coordinate conversion service___________鷗", 
    	spatialCoordinateTransformationService: "須_402 Coordinate transformation service____________鷗", 
    	spatialCoverageVectorConversionService: "須_403 Coverage/vector conversion service____________鷗", 
    	spatialImageCoordinateConversionService: "須_404 Image coordinate conversion service_____________鷗", 
    	spatialRectificationService: "須_405 Rectification service_________鷗", 
    	spatialOrthorectificationService: "須_406 Orthorectification service__________鷗", 
    	spatialSensorGeometryModelAdjustmentService: "須_407 Sensor geometry model adjustment service______________鷗", 
    	spatialImageGeometryModelConversionService: "須_408 Image geometry model conversion service______________鷗", 
    	spatialSubsettingService: "須_409 Subsetting service________鷗", 
    	spatialSamplingService: "須_410 Sampling service_______鷗", 
    	spatialTilingChangeService: "須_411 Tiling change service_________鷗", 
    	spatialDimensionMeasurementService: "須_412 Dimension measurement service___________鷗", 
    	spatialFeatureManipulationService: "須_413 Feature manipulation services___________鷗", 
    	spatialFeatureMatchingService: "須_414 Feature matching service_________鷗", 
    	spatialFeatureGeneralizationService: "須_415 Feature generalisation service___________鷗", 
    	spatialRouteDeterminationService: "須_416 Route determination service__________鷗", 
    	spatialPositioningService: "須_417 Positioning service________鷗", 
    	spatialProximityAnalysisService: "須_418 Proximity analysis service__________鷗", 
    	thematicProcessingService: "須_500 Geographic processing services - thematic_______________鷗",
    	thematicGoparameterCalculationService: "須_501 Geoparameter calculation service____________鷗", 
    	thematicClassificationService: "須_502 Thematic classification service____________鷗", 
    	thematicFeatureGeneralizationService: "須_503 Feature generalisation service___________鷗", 
    	thematicSubsettingService: "須_504 Subsetting service________鷗", 
    	thematicSpatialCountingService: "須_505 Spatial counting service_________鷗", 
    	thematicChangeDetectionService: "須_506 Change detection service_________鷗", 
    	thematicGeographicInformationExtractionService: "須_507 Geographic information extraction services_______________鷗", 
    	thematicImageProcessingService: "須_508 Image processing service_________鷗", 
    	thematicReducedResolutionGenerationService: "須_509 Reduced resolution generation service_____________鷗", 
    	thematicImageManipulationService: "須_510 Image Manipulation Services__________鷗", 
    	thematicImageUnderstandingService: "須_511 Image understanding services___________鷗", 
    	thematicImageSynthesisService: "須_512 Image synthesis services_________鷗", 
    	thematicMultibandImageManipulationService: "須_513 Multiband image manipulation___________鷗", 
    	thematicObjectDetectionService: "須_514 Object detection service_________鷗", 
    	thematicGeoparsingService: "須_515 Geoparsing service________鷗", 
    	thematicGeocodingService: "須_516 Geocoding service_______鷗", 
    	temporalProcessingService: "須_600 Geographic processing services - temporal_______________鷗", 
    	temporalReferenceSystemTransformationService: "須_601 Temporal reference system transformation service_________________鷗", 
    	temporalSubsettingService: "須_602 Subsetting service________鷗", 
    	temporalSamplingService: "須_603 Sampling service_______鷗", 
    	temporalProximityAnalysisService: "須_604 Temporal proximity analysis service_____________鷗", 
    	metadataProcessingService: "須_700 Geographic processing services - metadata_______________鷗", 
    	metadataStatisticalCalculationService: "須_701 Statistical calculation service____________鷗", 
    	metadataGeographicAnnotationService: "須_702 Geographic annotation services___________鷗", 
    	comService: "須_800 Geographic communication services____________鷗", 
    	comEncodingService: "須_801 Encoding service_______鷗", 
    	comTransferService: "須_802 Transfer service_______鷗", 
    	comGeographicCompressionService: "須_803 Geographic compression service___________鷗", 
    	comGeographicFormatConversionService: "須_804 Geographic format conversion service_____________鷗", 
    	comMessagingService: "須_805 Messaging service_______鷗", 
    	comRemoteFileAndExecutableManagement: "須_806 Remote file and executable management_____________鷗"
    },
    
    useLimitation: {
    	noCondition: "須_No conditions apply_______鷗",
    	unknownCondition: "須_Conditions unknown______鷗",
    	freeText: "須_Free text____鷗"
    }

  })
);
