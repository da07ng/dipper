define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "כן_INSPIRE (Data)_____ש",
    		description: ""
    	},
    	service: {
    		caption: "כן_INSPIRE (Service)______ש",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "כן_Inspire Data Theme______ש"
    },
    
    inspireServiceType: {
      discovery: "שירות גילוי",
      view: "שירות תצוגה",
      download: "שירות הורדה",
      transformation: "שירות המרה",
      invoke: "שירות הפעלה",
      other: "שירות אחר"
    },
    
    keywordSections: {
    	dataTheme: "כן_Inspire Data Theme______ש",
    	serviceCategory: "כן_ISO 19119 Service Category_________ש",
    	gemetConcept: "כן_GEMET Concept_____ש",
    	otherKeywords: "כן_Other Keywords_____ש"
    },
    
    LanguageCode: {
    	bul: "כן_Bulgarian____ש",
    	cze: "כן_Czech___ש",
    	dan: "כן_Danish___ש",
    	dut: "כן_Dutch___ש",
    	eng: "כן_English___ש",
    	est: "כן_Estonian___ש",
    	fin: "כן_Finnish___ש",
    	fre: "כן_French___ש",
    	ger: "כן_German___ש",
    	gre: "כן_Greek___ש",
    	hun: "כן_Hungarian____ש",
    	gle: "כן_Gaelic (Irish)_____ש",
    	ita: "כן_Italian___ש",
    	lav: "כן_Latvian___ש",
    	lit: "כן_Lithuanian____ש",
    	mlt: "כן_Maltese___ש",
    	pol: "כן_Polish___ש", 
    	por: "כן_Portuguese____ש",
    	rum: "כן_Romanian___ש",
    	slo: "כן_Slovak___ש",
    	slv: "כן_Slovenian____ש",  	
    	spa: "כן_Spanish___ש",
    	swe: "כן_Swedish___ש",
    	
    	chi: "כן_Chinese___ש",
    	kor: "כן_Korean___ש",
    	nor: "כן_Norwegian____ש",
    	rus: "כן_Russian___ש",
    	tur: "כן_Turkish___ש"
    },
    
    otherConstraints: {
    	noLimitations: "כן_No limitations_____ש",
    	confidentialityOfProceedings: "כן_The confidentiality of the proceedings of public authorities____________________ש...",
    	internationalRelations: "כן_International relations, public security or national defence___________________ש",
    	courseOfJustice: "כן_The course of justice, the ability of any person to receive a fair trial________________________ש...",
    	confidentialityOfCommercial: "כן_The confidentiality of commercial or industrial information____________________ש...",
    	intellectualProperty: "כן_Intellectual property rights_________ש",
    	confidentialityOfPersonalData: "כן_The confidentiality of personal data and/or files_________________ש...",
    	interestsOrProtection: "כן_The interests or protection of any person who supplied the information_______________________ש...",
    	protectionOfEnvironment: "כן_The protection of the environment to which such information relates______________________ש...",
    	freeText: "כן_Free text____ש"
    },
    
    serviceType: {
    	humanInteractionService: "כן_100 Geographic human interaction services_____________ש", 
    	humanCatalogueViewer: "כן_101 Catalogue viewer_______ש", 
    	humanGeographicViewer: "כן_102 Geographic viewer_______ש", 
    	humanGeographicSpreadsheetViewer: "כן_103 Geographic spreadsheet viewer___________ש", 
    	humanServiceEditor: "כן_104 Service editor______ש", 
    	humanChainDefinitionEditor: "כן_105 Chain definition editor_________ש", 
    	humanWorkflowEnactmentManager: "כן_106 Workflow enactment manager__________ש",
    	humanGeographicFeatureEditor: "כן_107 Geographic feature editor__________ש", 
    	humanGeographicSymbolEditor: "כן_108 Geographic symbol editor__________ש ",
    	humanFeatureGeneralizationEditor: "כן_109 Feature generalisation editor___________ש", 
    	humanGeographicDataStructureViewer: "כן_110 Geographic data-structure viewer____________ש", 
    	infoManagementService: "כן_200 Geographic model/information management service________________ש", 
    	infoFeatureAccessService: "כן_201 Feature access service_________ש", 
    	infoMapAccessService: "כן_202 Map access service________ש", 
    	infoCoverageAccessService: "כן_203 Coverage access service_________ש", 
    	infoSensorDescriptionService: "כן_204 Sensor description service__________ש", 
    	infoProductAccessService: "כן_205 Product access service_________ש", 
    	infoFeatureTypeService: "כן_206 Feature type service________ש", 
    	infoCatalogueService: "כן_207 Catalogue service_______ש", 
    	infoRegistryService: "כן_208 Registry Service_______ש", 
    	infoGazetteerService: "כן_209 Gazetteer service_______ש", 
    	infoOrderHandlingService: "כן_210 Order handling service_________ש", 
    	infoStandingOrderService: "כן_211 Standing order service_________ש", 
    	taskManagementService: "כן_300 Geographic workflow/task management services_______________ש", 
    	chainDefinitionService: "כן_301 Chain definition service_________ש", 
    	workflowEnactmentService: "כן_302 Workflow enactment service__________ש", 
    	subscriptionService: "כן_303 Subscription service________ש", 
    	spatialProcessingService: "כן_400 Geographic processing services - spatial______________ש", 
    	spatialCoordinateConversionService: "כן_401 Coordinate conversion service___________ש", 
    	spatialCoordinateTransformationService: "כן_402 Coordinate transformation service____________ש", 
    	spatialCoverageVectorConversionService: "כן_403 Coverage/vector conversion service____________ש", 
    	spatialImageCoordinateConversionService: "כן_404 Image coordinate conversion service_____________ש", 
    	spatialRectificationService: "כן_405 Rectification service_________ש", 
    	spatialOrthorectificationService: "כן_406 Orthorectification service__________ש", 
    	spatialSensorGeometryModelAdjustmentService: "כן_407 Sensor geometry model adjustment service______________ש", 
    	spatialImageGeometryModelConversionService: "כן_408 Image geometry model conversion service______________ש", 
    	spatialSubsettingService: "כן_409 Subsetting service________ש", 
    	spatialSamplingService: "כן_410 Sampling service_______ש", 
    	spatialTilingChangeService: "כן_411 Tiling change service_________ש", 
    	spatialDimensionMeasurementService: "כן_412 Dimension measurement service___________ש", 
    	spatialFeatureManipulationService: "כן_413 Feature manipulation services___________ש", 
    	spatialFeatureMatchingService: "כן_414 Feature matching service_________ש", 
    	spatialFeatureGeneralizationService: "כן_415 Feature generalisation service___________ש", 
    	spatialRouteDeterminationService: "כן_416 Route determination service__________ש", 
    	spatialPositioningService: "כן_417 Positioning service________ש", 
    	spatialProximityAnalysisService: "כן_418 Proximity analysis service__________ש", 
    	thematicProcessingService: "כן_500 Geographic processing services - thematic_______________ש",
    	thematicGoparameterCalculationService: "כן_501 Geoparameter calculation service____________ש", 
    	thematicClassificationService: "כן_502 Thematic classification service____________ש", 
    	thematicFeatureGeneralizationService: "כן_503 Feature generalisation service___________ש", 
    	thematicSubsettingService: "כן_504 Subsetting service________ש", 
    	thematicSpatialCountingService: "כן_505 Spatial counting service_________ש", 
    	thematicChangeDetectionService: "כן_506 Change detection service_________ש", 
    	thematicGeographicInformationExtractionService: "כן_507 Geographic information extraction services_______________ש", 
    	thematicImageProcessingService: "כן_508 Image processing service_________ש", 
    	thematicReducedResolutionGenerationService: "כן_509 Reduced resolution generation service_____________ש", 
    	thematicImageManipulationService: "כן_510 Image Manipulation Services__________ש", 
    	thematicImageUnderstandingService: "כן_511 Image understanding services___________ש", 
    	thematicImageSynthesisService: "כן_512 Image synthesis services_________ש", 
    	thematicMultibandImageManipulationService: "כן_513 Multiband image manipulation___________ש", 
    	thematicObjectDetectionService: "כן_514 Object detection service_________ש", 
    	thematicGeoparsingService: "כן_515 Geoparsing service________ש", 
    	thematicGeocodingService: "כן_516 Geocoding service_______ש", 
    	temporalProcessingService: "כן_600 Geographic processing services - temporal_______________ש", 
    	temporalReferenceSystemTransformationService: "כן_601 Temporal reference system transformation service_________________ש", 
    	temporalSubsettingService: "כן_602 Subsetting service________ש", 
    	temporalSamplingService: "כן_603 Sampling service_______ש", 
    	temporalProximityAnalysisService: "כן_604 Temporal proximity analysis service_____________ש", 
    	metadataProcessingService: "כן_700 Geographic processing services - metadata_______________ש", 
    	metadataStatisticalCalculationService: "כן_701 Statistical calculation service____________ש", 
    	metadataGeographicAnnotationService: "כן_702 Geographic annotation services___________ש", 
    	comService: "כן_800 Geographic communication services____________ש", 
    	comEncodingService: "כן_801 Encoding service_______ש", 
    	comTransferService: "כן_802 Transfer service_______ש", 
    	comGeographicCompressionService: "כן_803 Geographic compression service___________ש", 
    	comGeographicFormatConversionService: "כן_804 Geographic format conversion service_____________ש", 
    	comMessagingService: "כן_805 Messaging service_______ש", 
    	comRemoteFileAndExecutableManagement: "כן_806 Remote file and executable management_____________ש"
    },
    
    useLimitation: {
    	noCondition: "כן_No conditions apply_______ש",
    	unknownCondition: "כן_Conditions unknown______ש",
    	freeText: "כן_Free text____ש"
    }

  })
);
