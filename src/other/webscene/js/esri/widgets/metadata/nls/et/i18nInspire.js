define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Š_INSPIRE (Data)_____ä",
    		description: ""
    	},
    	service: {
    		caption: "Š_INSPIRE (Service)______ä",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Š_Inspire Data Theme______ä"
    },
    
    inspireServiceType: {
      discovery: "Discovery teenus",
      view: "Teenuse vaatamine",
      download: "Teenuse allalaadimine",
      transformation: "Transformatsiooni teenus",
      invoke: "Teenuse aktiveerimine",
      other: "Muu teenus"
    },
    
    keywordSections: {
    	dataTheme: "Š_Inspire Data Theme______ä",
    	serviceCategory: "Š_ISO 19119 Service Category_________ä",
    	gemetConcept: "Š_GEMET Concept_____ä",
    	otherKeywords: "Š_Other Keywords_____ä"
    },
    
    LanguageCode: {
    	bul: "Š_Bulgarian____ä",
    	cze: "Š_Czech___ä",
    	dan: "Š_Danish___ä",
    	dut: "Š_Dutch___ä",
    	eng: "Š_English___ä",
    	est: "Š_Estonian___ä",
    	fin: "Š_Finnish___ä",
    	fre: "Š_French___ä",
    	ger: "Š_German___ä",
    	gre: "Š_Greek___ä",
    	hun: "Š_Hungarian____ä",
    	gle: "Š_Gaelic (Irish)_____ä",
    	ita: "Š_Italian___ä",
    	lav: "Š_Latvian___ä",
    	lit: "Š_Lithuanian____ä",
    	mlt: "Š_Maltese___ä",
    	pol: "Š_Polish___ä", 
    	por: "Š_Portuguese____ä",
    	rum: "Š_Romanian___ä",
    	slo: "Š_Slovak___ä",
    	slv: "Š_Slovenian____ä",  	
    	spa: "Š_Spanish___ä",
    	swe: "Š_Swedish___ä",
    	
    	chi: "Š_Chinese___ä",
    	kor: "Š_Korean___ä",
    	nor: "Š_Norwegian____ä",
    	rus: "Š_Russian___ä",
    	tur: "Š_Turkish___ä"
    },
    
    otherConstraints: {
    	noLimitations: "Š_No limitations_____ä",
    	confidentialityOfProceedings: "Š_The confidentiality of the proceedings of public authorities____________________ä...",
    	internationalRelations: "Š_International relations, public security or national defence___________________ä",
    	courseOfJustice: "Š_The course of justice, the ability of any person to receive a fair trial________________________ä...",
    	confidentialityOfCommercial: "Š_The confidentiality of commercial or industrial information____________________ä...",
    	intellectualProperty: "Š_Intellectual property rights_________ä",
    	confidentialityOfPersonalData: "Š_The confidentiality of personal data and/or files_________________ä...",
    	interestsOrProtection: "Š_The interests or protection of any person who supplied the information_______________________ä...",
    	protectionOfEnvironment: "Š_The protection of the environment to which such information relates______________________ä...",
    	freeText: "Š_Free text____ä"
    },
    
    serviceType: {
    	humanInteractionService: "Š_100 Geographic human interaction services_____________ä", 
    	humanCatalogueViewer: "Š_101 Catalogue viewer_______ä", 
    	humanGeographicViewer: "Š_102 Geographic viewer_______ä", 
    	humanGeographicSpreadsheetViewer: "Š_103 Geographic spreadsheet viewer___________ä", 
    	humanServiceEditor: "Š_104 Service editor______ä", 
    	humanChainDefinitionEditor: "Š_105 Chain definition editor_________ä", 
    	humanWorkflowEnactmentManager: "Š_106 Workflow enactment manager__________ä",
    	humanGeographicFeatureEditor: "Š_107 Geographic feature editor__________ä", 
    	humanGeographicSymbolEditor: "Š_108 Geographic symbol editor__________ä ",
    	humanFeatureGeneralizationEditor: "Š_109 Feature generalisation editor___________ä", 
    	humanGeographicDataStructureViewer: "Š_110 Geographic data-structure viewer____________ä", 
    	infoManagementService: "Š_200 Geographic model/information management service________________ä", 
    	infoFeatureAccessService: "Š_201 Feature access service_________ä", 
    	infoMapAccessService: "Š_202 Map access service________ä", 
    	infoCoverageAccessService: "Š_203 Coverage access service_________ä", 
    	infoSensorDescriptionService: "Š_204 Sensor description service__________ä", 
    	infoProductAccessService: "Š_205 Product access service_________ä", 
    	infoFeatureTypeService: "Š_206 Feature type service________ä", 
    	infoCatalogueService: "Š_207 Catalogue service_______ä", 
    	infoRegistryService: "Š_208 Registry Service_______ä", 
    	infoGazetteerService: "Š_209 Gazetteer service_______ä", 
    	infoOrderHandlingService: "Š_210 Order handling service_________ä", 
    	infoStandingOrderService: "Š_211 Standing order service_________ä", 
    	taskManagementService: "Š_300 Geographic workflow/task management services_______________ä", 
    	chainDefinitionService: "Š_301 Chain definition service_________ä", 
    	workflowEnactmentService: "Š_302 Workflow enactment service__________ä", 
    	subscriptionService: "Š_303 Subscription service________ä", 
    	spatialProcessingService: "Š_400 Geographic processing services - spatial______________ä", 
    	spatialCoordinateConversionService: "Š_401 Coordinate conversion service___________ä", 
    	spatialCoordinateTransformationService: "Š_402 Coordinate transformation service____________ä", 
    	spatialCoverageVectorConversionService: "Š_403 Coverage/vector conversion service____________ä", 
    	spatialImageCoordinateConversionService: "Š_404 Image coordinate conversion service_____________ä", 
    	spatialRectificationService: "Š_405 Rectification service_________ä", 
    	spatialOrthorectificationService: "Š_406 Orthorectification service__________ä", 
    	spatialSensorGeometryModelAdjustmentService: "Š_407 Sensor geometry model adjustment service______________ä", 
    	spatialImageGeometryModelConversionService: "Š_408 Image geometry model conversion service______________ä", 
    	spatialSubsettingService: "Š_409 Subsetting service________ä", 
    	spatialSamplingService: "Š_410 Sampling service_______ä", 
    	spatialTilingChangeService: "Š_411 Tiling change service_________ä", 
    	spatialDimensionMeasurementService: "Š_412 Dimension measurement service___________ä", 
    	spatialFeatureManipulationService: "Š_413 Feature manipulation services___________ä", 
    	spatialFeatureMatchingService: "Š_414 Feature matching service_________ä", 
    	spatialFeatureGeneralizationService: "Š_415 Feature generalisation service___________ä", 
    	spatialRouteDeterminationService: "Š_416 Route determination service__________ä", 
    	spatialPositioningService: "Š_417 Positioning service________ä", 
    	spatialProximityAnalysisService: "Š_418 Proximity analysis service__________ä", 
    	thematicProcessingService: "Š_500 Geographic processing services - thematic_______________ä",
    	thematicGoparameterCalculationService: "Š_501 Geoparameter calculation service____________ä", 
    	thematicClassificationService: "Š_502 Thematic classification service____________ä", 
    	thematicFeatureGeneralizationService: "Š_503 Feature generalisation service___________ä", 
    	thematicSubsettingService: "Š_504 Subsetting service________ä", 
    	thematicSpatialCountingService: "Š_505 Spatial counting service_________ä", 
    	thematicChangeDetectionService: "Š_506 Change detection service_________ä", 
    	thematicGeographicInformationExtractionService: "Š_507 Geographic information extraction services_______________ä", 
    	thematicImageProcessingService: "Š_508 Image processing service_________ä", 
    	thematicReducedResolutionGenerationService: "Š_509 Reduced resolution generation service_____________ä", 
    	thematicImageManipulationService: "Š_510 Image Manipulation Services__________ä", 
    	thematicImageUnderstandingService: "Š_511 Image understanding services___________ä", 
    	thematicImageSynthesisService: "Š_512 Image synthesis services_________ä", 
    	thematicMultibandImageManipulationService: "Š_513 Multiband image manipulation___________ä", 
    	thematicObjectDetectionService: "Š_514 Object detection service_________ä", 
    	thematicGeoparsingService: "Š_515 Geoparsing service________ä", 
    	thematicGeocodingService: "Š_516 Geocoding service_______ä", 
    	temporalProcessingService: "Š_600 Geographic processing services - temporal_______________ä", 
    	temporalReferenceSystemTransformationService: "Š_601 Temporal reference system transformation service_________________ä", 
    	temporalSubsettingService: "Š_602 Subsetting service________ä", 
    	temporalSamplingService: "Š_603 Sampling service_______ä", 
    	temporalProximityAnalysisService: "Š_604 Temporal proximity analysis service_____________ä", 
    	metadataProcessingService: "Š_700 Geographic processing services - metadata_______________ä", 
    	metadataStatisticalCalculationService: "Š_701 Statistical calculation service____________ä", 
    	metadataGeographicAnnotationService: "Š_702 Geographic annotation services___________ä", 
    	comService: "Š_800 Geographic communication services____________ä", 
    	comEncodingService: "Š_801 Encoding service_______ä", 
    	comTransferService: "Š_802 Transfer service_______ä", 
    	comGeographicCompressionService: "Š_803 Geographic compression service___________ä", 
    	comGeographicFormatConversionService: "Š_804 Geographic format conversion service_____________ä", 
    	comMessagingService: "Š_805 Messaging service_______ä", 
    	comRemoteFileAndExecutableManagement: "Š_806 Remote file and executable management_____________ä"
    },
    
    useLimitation: {
    	noCondition: "Š_No conditions apply_______ä",
    	unknownCondition: "Š_Conditions unknown______ä",
    	freeText: "Š_Free text____ä"
    }

  })
);
