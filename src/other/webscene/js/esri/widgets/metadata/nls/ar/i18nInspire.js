define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "بيت_INSPIRE (Data)_____لاحقة",
    		description: ""
    	},
    	service: {
    		caption: "بيت_INSPIRE (Service)______لاحقة",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "بيت_Inspire Data Theme______لاحقة"
    },
    
    inspireServiceType: {
      discovery: "خدمة الاستكشاف",
      view: "عرض الخدمة",
      download: "تنزيل الخدمة",
      transformation: "خدمة التحويل",
      invoke: "استدعاء خدمة",
      other: "خدمة أخرى"
    },
    
    keywordSections: {
    	dataTheme: "بيت_Inspire Data Theme______لاحقة",
    	serviceCategory: "بيت_ISO 19119 Service Category_________لاحقة",
    	gemetConcept: "بيت_GEMET Concept_____لاحقة",
    	otherKeywords: "بيت_Other Keywords_____لاحقة"
    },
    
    LanguageCode: {
    	bul: "بيت_Bulgarian____لاحقة",
    	cze: "بيت_Czech___لاحقة",
    	dan: "بيت_Danish___لاحقة",
    	dut: "بيت_Dutch___لاحقة",
    	eng: "بيت_English___لاحقة",
    	est: "بيت_Estonian___لاحقة",
    	fin: "بيت_Finnish___لاحقة",
    	fre: "بيت_French___لاحقة",
    	ger: "بيت_German___لاحقة",
    	gre: "بيت_Greek___لاحقة",
    	hun: "بيت_Hungarian____لاحقة",
    	gle: "بيت_Gaelic (Irish)_____لاحقة",
    	ita: "بيت_Italian___لاحقة",
    	lav: "بيت_Latvian___لاحقة",
    	lit: "بيت_Lithuanian____لاحقة",
    	mlt: "بيت_Maltese___لاحقة",
    	pol: "بيت_Polish___لاحقة", 
    	por: "بيت_Portuguese____لاحقة",
    	rum: "بيت_Romanian___لاحقة",
    	slo: "بيت_Slovak___لاحقة",
    	slv: "بيت_Slovenian____لاحقة",  	
    	spa: "بيت_Spanish___لاحقة",
    	swe: "بيت_Swedish___لاحقة",
    	
    	chi: "بيت_Chinese___لاحقة",
    	kor: "بيت_Korean___لاحقة",
    	nor: "بيت_Norwegian____لاحقة",
    	rus: "بيت_Russian___لاحقة",
    	tur: "بيت_Turkish___لاحقة"
    },
    
    otherConstraints: {
    	noLimitations: "بيت_No limitations_____لاحقة",
    	confidentialityOfProceedings: "بيت_The confidentiality of the proceedings of public authorities____________________لاحقة...",
    	internationalRelations: "بيت_International relations, public security or national defence___________________لاحقة",
    	courseOfJustice: "بيت_The course of justice, the ability of any person to receive a fair trial________________________لاحقة...",
    	confidentialityOfCommercial: "بيت_The confidentiality of commercial or industrial information____________________لاحقة...",
    	intellectualProperty: "بيت_Intellectual property rights_________لاحقة",
    	confidentialityOfPersonalData: "بيت_The confidentiality of personal data and/or files_________________لاحقة...",
    	interestsOrProtection: "بيت_The interests or protection of any person who supplied the information_______________________لاحقة...",
    	protectionOfEnvironment: "بيت_The protection of the environment to which such information relates______________________لاحقة...",
    	freeText: "بيت_Free text____لاحقة"
    },
    
    serviceType: {
    	humanInteractionService: "بيت_100 Geographic human interaction services_____________لاحقة", 
    	humanCatalogueViewer: "بيت_101 Catalogue viewer_______لاحقة", 
    	humanGeographicViewer: "بيت_102 Geographic viewer_______لاحقة", 
    	humanGeographicSpreadsheetViewer: "بيت_103 Geographic spreadsheet viewer___________لاحقة", 
    	humanServiceEditor: "بيت_104 Service editor______لاحقة", 
    	humanChainDefinitionEditor: "بيت_105 Chain definition editor_________لاحقة", 
    	humanWorkflowEnactmentManager: "بيت_106 Workflow enactment manager__________لاحقة",
    	humanGeographicFeatureEditor: "بيت_107 Geographic feature editor__________لاحقة", 
    	humanGeographicSymbolEditor: "بيت_108 Geographic symbol editor__________لاحقة ",
    	humanFeatureGeneralizationEditor: "بيت_109 Feature generalisation editor___________لاحقة", 
    	humanGeographicDataStructureViewer: "بيت_110 Geographic data-structure viewer____________لاحقة", 
    	infoManagementService: "بيت_200 Geographic model/information management service________________لاحقة", 
    	infoFeatureAccessService: "بيت_201 Feature access service_________لاحقة", 
    	infoMapAccessService: "بيت_202 Map access service________لاحقة", 
    	infoCoverageAccessService: "بيت_203 Coverage access service_________لاحقة", 
    	infoSensorDescriptionService: "بيت_204 Sensor description service__________لاحقة", 
    	infoProductAccessService: "بيت_205 Product access service_________لاحقة", 
    	infoFeatureTypeService: "بيت_206 Feature type service________لاحقة", 
    	infoCatalogueService: "بيت_207 Catalogue service_______لاحقة", 
    	infoRegistryService: "بيت_208 Registry Service_______لاحقة", 
    	infoGazetteerService: "بيت_209 Gazetteer service_______لاحقة", 
    	infoOrderHandlingService: "بيت_210 Order handling service_________لاحقة", 
    	infoStandingOrderService: "بيت_211 Standing order service_________لاحقة", 
    	taskManagementService: "بيت_300 Geographic workflow/task management services_______________لاحقة", 
    	chainDefinitionService: "بيت_301 Chain definition service_________لاحقة", 
    	workflowEnactmentService: "بيت_302 Workflow enactment service__________لاحقة", 
    	subscriptionService: "بيت_303 Subscription service________لاحقة", 
    	spatialProcessingService: "بيت_400 Geographic processing services - spatial______________لاحقة", 
    	spatialCoordinateConversionService: "بيت_401 Coordinate conversion service___________لاحقة", 
    	spatialCoordinateTransformationService: "بيت_402 Coordinate transformation service____________لاحقة", 
    	spatialCoverageVectorConversionService: "بيت_403 Coverage/vector conversion service____________لاحقة", 
    	spatialImageCoordinateConversionService: "بيت_404 Image coordinate conversion service_____________لاحقة", 
    	spatialRectificationService: "بيت_405 Rectification service_________لاحقة", 
    	spatialOrthorectificationService: "بيت_406 Orthorectification service__________لاحقة", 
    	spatialSensorGeometryModelAdjustmentService: "بيت_407 Sensor geometry model adjustment service______________لاحقة", 
    	spatialImageGeometryModelConversionService: "بيت_408 Image geometry model conversion service______________لاحقة", 
    	spatialSubsettingService: "بيت_409 Subsetting service________لاحقة", 
    	spatialSamplingService: "بيت_410 Sampling service_______لاحقة", 
    	spatialTilingChangeService: "بيت_411 Tiling change service_________لاحقة", 
    	spatialDimensionMeasurementService: "بيت_412 Dimension measurement service___________لاحقة", 
    	spatialFeatureManipulationService: "بيت_413 Feature manipulation services___________لاحقة", 
    	spatialFeatureMatchingService: "بيت_414 Feature matching service_________لاحقة", 
    	spatialFeatureGeneralizationService: "بيت_415 Feature generalisation service___________لاحقة", 
    	spatialRouteDeterminationService: "بيت_416 Route determination service__________لاحقة", 
    	spatialPositioningService: "بيت_417 Positioning service________لاحقة", 
    	spatialProximityAnalysisService: "بيت_418 Proximity analysis service__________لاحقة", 
    	thematicProcessingService: "بيت_500 Geographic processing services - thematic_______________لاحقة",
    	thematicGoparameterCalculationService: "بيت_501 Geoparameter calculation service____________لاحقة", 
    	thematicClassificationService: "بيت_502 Thematic classification service____________لاحقة", 
    	thematicFeatureGeneralizationService: "بيت_503 Feature generalisation service___________لاحقة", 
    	thematicSubsettingService: "بيت_504 Subsetting service________لاحقة", 
    	thematicSpatialCountingService: "بيت_505 Spatial counting service_________لاحقة", 
    	thematicChangeDetectionService: "بيت_506 Change detection service_________لاحقة", 
    	thematicGeographicInformationExtractionService: "بيت_507 Geographic information extraction services_______________لاحقة", 
    	thematicImageProcessingService: "بيت_508 Image processing service_________لاحقة", 
    	thematicReducedResolutionGenerationService: "بيت_509 Reduced resolution generation service_____________لاحقة", 
    	thematicImageManipulationService: "بيت_510 Image Manipulation Services__________لاحقة", 
    	thematicImageUnderstandingService: "بيت_511 Image understanding services___________لاحقة", 
    	thematicImageSynthesisService: "بيت_512 Image synthesis services_________لاحقة", 
    	thematicMultibandImageManipulationService: "بيت_513 Multiband image manipulation___________لاحقة", 
    	thematicObjectDetectionService: "بيت_514 Object detection service_________لاحقة", 
    	thematicGeoparsingService: "بيت_515 Geoparsing service________لاحقة", 
    	thematicGeocodingService: "بيت_516 Geocoding service_______لاحقة", 
    	temporalProcessingService: "بيت_600 Geographic processing services - temporal_______________لاحقة", 
    	temporalReferenceSystemTransformationService: "بيت_601 Temporal reference system transformation service_________________لاحقة", 
    	temporalSubsettingService: "بيت_602 Subsetting service________لاحقة", 
    	temporalSamplingService: "بيت_603 Sampling service_______لاحقة", 
    	temporalProximityAnalysisService: "بيت_604 Temporal proximity analysis service_____________لاحقة", 
    	metadataProcessingService: "بيت_700 Geographic processing services - metadata_______________لاحقة", 
    	metadataStatisticalCalculationService: "بيت_701 Statistical calculation service____________لاحقة", 
    	metadataGeographicAnnotationService: "بيت_702 Geographic annotation services___________لاحقة", 
    	comService: "بيت_800 Geographic communication services____________لاحقة", 
    	comEncodingService: "بيت_801 Encoding service_______لاحقة", 
    	comTransferService: "بيت_802 Transfer service_______لاحقة", 
    	comGeographicCompressionService: "بيت_803 Geographic compression service___________لاحقة", 
    	comGeographicFormatConversionService: "بيت_804 Geographic format conversion service_____________لاحقة", 
    	comMessagingService: "بيت_805 Messaging service_______لاحقة", 
    	comRemoteFileAndExecutableManagement: "بيت_806 Remote file and executable management_____________لاحقة"
    },
    
    useLimitation: {
    	noCondition: "بيت_No conditions apply_______لاحقة",
    	unknownCondition: "بيت_Conditions unknown______لاحقة",
    	freeText: "بيت_Free text____لاحقة"
    }

  })
);
