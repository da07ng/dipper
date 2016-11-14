define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "试_INSPIRE (Data)_____验",
    		description: ""
    	},
    	service: {
    		caption: "试_INSPIRE (Service)______验",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "试_Inspire Data Theme______验"
    },
    
    inspireServiceType: {
      discovery: "发现服务",
      view: "查看服务",
      download: "下载服务",
      transformation: "转换服务",
      invoke: "调用服务",
      other: "其他服务"
    },
    
    keywordSections: {
    	dataTheme: "试_Inspire Data Theme______验",
    	serviceCategory: "试_ISO 19119 Service Category_________验",
    	gemetConcept: "试_GEMET Concept_____验",
    	otherKeywords: "试_Other Keywords_____验"
    },
    
    LanguageCode: {
    	bul: "试_Bulgarian____验",
    	cze: "试_Czech___验",
    	dan: "试_Danish___验",
    	dut: "试_Dutch___验",
    	eng: "试_English___验",
    	est: "试_Estonian___验",
    	fin: "试_Finnish___验",
    	fre: "试_French___验",
    	ger: "试_German___验",
    	gre: "试_Greek___验",
    	hun: "试_Hungarian____验",
    	gle: "试_Gaelic (Irish)_____验",
    	ita: "试_Italian___验",
    	lav: "试_Latvian___验",
    	lit: "试_Lithuanian____验",
    	mlt: "试_Maltese___验",
    	pol: "试_Polish___验", 
    	por: "试_Portuguese____验",
    	rum: "试_Romanian___验",
    	slo: "试_Slovak___验",
    	slv: "试_Slovenian____验",  	
    	spa: "试_Spanish___验",
    	swe: "试_Swedish___验",
    	
    	chi: "试_Chinese___验",
    	kor: "试_Korean___验",
    	nor: "试_Norwegian____验",
    	rus: "试_Russian___验",
    	tur: "试_Turkish___验"
    },
    
    otherConstraints: {
    	noLimitations: "试_No limitations_____验",
    	confidentialityOfProceedings: "试_The confidentiality of the proceedings of public authorities____________________验...",
    	internationalRelations: "试_International relations, public security or national defence___________________验",
    	courseOfJustice: "试_The course of justice, the ability of any person to receive a fair trial________________________验...",
    	confidentialityOfCommercial: "试_The confidentiality of commercial or industrial information____________________验...",
    	intellectualProperty: "试_Intellectual property rights_________验",
    	confidentialityOfPersonalData: "试_The confidentiality of personal data and/or files_________________验...",
    	interestsOrProtection: "试_The interests or protection of any person who supplied the information_______________________验...",
    	protectionOfEnvironment: "试_The protection of the environment to which such information relates______________________验...",
    	freeText: "试_Free text____验"
    },
    
    serviceType: {
    	humanInteractionService: "试_100 Geographic human interaction services_____________验", 
    	humanCatalogueViewer: "试_101 Catalogue viewer_______验", 
    	humanGeographicViewer: "试_102 Geographic viewer_______验", 
    	humanGeographicSpreadsheetViewer: "试_103 Geographic spreadsheet viewer___________验", 
    	humanServiceEditor: "试_104 Service editor______验", 
    	humanChainDefinitionEditor: "试_105 Chain definition editor_________验", 
    	humanWorkflowEnactmentManager: "试_106 Workflow enactment manager__________验",
    	humanGeographicFeatureEditor: "试_107 Geographic feature editor__________验", 
    	humanGeographicSymbolEditor: "试_108 Geographic symbol editor__________验 ",
    	humanFeatureGeneralizationEditor: "试_109 Feature generalisation editor___________验", 
    	humanGeographicDataStructureViewer: "试_110 Geographic data-structure viewer____________验", 
    	infoManagementService: "试_200 Geographic model/information management service________________验", 
    	infoFeatureAccessService: "试_201 Feature access service_________验", 
    	infoMapAccessService: "试_202 Map access service________验", 
    	infoCoverageAccessService: "试_203 Coverage access service_________验", 
    	infoSensorDescriptionService: "试_204 Sensor description service__________验", 
    	infoProductAccessService: "试_205 Product access service_________验", 
    	infoFeatureTypeService: "试_206 Feature type service________验", 
    	infoCatalogueService: "试_207 Catalogue service_______验", 
    	infoRegistryService: "试_208 Registry Service_______验", 
    	infoGazetteerService: "试_209 Gazetteer service_______验", 
    	infoOrderHandlingService: "试_210 Order handling service_________验", 
    	infoStandingOrderService: "试_211 Standing order service_________验", 
    	taskManagementService: "试_300 Geographic workflow/task management services_______________验", 
    	chainDefinitionService: "试_301 Chain definition service_________验", 
    	workflowEnactmentService: "试_302 Workflow enactment service__________验", 
    	subscriptionService: "试_303 Subscription service________验", 
    	spatialProcessingService: "试_400 Geographic processing services - spatial______________验", 
    	spatialCoordinateConversionService: "试_401 Coordinate conversion service___________验", 
    	spatialCoordinateTransformationService: "试_402 Coordinate transformation service____________验", 
    	spatialCoverageVectorConversionService: "试_403 Coverage/vector conversion service____________验", 
    	spatialImageCoordinateConversionService: "试_404 Image coordinate conversion service_____________验", 
    	spatialRectificationService: "试_405 Rectification service_________验", 
    	spatialOrthorectificationService: "试_406 Orthorectification service__________验", 
    	spatialSensorGeometryModelAdjustmentService: "试_407 Sensor geometry model adjustment service______________验", 
    	spatialImageGeometryModelConversionService: "试_408 Image geometry model conversion service______________验", 
    	spatialSubsettingService: "试_409 Subsetting service________验", 
    	spatialSamplingService: "试_410 Sampling service_______验", 
    	spatialTilingChangeService: "试_411 Tiling change service_________验", 
    	spatialDimensionMeasurementService: "试_412 Dimension measurement service___________验", 
    	spatialFeatureManipulationService: "试_413 Feature manipulation services___________验", 
    	spatialFeatureMatchingService: "试_414 Feature matching service_________验", 
    	spatialFeatureGeneralizationService: "试_415 Feature generalisation service___________验", 
    	spatialRouteDeterminationService: "试_416 Route determination service__________验", 
    	spatialPositioningService: "试_417 Positioning service________验", 
    	spatialProximityAnalysisService: "试_418 Proximity analysis service__________验", 
    	thematicProcessingService: "试_500 Geographic processing services - thematic_______________验",
    	thematicGoparameterCalculationService: "试_501 Geoparameter calculation service____________验", 
    	thematicClassificationService: "试_502 Thematic classification service____________验", 
    	thematicFeatureGeneralizationService: "试_503 Feature generalisation service___________验", 
    	thematicSubsettingService: "试_504 Subsetting service________验", 
    	thematicSpatialCountingService: "试_505 Spatial counting service_________验", 
    	thematicChangeDetectionService: "试_506 Change detection service_________验", 
    	thematicGeographicInformationExtractionService: "试_507 Geographic information extraction services_______________验", 
    	thematicImageProcessingService: "试_508 Image processing service_________验", 
    	thematicReducedResolutionGenerationService: "试_509 Reduced resolution generation service_____________验", 
    	thematicImageManipulationService: "试_510 Image Manipulation Services__________验", 
    	thematicImageUnderstandingService: "试_511 Image understanding services___________验", 
    	thematicImageSynthesisService: "试_512 Image synthesis services_________验", 
    	thematicMultibandImageManipulationService: "试_513 Multiband image manipulation___________验", 
    	thematicObjectDetectionService: "试_514 Object detection service_________验", 
    	thematicGeoparsingService: "试_515 Geoparsing service________验", 
    	thematicGeocodingService: "试_516 Geocoding service_______验", 
    	temporalProcessingService: "试_600 Geographic processing services - temporal_______________验", 
    	temporalReferenceSystemTransformationService: "试_601 Temporal reference system transformation service_________________验", 
    	temporalSubsettingService: "试_602 Subsetting service________验", 
    	temporalSamplingService: "试_603 Sampling service_______验", 
    	temporalProximityAnalysisService: "试_604 Temporal proximity analysis service_____________验", 
    	metadataProcessingService: "试_700 Geographic processing services - metadata_______________验", 
    	metadataStatisticalCalculationService: "试_701 Statistical calculation service____________验", 
    	metadataGeographicAnnotationService: "试_702 Geographic annotation services___________验", 
    	comService: "试_800 Geographic communication services____________验", 
    	comEncodingService: "试_801 Encoding service_______验", 
    	comTransferService: "试_802 Transfer service_______验", 
    	comGeographicCompressionService: "试_803 Geographic compression service___________验", 
    	comGeographicFormatConversionService: "试_804 Geographic format conversion service_____________验", 
    	comMessagingService: "试_805 Messaging service_______验", 
    	comRemoteFileAndExecutableManagement: "试_806 Remote file and executable management_____________验"
    },
    
    useLimitation: {
    	noCondition: "试_No conditions apply_______验",
    	unknownCondition: "试_Conditions unknown______验",
    	freeText: "试_Free text____验"
    }

  })
);
