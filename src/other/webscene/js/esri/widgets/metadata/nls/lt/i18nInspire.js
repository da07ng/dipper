define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "Į_INSPIRE (Data)_____š",
    		description: ""
    	},
    	service: {
    		caption: "Į_INSPIRE (Service)______š",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "Į_Inspire Data Theme______š"
    },
    
    inspireServiceType: {
      discovery: "Radimo paslauga",
      view: "Peržiūros paslauga",
      download: "Atsisiuntimo paslauga",
      transformation: "Transformavimo paslauga",
      invoke: "Iškvietimo paslauga",
      other: "Kitos paslaugos"
    },
    
    keywordSections: {
    	dataTheme: "Į_Inspire Data Theme______š",
    	serviceCategory: "Į_ISO 19119 Service Category_________š",
    	gemetConcept: "Į_GEMET Concept_____š",
    	otherKeywords: "Į_Other Keywords_____š"
    },
    
    LanguageCode: {
    	bul: "Į_Bulgarian____š",
    	cze: "Į_Czech___š",
    	dan: "Į_Danish___š",
    	dut: "Į_Dutch___š",
    	eng: "Į_English___š",
    	est: "Į_Estonian___š",
    	fin: "Į_Finnish___š",
    	fre: "Į_French___š",
    	ger: "Į_German___š",
    	gre: "Į_Greek___š",
    	hun: "Į_Hungarian____š",
    	gle: "Į_Gaelic (Irish)_____š",
    	ita: "Į_Italian___š",
    	lav: "Į_Latvian___š",
    	lit: "Į_Lithuanian____š",
    	mlt: "Į_Maltese___š",
    	pol: "Į_Polish___š", 
    	por: "Į_Portuguese____š",
    	rum: "Į_Romanian___š",
    	slo: "Į_Slovak___š",
    	slv: "Į_Slovenian____š",  	
    	spa: "Į_Spanish___š",
    	swe: "Į_Swedish___š",
    	
    	chi: "Į_Chinese___š",
    	kor: "Į_Korean___š",
    	nor: "Į_Norwegian____š",
    	rus: "Į_Russian___š",
    	tur: "Į_Turkish___š"
    },
    
    otherConstraints: {
    	noLimitations: "Į_No limitations_____š",
    	confidentialityOfProceedings: "Į_The confidentiality of the proceedings of public authorities____________________š...",
    	internationalRelations: "Į_International relations, public security or national defence___________________š",
    	courseOfJustice: "Į_The course of justice, the ability of any person to receive a fair trial________________________š...",
    	confidentialityOfCommercial: "Į_The confidentiality of commercial or industrial information____________________š...",
    	intellectualProperty: "Į_Intellectual property rights_________š",
    	confidentialityOfPersonalData: "Į_The confidentiality of personal data and/or files_________________š...",
    	interestsOrProtection: "Į_The interests or protection of any person who supplied the information_______________________š...",
    	protectionOfEnvironment: "Į_The protection of the environment to which such information relates______________________š...",
    	freeText: "Į_Free text____š"
    },
    
    serviceType: {
    	humanInteractionService: "Į_100 Geographic human interaction services_____________š", 
    	humanCatalogueViewer: "Į_101 Catalogue viewer_______š", 
    	humanGeographicViewer: "Į_102 Geographic viewer_______š", 
    	humanGeographicSpreadsheetViewer: "Į_103 Geographic spreadsheet viewer___________š", 
    	humanServiceEditor: "Į_104 Service editor______š", 
    	humanChainDefinitionEditor: "Į_105 Chain definition editor_________š", 
    	humanWorkflowEnactmentManager: "Į_106 Workflow enactment manager__________š",
    	humanGeographicFeatureEditor: "Į_107 Geographic feature editor__________š", 
    	humanGeographicSymbolEditor: "Į_108 Geographic symbol editor__________š ",
    	humanFeatureGeneralizationEditor: "Į_109 Feature generalisation editor___________š", 
    	humanGeographicDataStructureViewer: "Į_110 Geographic data-structure viewer____________š", 
    	infoManagementService: "Į_200 Geographic model/information management service________________š", 
    	infoFeatureAccessService: "Į_201 Feature access service_________š", 
    	infoMapAccessService: "Į_202 Map access service________š", 
    	infoCoverageAccessService: "Į_203 Coverage access service_________š", 
    	infoSensorDescriptionService: "Į_204 Sensor description service__________š", 
    	infoProductAccessService: "Į_205 Product access service_________š", 
    	infoFeatureTypeService: "Į_206 Feature type service________š", 
    	infoCatalogueService: "Į_207 Catalogue service_______š", 
    	infoRegistryService: "Į_208 Registry Service_______š", 
    	infoGazetteerService: "Į_209 Gazetteer service_______š", 
    	infoOrderHandlingService: "Į_210 Order handling service_________š", 
    	infoStandingOrderService: "Į_211 Standing order service_________š", 
    	taskManagementService: "Į_300 Geographic workflow/task management services_______________š", 
    	chainDefinitionService: "Į_301 Chain definition service_________š", 
    	workflowEnactmentService: "Į_302 Workflow enactment service__________š", 
    	subscriptionService: "Į_303 Subscription service________š", 
    	spatialProcessingService: "Į_400 Geographic processing services - spatial______________š", 
    	spatialCoordinateConversionService: "Į_401 Coordinate conversion service___________š", 
    	spatialCoordinateTransformationService: "Į_402 Coordinate transformation service____________š", 
    	spatialCoverageVectorConversionService: "Į_403 Coverage/vector conversion service____________š", 
    	spatialImageCoordinateConversionService: "Į_404 Image coordinate conversion service_____________š", 
    	spatialRectificationService: "Į_405 Rectification service_________š", 
    	spatialOrthorectificationService: "Į_406 Orthorectification service__________š", 
    	spatialSensorGeometryModelAdjustmentService: "Į_407 Sensor geometry model adjustment service______________š", 
    	spatialImageGeometryModelConversionService: "Į_408 Image geometry model conversion service______________š", 
    	spatialSubsettingService: "Į_409 Subsetting service________š", 
    	spatialSamplingService: "Į_410 Sampling service_______š", 
    	spatialTilingChangeService: "Į_411 Tiling change service_________š", 
    	spatialDimensionMeasurementService: "Į_412 Dimension measurement service___________š", 
    	spatialFeatureManipulationService: "Į_413 Feature manipulation services___________š", 
    	spatialFeatureMatchingService: "Į_414 Feature matching service_________š", 
    	spatialFeatureGeneralizationService: "Į_415 Feature generalisation service___________š", 
    	spatialRouteDeterminationService: "Į_416 Route determination service__________š", 
    	spatialPositioningService: "Į_417 Positioning service________š", 
    	spatialProximityAnalysisService: "Į_418 Proximity analysis service__________š", 
    	thematicProcessingService: "Į_500 Geographic processing services - thematic_______________š",
    	thematicGoparameterCalculationService: "Į_501 Geoparameter calculation service____________š", 
    	thematicClassificationService: "Į_502 Thematic classification service____________š", 
    	thematicFeatureGeneralizationService: "Į_503 Feature generalisation service___________š", 
    	thematicSubsettingService: "Į_504 Subsetting service________š", 
    	thematicSpatialCountingService: "Į_505 Spatial counting service_________š", 
    	thematicChangeDetectionService: "Į_506 Change detection service_________š", 
    	thematicGeographicInformationExtractionService: "Į_507 Geographic information extraction services_______________š", 
    	thematicImageProcessingService: "Į_508 Image processing service_________š", 
    	thematicReducedResolutionGenerationService: "Į_509 Reduced resolution generation service_____________š", 
    	thematicImageManipulationService: "Į_510 Image Manipulation Services__________š", 
    	thematicImageUnderstandingService: "Į_511 Image understanding services___________š", 
    	thematicImageSynthesisService: "Į_512 Image synthesis services_________š", 
    	thematicMultibandImageManipulationService: "Į_513 Multiband image manipulation___________š", 
    	thematicObjectDetectionService: "Į_514 Object detection service_________š", 
    	thematicGeoparsingService: "Į_515 Geoparsing service________š", 
    	thematicGeocodingService: "Į_516 Geocoding service_______š", 
    	temporalProcessingService: "Į_600 Geographic processing services - temporal_______________š", 
    	temporalReferenceSystemTransformationService: "Į_601 Temporal reference system transformation service_________________š", 
    	temporalSubsettingService: "Į_602 Subsetting service________š", 
    	temporalSamplingService: "Į_603 Sampling service_______š", 
    	temporalProximityAnalysisService: "Į_604 Temporal proximity analysis service_____________š", 
    	metadataProcessingService: "Į_700 Geographic processing services - metadata_______________š", 
    	metadataStatisticalCalculationService: "Į_701 Statistical calculation service____________š", 
    	metadataGeographicAnnotationService: "Į_702 Geographic annotation services___________š", 
    	comService: "Į_800 Geographic communication services____________š", 
    	comEncodingService: "Į_801 Encoding service_______š", 
    	comTransferService: "Į_802 Transfer service_______š", 
    	comGeographicCompressionService: "Į_803 Geographic compression service___________š", 
    	comGeographicFormatConversionService: "Į_804 Geographic format conversion service_____________š", 
    	comMessagingService: "Į_805 Messaging service_______š", 
    	comRemoteFileAndExecutableManagement: "Į_806 Remote file and executable management_____________š"
    },
    
    useLimitation: {
    	noCondition: "Į_No conditions apply_______š",
    	unknownCondition: "Į_Conditions unknown______š",
    	freeText: "Į_Free text____š"
    }

  })
);
