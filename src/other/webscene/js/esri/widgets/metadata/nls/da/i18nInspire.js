define(
   ({
    
    documentTypes: {
    	data: {
    		caption: "ø_INSPIRE (Data)_____å",
    		description: ""
    	},
    	service: {
    		caption: "ø_INSPIRE (Service)______å",
    		description: ""
    	}
    },
    
    dataThemeKeywords: {
    	caption: "ø_Inspire Data Theme______å"
    },
    
    inspireServiceType: {
      discovery: "Discovery Service",
      view: "Visningstjeneste",
      download: "Downloadtjeneste",
      transformation: "Transformation Service",
      invoke: "Invoke Service",
      other: "Andre tjenester"
    },
    
    keywordSections: {
    	dataTheme: "ø_Inspire Data Theme______å",
    	serviceCategory: "ø_ISO 19119 Service Category_________å",
    	gemetConcept: "ø_GEMET Concept_____å",
    	otherKeywords: "ø_Other Keywords_____å"
    },
    
    LanguageCode: {
    	bul: "ø_Bulgarian____å",
    	cze: "ø_Czech___å",
    	dan: "ø_Danish___å",
    	dut: "ø_Dutch___å",
    	eng: "ø_English___å",
    	est: "ø_Estonian___å",
    	fin: "ø_Finnish___å",
    	fre: "ø_French___å",
    	ger: "ø_German___å",
    	gre: "ø_Greek___å",
    	hun: "ø_Hungarian____å",
    	gle: "ø_Gaelic (Irish)_____å",
    	ita: "ø_Italian___å",
    	lav: "ø_Latvian___å",
    	lit: "ø_Lithuanian____å",
    	mlt: "ø_Maltese___å",
    	pol: "ø_Polish___å", 
    	por: "ø_Portuguese____å",
    	rum: "ø_Romanian___å",
    	slo: "ø_Slovak___å",
    	slv: "ø_Slovenian____å",  	
    	spa: "ø_Spanish___å",
    	swe: "ø_Swedish___å",
    	
    	chi: "ø_Chinese___å",
    	kor: "ø_Korean___å",
    	nor: "ø_Norwegian____å",
    	rus: "ø_Russian___å",
    	tur: "ø_Turkish___å"
    },
    
    otherConstraints: {
    	noLimitations: "ø_No limitations_____å",
    	confidentialityOfProceedings: "ø_The confidentiality of the proceedings of public authorities____________________å...",
    	internationalRelations: "ø_International relations, public security or national defence___________________å",
    	courseOfJustice: "ø_The course of justice, the ability of any person to receive a fair trial________________________å...",
    	confidentialityOfCommercial: "ø_The confidentiality of commercial or industrial information____________________å...",
    	intellectualProperty: "ø_Intellectual property rights_________å",
    	confidentialityOfPersonalData: "ø_The confidentiality of personal data and/or files_________________å...",
    	interestsOrProtection: "ø_The interests or protection of any person who supplied the information_______________________å...",
    	protectionOfEnvironment: "ø_The protection of the environment to which such information relates______________________å...",
    	freeText: "ø_Free text____å"
    },
    
    serviceType: {
    	humanInteractionService: "ø_100 Geographic human interaction services_____________å", 
    	humanCatalogueViewer: "ø_101 Catalogue viewer_______å", 
    	humanGeographicViewer: "ø_102 Geographic viewer_______å", 
    	humanGeographicSpreadsheetViewer: "ø_103 Geographic spreadsheet viewer___________å", 
    	humanServiceEditor: "ø_104 Service editor______å", 
    	humanChainDefinitionEditor: "ø_105 Chain definition editor_________å", 
    	humanWorkflowEnactmentManager: "ø_106 Workflow enactment manager__________å",
    	humanGeographicFeatureEditor: "ø_107 Geographic feature editor__________å", 
    	humanGeographicSymbolEditor: "ø_108 Geographic symbol editor__________å ",
    	humanFeatureGeneralizationEditor: "ø_109 Feature generalisation editor___________å", 
    	humanGeographicDataStructureViewer: "ø_110 Geographic data-structure viewer____________å", 
    	infoManagementService: "ø_200 Geographic model/information management service________________å", 
    	infoFeatureAccessService: "ø_201 Feature access service_________å", 
    	infoMapAccessService: "ø_202 Map access service________å", 
    	infoCoverageAccessService: "ø_203 Coverage access service_________å", 
    	infoSensorDescriptionService: "ø_204 Sensor description service__________å", 
    	infoProductAccessService: "ø_205 Product access service_________å", 
    	infoFeatureTypeService: "ø_206 Feature type service________å", 
    	infoCatalogueService: "ø_207 Catalogue service_______å", 
    	infoRegistryService: "ø_208 Registry Service_______å", 
    	infoGazetteerService: "ø_209 Gazetteer service_______å", 
    	infoOrderHandlingService: "ø_210 Order handling service_________å", 
    	infoStandingOrderService: "ø_211 Standing order service_________å", 
    	taskManagementService: "ø_300 Geographic workflow/task management services_______________å", 
    	chainDefinitionService: "ø_301 Chain definition service_________å", 
    	workflowEnactmentService: "ø_302 Workflow enactment service__________å", 
    	subscriptionService: "ø_303 Subscription service________å", 
    	spatialProcessingService: "ø_400 Geographic processing services - spatial______________å", 
    	spatialCoordinateConversionService: "ø_401 Coordinate conversion service___________å", 
    	spatialCoordinateTransformationService: "ø_402 Coordinate transformation service____________å", 
    	spatialCoverageVectorConversionService: "ø_403 Coverage/vector conversion service____________å", 
    	spatialImageCoordinateConversionService: "ø_404 Image coordinate conversion service_____________å", 
    	spatialRectificationService: "ø_405 Rectification service_________å", 
    	spatialOrthorectificationService: "ø_406 Orthorectification service__________å", 
    	spatialSensorGeometryModelAdjustmentService: "ø_407 Sensor geometry model adjustment service______________å", 
    	spatialImageGeometryModelConversionService: "ø_408 Image geometry model conversion service______________å", 
    	spatialSubsettingService: "ø_409 Subsetting service________å", 
    	spatialSamplingService: "ø_410 Sampling service_______å", 
    	spatialTilingChangeService: "ø_411 Tiling change service_________å", 
    	spatialDimensionMeasurementService: "ø_412 Dimension measurement service___________å", 
    	spatialFeatureManipulationService: "ø_413 Feature manipulation services___________å", 
    	spatialFeatureMatchingService: "ø_414 Feature matching service_________å", 
    	spatialFeatureGeneralizationService: "ø_415 Feature generalisation service___________å", 
    	spatialRouteDeterminationService: "ø_416 Route determination service__________å", 
    	spatialPositioningService: "ø_417 Positioning service________å", 
    	spatialProximityAnalysisService: "ø_418 Proximity analysis service__________å", 
    	thematicProcessingService: "ø_500 Geographic processing services - thematic_______________å",
    	thematicGoparameterCalculationService: "ø_501 Geoparameter calculation service____________å", 
    	thematicClassificationService: "ø_502 Thematic classification service____________å", 
    	thematicFeatureGeneralizationService: "ø_503 Feature generalisation service___________å", 
    	thematicSubsettingService: "ø_504 Subsetting service________å", 
    	thematicSpatialCountingService: "ø_505 Spatial counting service_________å", 
    	thematicChangeDetectionService: "ø_506 Change detection service_________å", 
    	thematicGeographicInformationExtractionService: "ø_507 Geographic information extraction services_______________å", 
    	thematicImageProcessingService: "ø_508 Image processing service_________å", 
    	thematicReducedResolutionGenerationService: "ø_509 Reduced resolution generation service_____________å", 
    	thematicImageManipulationService: "ø_510 Image Manipulation Services__________å", 
    	thematicImageUnderstandingService: "ø_511 Image understanding services___________å", 
    	thematicImageSynthesisService: "ø_512 Image synthesis services_________å", 
    	thematicMultibandImageManipulationService: "ø_513 Multiband image manipulation___________å", 
    	thematicObjectDetectionService: "ø_514 Object detection service_________å", 
    	thematicGeoparsingService: "ø_515 Geoparsing service________å", 
    	thematicGeocodingService: "ø_516 Geocoding service_______å", 
    	temporalProcessingService: "ø_600 Geographic processing services - temporal_______________å", 
    	temporalReferenceSystemTransformationService: "ø_601 Temporal reference system transformation service_________________å", 
    	temporalSubsettingService: "ø_602 Subsetting service________å", 
    	temporalSamplingService: "ø_603 Sampling service_______å", 
    	temporalProximityAnalysisService: "ø_604 Temporal proximity analysis service_____________å", 
    	metadataProcessingService: "ø_700 Geographic processing services - metadata_______________å", 
    	metadataStatisticalCalculationService: "ø_701 Statistical calculation service____________å", 
    	metadataGeographicAnnotationService: "ø_702 Geographic annotation services___________å", 
    	comService: "ø_800 Geographic communication services____________å", 
    	comEncodingService: "ø_801 Encoding service_______å", 
    	comTransferService: "ø_802 Transfer service_______å", 
    	comGeographicCompressionService: "ø_803 Geographic compression service___________å", 
    	comGeographicFormatConversionService: "ø_804 Geographic format conversion service_____________å", 
    	comMessagingService: "ø_805 Messaging service_______å", 
    	comRemoteFileAndExecutableManagement: "ø_806 Remote file and executable management_____________å"
    },
    
    useLimitation: {
    	noCondition: "ø_No conditions apply_______å",
    	unknownCondition: "ø_Conditions unknown______å",
    	freeText: "ø_Free text____å"
    }

  })
);
