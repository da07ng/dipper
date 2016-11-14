define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Å_INSPIRE (Data)_____ö",
    		description: ""
    	},
    	service: {
    		caption: "Å_INSPIRE (Service)______ö",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Å_Inspire Data Theme______ö"
    },
    
    inspireServiceType: {
      discovery: "Upptäcktstjänst",
      view: "Visningstjänst",
      download: "Hämtningstjänst",
      transformation: "Transformationstjänst",
      invoke: "Anropstjänst",
      other: "Annan tjänst"
    },
    
    keywordSections: {
    	dataTheme: "Å_Inspire Data Theme______ö",
    	serviceCategory: "Å_ISO 19119 Service Category_________ö",
    	gemetConcept: "Å_GEMET Concept_____ö",
    	otherKeywords: "Å_Other Keywords_____ö"
    },
    
    LanguageCode: {
    	bul: "Å_Bulgarian____ö",
    	cze: "Å_Czech___ö",
    	dan: "Å_Danish___ö",
    	dut: "Å_Dutch___ö",
    	eng: "Å_English___ö",
    	est: "Å_Estonian___ö",
    	fin: "Å_Finnish___ö",
    	fre: "Å_French___ö",
    	ger: "Å_German___ö",
    	gre: "Å_Greek___ö",
    	hun: "Å_Hungarian____ö",
    	gle: "Å_Gaelic (Irish)_____ö",
    	ita: "Å_Italian___ö",
    	lav: "Å_Latvian___ö",
    	lit: "Å_Lithuanian____ö",
    	mlt: "Å_Maltese___ö",
    	pol: "Å_Polish___ö", 
    	por: "Å_Portuguese____ö",
    	rum: "Å_Romanian___ö",
    	slo: "Å_Slovak___ö",
    	slv: "Å_Slovenian____ö",  	
    	spa: "Å_Spanish___ö",
    	swe: "Å_Swedish___ö",
    	
    	chi: "Å_Chinese___ö",
    	kor: "Å_Korean___ö",
    	nor: "Å_Norwegian____ö",
    	rus: "Å_Russian___ö",
    	tur: "Å_Turkish___ö"
    },
    
    otherConstraints: {
    	noLimitations: "Å_No limitations_____ö",
    	confidentialityOfProceedings: "Å_The confidentiality of the proceedings of public authorities____________________ö...",
    	internationalRelations: "Å_International relations, public security or national defence___________________ö",
    	courseOfJustice: "Å_The course of justice, the ability of any person to receive a fair trial________________________ö...",
    	confidentialityOfCommercial: "Å_The confidentiality of commercial or industrial information____________________ö...",
    	intellectualProperty: "Å_Intellectual property rights_________ö",
    	confidentialityOfPersonalData: "Å_The confidentiality of personal data and/or files_________________ö...",
    	interestsOrProtection: "Å_The interests or protection of any person who supplied the information_______________________ö...",
    	protectionOfEnvironment: "Å_The protection of the environment to which such information relates______________________ö...",
    	freeText: "Å_Free text____ö"
    },
    
    serviceType: {
    	humanInteractionService: "Å_100 Geographic human interaction services_____________ö", 
    	humanCatalogueViewer: "Å_101 Catalogue viewer_______ö", 
    	humanGeographicViewer: "Å_102 Geographic viewer_______ö", 
    	humanGeographicSpreadsheetViewer: "Å_103 Geographic spreadsheet viewer___________ö", 
    	humanServiceEditor: "Å_104 Service editor______ö", 
    	humanChainDefinitionEditor: "Å_105 Chain definition editor_________ö", 
    	humanWorkflowEnactmentManager: "Å_106 Workflow enactment manager__________ö",
    	humanGeographicFeatureEditor: "Å_107 Geographic feature editor__________ö", 
    	humanGeographicSymbolEditor: "Å_108 Geographic symbol editor__________ö ",
    	humanFeatureGeneralizationEditor: "Å_109 Feature generalisation editor___________ö", 
    	humanGeographicDataStructureViewer: "Å_110 Geographic data-structure viewer____________ö", 
    	infoManagementService: "Å_200 Geographic model/information management service________________ö", 
    	infoFeatureAccessService: "Å_201 Feature access service_________ö", 
    	infoMapAccessService: "Å_202 Map access service________ö", 
    	infoCoverageAccessService: "Å_203 Coverage access service_________ö", 
    	infoSensorDescriptionService: "Å_204 Sensor description service__________ö", 
    	infoProductAccessService: "Å_205 Product access service_________ö", 
    	infoFeatureTypeService: "Å_206 Feature type service________ö", 
    	infoCatalogueService: "Å_207 Catalogue service_______ö", 
    	infoRegistryService: "Å_208 Registry Service_______ö", 
    	infoGazetteerService: "Å_209 Gazetteer service_______ö", 
    	infoOrderHandlingService: "Å_210 Order handling service_________ö", 
    	infoStandingOrderService: "Å_211 Standing order service_________ö", 
    	taskManagementService: "Å_300 Geographic workflow/task management services_______________ö", 
    	chainDefinitionService: "Å_301 Chain definition service_________ö", 
    	workflowEnactmentService: "Å_302 Workflow enactment service__________ö", 
    	subscriptionService: "Å_303 Subscription service________ö", 
    	spatialProcessingService: "Å_400 Geographic processing services - spatial______________ö", 
    	spatialCoordinateConversionService: "Å_401 Coordinate conversion service___________ö", 
    	spatialCoordinateTransformationService: "Å_402 Coordinate transformation service____________ö", 
    	spatialCoverageVectorConversionService: "Å_403 Coverage/vector conversion service____________ö", 
    	spatialImageCoordinateConversionService: "Å_404 Image coordinate conversion service_____________ö", 
    	spatialRectificationService: "Å_405 Rectification service_________ö", 
    	spatialOrthorectificationService: "Å_406 Orthorectification service__________ö", 
    	spatialSensorGeometryModelAdjustmentService: "Å_407 Sensor geometry model adjustment service______________ö", 
    	spatialImageGeometryModelConversionService: "Å_408 Image geometry model conversion service______________ö", 
    	spatialSubsettingService: "Å_409 Subsetting service________ö", 
    	spatialSamplingService: "Å_410 Sampling service_______ö", 
    	spatialTilingChangeService: "Å_411 Tiling change service_________ö", 
    	spatialDimensionMeasurementService: "Å_412 Dimension measurement service___________ö", 
    	spatialFeatureManipulationService: "Å_413 Feature manipulation services___________ö", 
    	spatialFeatureMatchingService: "Å_414 Feature matching service_________ö", 
    	spatialFeatureGeneralizationService: "Å_415 Feature generalisation service___________ö", 
    	spatialRouteDeterminationService: "Å_416 Route determination service__________ö", 
    	spatialPositioningService: "Å_417 Positioning service________ö", 
    	spatialProximityAnalysisService: "Å_418 Proximity analysis service__________ö", 
    	thematicProcessingService: "Å_500 Geographic processing services - thematic_______________ö",
    	thematicGoparameterCalculationService: "Å_501 Geoparameter calculation service____________ö", 
    	thematicClassificationService: "Å_502 Thematic classification service____________ö", 
    	thematicFeatureGeneralizationService: "Å_503 Feature generalisation service___________ö", 
    	thematicSubsettingService: "Å_504 Subsetting service________ö", 
    	thematicSpatialCountingService: "Å_505 Spatial counting service_________ö", 
    	thematicChangeDetectionService: "Å_506 Change detection service_________ö", 
    	thematicGeographicInformationExtractionService: "Å_507 Geographic information extraction services_______________ö", 
    	thematicImageProcessingService: "Å_508 Image processing service_________ö", 
    	thematicReducedResolutionGenerationService: "Å_509 Reduced resolution generation service_____________ö", 
    	thematicImageManipulationService: "Å_510 Image Manipulation Services__________ö", 
    	thematicImageUnderstandingService: "Å_511 Image understanding services___________ö", 
    	thematicImageSynthesisService: "Å_512 Image synthesis services_________ö", 
    	thematicMultibandImageManipulationService: "Å_513 Multiband image manipulation___________ö", 
    	thematicObjectDetectionService: "Å_514 Object detection service_________ö", 
    	thematicGeoparsingService: "Å_515 Geoparsing service________ö", 
    	thematicGeocodingService: "Å_516 Geocoding service_______ö", 
    	temporalProcessingService: "Å_600 Geographic processing services - temporal_______________ö", 
    	temporalReferenceSystemTransformationService: "Å_601 Temporal reference system transformation service_________________ö", 
    	temporalSubsettingService: "Å_602 Subsetting service________ö", 
    	temporalSamplingService: "Å_603 Sampling service_______ö", 
    	temporalProximityAnalysisService: "Å_604 Temporal proximity analysis service_____________ö", 
    	metadataProcessingService: "Å_700 Geographic processing services - metadata_______________ö", 
    	metadataStatisticalCalculationService: "Å_701 Statistical calculation service____________ö", 
    	metadataGeographicAnnotationService: "Å_702 Geographic annotation services___________ö", 
    	comService: "Å_800 Geographic communication services____________ö", 
    	comEncodingService: "Å_801 Encoding service_______ö", 
    	comTransferService: "Å_802 Transfer service_______ö", 
    	comGeographicCompressionService: "Å_803 Geographic compression service___________ö", 
    	comGeographicFormatConversionService: "Å_804 Geographic format conversion service_____________ö", 
    	comMessagingService: "Å_805 Messaging service_______ö", 
    	comRemoteFileAndExecutableManagement: "Å_806 Remote file and executable management_____________ö"
    },
    
    useLimitation: {
    	noCondition: "Å_No conditions apply_______ö",
    	unknownCondition: "Å_Conditions unknown______ö",
    	freeText: "Å_Free text____ö"
    }

  })
);
