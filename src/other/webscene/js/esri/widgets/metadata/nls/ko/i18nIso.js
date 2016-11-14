define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "한_ISO 19115 (Data)______빠",
    		description: ""
    	},
    	service: {
    		caption: "한_ISO 19119 (Service)_______빠",
    		description: ""
    	},
    	gmi: {
    		caption: "한_ISO 19115-2 (Imagery and Gridded Data)____________빠",
    		description: ""
    	}
    },
    
    general: {
    	reference: "한_Reference____빠"
    },
    
    sections: {
    	metadata: "한_Metadata___빠",
    	identification: "한_Identification_____빠",
    	distribution: "한_Distribution_____빠",
    	quality: "한_Quality___빠",
    	acquisition: "한_Acquisition____빠"
    },
    
    metadataSection: {
    	identifier: "한_Identifier____빠",
    	contact: "한_Contact___빠",
    	date: "한_Date__빠",
    	standard: "한_Standard___빠",
    	reference: "한_Reference____빠"
    },
    
    identificationSection: {
    	citation: "한_Citation___빠",
    	description: "한_Description____빠",
    	contact: "한_Contact___빠",
    	thumbnail: "한_Thumbnail____빠",
    	keywords: "한_Keywords___빠",
    	constraints: "한_Constraints____빠",
    	resource: "한_Resource___빠",
    	resourceTab: {
    		representation: "한_Representation_____빠",
    		language: "한_Language___빠",
    		classification: "한_Classification_____빠",
    		extent: "한_Extent___빠"
    	},
    	serviceResourceTab: {
    		serviceType: "한_Service Type_____빠",
    		extent: "한_Extent___빠",
    		couplingType: "한_Coupling Type_____빠",
    		operation: "한_Operation____빠",
    		operatesOn: "한_Operates On____빠"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "한_Scope___빠",
    	conformance: "한_Conformance____빠",
    	lineage: "한_Lineage___빠"
    },
    
    acquisitionSection: {
    	requirement: "한_Requirement____빠",
    	objective: "한_Objective____빠",
    	instrument: "한_Instrument____빠",
    	plan: "한_Plan__빠",
    	operation: "한_Operation____빠",
    	platform: "한_Platform___빠",
    	environment: "한_Environment____빠"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "한_Abstract___빠",
    	purpose: "한_Purpose___빠",
    	credit: "한_Credits___빠",
    	pointOfContact: "한_Point of Contact______빠",
    	resourceMaintenance: "한_Maintenance____빠",
    	graphicOverview: "한_Graphic Overview______빠",
    	descriptiveKeywords: "한_Keyword Collection______빠",
    	resourceConstraints: "한_Constraints____빠"
    },
    
    CI_Address: {
    	deliveryPoint: "한_Delivery Point_____빠",
    	city: "한_City__빠",
    	administrativeArea: "한_Administrative Area_______빠",
    	postalCode: "한_Postal Code____빠",
    	country: "한_Country___빠",
    	electronicMailAddress: "한_E-Mail Address_____빠"
    },
    
    CI_Citation: {
    	title: "한_Title___빠",
    	alternateTitle: "한_Alternate Title______빠",
    	identifier: "한_Unique Resource Identifier_________빠",
    	resource: {
    		title: "한_Resource Title_____빠",
    		date: "한_Resource Date_____빠"
    	},
    	specification: {
    		title: "한_Specification Title_______빠",
    		date: "한_Specification Date______빠"
    	}
    },
    
    CI_Contact: {
    	phone: "한_Phone___빠",
    	address: "한_Address___빠",
    	onlineResource: "한_Online Resource______빠",
    	hoursOfService: "한_Hours of Service______빠",
    	contactInstructions: "한_Contact Instructions_______빠"
    },
    
    CI_Date: {
    	date: "한_Date__빠",
    	dateType: "한_Date Type____빠"
    },
    
  	CI_DateTypeCode: {
  		caption: "한_Date Type____빠",
  		creation: "한_Creation Date_____빠",
  		publication: "한_Publication Date______빠",
  		revision: "한_Revision Date_____빠"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "한_Function___빠",
    	download: "한_Download___빠",
    	information: "한_Information____빠",
    	offlineAccess: "한_Offline Access_____빠",
    	order: "한_Order___빠",
    	search: "한_Search___빠"
    },
    
    CI_OnlineResource: {
    	caption: "한_Online Resource______빠",
    	linkage: "한_URL__빠",
    	protocol: "한_Protocol___빠",
    	applicationProfile: "한_Application Profile_______빠",
    	name: "한_Name__빠",
    	description: "한_Description____빠",
    	sFunction: "한_Function___빠"
    },
    
    CI_ResponsibleParty: {
    	caption: "한_Point of Contact______빠",
    	individualName: "한_Individual Name______빠",
    	organisationName: "한_Organisation Name______빠",
    	positionName: "한_Position Name_____빠",
    	contactInfo: "한_Contact Info_____빠",
    	role: "한_Role__빠"
    },
    
    CI_RoleCode: {
    	caption: "한_Role__빠",
    	resourceProvider: "한_Resource Provider______빠",
    	custodian: "한_Custodian____빠",
    	owner: "한_Owner___빠",
    	user: "한_User__빠",
    	distributor: "한_Distributor____빠",
    	originator: "한_Originator____빠",
    	pointOfContact: "한_Point of Contact______빠",
    	principalInvestigator: "한_Principal Investigator________빠",
    	processor: "한_Processor____빠",
    	publisher: "한_Publisher____빠",
    	author: "한_Author___빠"
    },
    
    CI_Telephone: {
    	voice: "한_Voice___빠",
    	facsimile: "한_Fax__빠"
    },
    
    DCPList: {
    	caption: "한_DCP__빠",
    	XML: "한_XML__빠",
    	CORBA: "한_CORBA___빠",
    	JAVA: "한_JAVA__빠",
    	COM: "한_COM__빠",
    	SQL: "한_SQL__빠",
    	WebServices: "한_WebServices____빠"
    },
    
    DQ_ConformanceResult: {
    	caption: "한_Conformance Result______빠",
    	explanation: "한_Explanation____빠",
    	degree: {
    		caption: "한_Degree___빠",
    		validationPerformed: "한_Validation Performed_______빠",
    		conformant: "한_Conformant____빠",
    		nonConformant: "한_Non Conformant_____빠"
    	}
    },
    
    DQ_DataQuality: {
    	report: "한_Report___빠"
    },
    
    DQ_Scope : {
    	level: "한_Scope (quality information applies to)____________빠",
    	levelDescription: "한_Level Description______빠"
    },
    
    EX_Extent: {
    	caption: "한_Extent___빠",
    	description: "한_Description____빠",
    	geographicElement: "한_Spatial Extent_____빠",
    	temporalElement: "한_Temporal Extent______빠",
    	verticalElement: "한_Vertical Extent______빠"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "한_West Bounding Longitude________빠",
    	eastBoundLongitude: "한_East Bounding Longitude________빠",
    	southBoundLatitude: "한_South Bounding Latitude________빠",
    	northBoundLatitude: "한_North Bounding Latitude________빠"
    },
    
    EX_GeographicDescription: {
    	caption: "한_Geographic Description________빠"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "한_Begin Date____빠",
    		endPosition: "한_End Date___빠"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "한_Minimum Value_____빠",
    	maximumValue: "한_Maximum Value_____빠",
    	verticalCRS: "한_Vertical CRS_____빠"
    },
    
    Length: {
    	caption: "한_Length___빠",
    	uom: "한_Units of Measure______빠",
    	km: "한_Kilometers____빠",
    	m: "한_Meters___빠",
    	mi: "한_Miles___빠",
    	ft: "한_Feet__빠"
    },
    
    LI_Lineage: {
    	statement: "한_Lineage Statement______빠"
    },
    
    MD_BrowseGraphic: {
    	fileName: "한_Browse Graphic URL______빠",
    	fileDescription: "한_Browse Graphic Caption________빠",
    	fileType: "한_Browse Graphic Type_______빠"
    },
    
    MD_ClassificationCode: {
    	unclassified: "한_Unclassified_____빠",
    	restricted: "한_Restricted____빠",
    	confidential: "한_Confidential_____빠",
    	secret: "한_Secret___빠",
    	topSecret: "한_Top Secret____빠"
    },
    
    MD_Constraints: {
    	caption: "한_Usage Constraints______빠",
    	useLimitation: "한_Use Limitation_____빠"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "한_Spatial Representation Type_________빠",
    	spatialResolution: "한_Spatial Resolution______빠",
    	language: "한_Resource Language______빠",
    	supplementalInformation: "한_Supplemental_____빠"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "한_Online___빠"
    },
    
    MD_Distribution: {
    	distributionFormat: "한_Distribution Format_______빠",
    	transferOptions: "한_Transfer Options______빠"
    },
    
    MD_Format: {
    	name: "한_Format Name____빠",
    	version: "한_Format Version_____빠"
    },
    
    MD_Identifier: {
    	caption: "한_URI__빠",
    	identifierCaption: "한_Identifier____빠",
    	code: "한_Code__빠"
    },
    
    MD_Keywords: {
    	delimitedCaption: "한_Keywords___빠",
    	thesaurusName: "한_Associated Thesaurus_______빠"
    },
    
    MD_KeywordTypeCode: {
    	caption: "한_Keyword Type_____빠",
    	discipline: "한_Discipline____빠",
    	place: "한_Place___빠",
    	stratum: "한_Stratum___빠",
    	temporal: "한_Temporal___빠",
    	theme: "한_Theme___빠"
    },
    
    MD_LegalConstraints: {
    	caption: "한_Legal Constraints______빠",
    	accessConstraints: "한_Access Constraints______빠",
    	useConstraints: "한_Use Constraints______빠",
    	otherConstraints: "한_Other Constraints______빠"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "한_Frequency____빠",
    	continual: "한_Continual____빠",
    	daily: "한_Daily___빠",
    	weekly: "한_Weekly___빠",
    	fortnightly: "한_Fortnightly____빠",
    	monthly: "한_Monthly___빠",
    	quarterly: "한_Quarterly____빠",
    	biannually: "한_Biannually____빠",
    	annually: "한_Annually___빠",
    	asNeeded: "한_As Needed____빠",
    	irregular: "한_Irregular____빠",
    	notPlanned: "한_Not Planned____빠",
    	unknown: "한_Unknown___빠"
    },
    
    MD_Metadata: {
    	caption: "한_Metadata___빠",
    	fileIdentifier: "한_File Identifier______빠",
    	language: "한_Metadata Language______빠",
    	hierarchyLevel: "한_Hierarchy Level______빠",
    	hierarchyLevelName: "한_Hierarchy Level Name_______빠",
    	contact: "한_Metadata Contact______빠",
    	dateStamp: "한_Metadata Date_____빠",
    	metadataStandardName: "한_Metadata Standard Name________빠",
    	metadataStandardVersion: "한_Metadata Standard Version_________빠",
    	referenceSystemInfo: "한_Reference System______빠",
    	identificationInfo: "한_Identification_____빠",
    	distributionInfo: "한_Distribution_____빠",
    	dataQualityInfo: "한_Quality___빠"
    },
    
    MD_ProgressCode: {
    	caption: "한_Progress Code_____빠",
    	completed: "한_Completed____빠",
    	historicalArchive: "한_Historical Archive______빠",
    	obsolete: "한_Obsolete___빠",
    	onGoing: "한_On Going___빠",
    	planned: "한_Planned___빠",
    	required: "한_Required___빠",
    	underDevelopment: "한_Under Development______빠"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "한_Denominator____빠"
    },
    
    MD_Resolution: {
    	equivalentScale: "한_Equivalent Scale______빠",
    	distance: "한_Distance___빠"
    },
    
    MD_RestrictionCode: {
    	copyright: "한_Copyright____빠",
    	patent: "한_Patent___빠",
    	patentPending: "한_Patent Pending_____빠",
    	trademark: "한_Trademark____빠",
    	license: "한_License___빠",
    	intellectualPropertyRights: "한_Intellectual Property Rights_________빠",
    	restricted: "한_Restricted____빠",
    	otherRestrictions: "한_Other Restrictions______빠"
    },
    
    MD_ScopeCode: {
    	attribute: "한_Attribute____빠",
    	attributeType: "한_Attribute type_____빠",
    	collectionHardware: "한_Collection hardware_______빠",
    	collectionSession: "한_Collection session______빠",
    	dataset: "한_Dataset___빠",
    	series: "한_Series___빠",
    	nonGeographicDataset: "한_Non geographic dataset________빠",
    	dimensionGroup: "한_Dimension group______빠",
    	feature: "한_Feature___빠",
    	featureType: "한_Feature type_____빠",
    	propertyType: "한_Property type_____빠",
    	fieldSession: "한_Field session_____빠",
    	software: "한_Software___빠",
    	service: "한_Service___빠",
    	model: "한_Model___빠",
    	tile: "한_Tile__빠"
    },
    
    MD_ScopeDescription: {
    	attributes: "한_Attributes____빠",
    	features: "한_Features___빠",
    	featureInstances: "한_Feature Instances______빠",
    	attributeInstances: "한_Attribute Instances_______빠",
    	dataset: "한_Dataset___빠",
    	other: "한_Other___빠"
    },
    
    MD_SecurityConstraints: {
    	caption: "한_Security Constraints_______빠",
    	classification: "한_Classification_____빠",
    	userNote: "한_User Note____빠",
    	classificationSystem: "한_Classification System_______빠",
    	handlingDescription: "한_Handling Description_______빠"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "한_Spatial Representation Type_________빠",
    	vector: "한_Vector___빠",
    	grid: "한_Grid__빠",
    	textTable: "한_Text Table____빠",
    	tin: "한_TIN__빠",
    	stereoModel: "한_Stereo Model_____빠",
    	video: "한_Video___빠"
    },
    
    MD_TopicCategoryCode: {
    	caption: "한_Topic Category_____빠",
    	boundaries: "한_Administrative and Political Boundaries_____________빠",
    	farming: "한_Agriculture and Farming________빠",
    	climatologyMeteorologyAtmosphere: "한_Atmosphere and Climatic________빠",
    	biota: "한_Biology and Ecology_______빠",
    	economy: "한_Business and Economic_______빠",
    	planningCadastre: "한_Cadastral____빠",
    	society: "한_Cultural, Society and Demography___________빠",
    	elevation: "한_Elevation and Derived Products__________빠",
    	environment: "한_Environment and Conservation_________빠",
    	structure: "한_Facilities and Structures_________빠",
    	geoscientificInformation: "한_Geological and Geophysical_________빠",
    	health: "한_Human Health and Disease________빠",
    	imageryBaseMapsEarthCover: "한_Imagery and Base Maps_______빠",
    	inlandWaters: "한_Inland Water Resources________빠",
    	location: "한_Locations and Geodetic Networks__________빠",
    	intelligenceMilitary: "한_Military___빠",
    	oceans: "한_Oceans and Estuaries_______빠",
    	transportation: "한_Transportation Networks________빠",
    	utilitiesCommunication: "한_Utilities and Communication_________빠"
    },
    
    MI_ContextCode: {
    	caption: "한_Context___빠",
    	acquisition: "한_Acquisition____빠",
    	pass: "한_Pass__빠",
    	wayPoint: "한_Waypoint___빠"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "한_Environmental Conditions________빠",
    	averageAirTemperature: "한_Average Air Temperature________빠",
    	maxRelativeHumidity: "한_Maximum Relative Humidity_________빠",
    	maxAltitude: "한_Maximum Altitude______빠",
    	meterologicalConditions: "한_Meterological Conditions________빠"
    },
    
    MI_Event: {
    	identifier: "한_Event Identifier______빠",
    	time: "한_Time__빠",
    	expectedObjectiveReference: "한_Expected Objective (Objective Identifer)_____________빠",
    	relatedSensorReference: "한_Related Sensor (Instrument Identifer)____________빠",
    	relatedPassReference: "한_Related Pass (Platform Pass Identifer)____________빠"
    },

    MI_GeometryTypeCode: {
    	point: "한_Point___빠",
    	linear: "한_Linear___빠",
    	areal: "한_Areal___빠",
    	strip: "한_Strip___빠"
    },
    
    MI_Instrument: {
    	citation: "한_Instrument Citation_______빠",
    	identifier: "한_Instrument Identifier_______빠",
    	sType: "한_Instrument Type______빠",
    	description: "한_Instrument Description________빠",
    	mountedOn: "한_Mounted On____빠",
    	mountedOnPlatformReference: "한_Mounted On (Platform Identifier)___________빠"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "한_Acquisition____빠"
    },
    
    MI_Objective: {
    	caption: "한_Objective____빠",
    	identifier: "한_Objective Identifier_______빠",
    	priority: "한_Priority of Target______빠",
    	sFunction: "한_Function of Objective_______빠",
    	extent: "한_Extent___빠",
    	pass: "한_Platform Pass_____빠",
    	sensingInstrumentReference: "한_Sensing Instrument (Instrument Identifier)______________빠",
    	objectiveOccurrence: "한_Events___빠",
    	sections: {
    		identification: "한_Identification_____빠",
    		extent: "한_Extent___빠",
    		pass: "한_Pass__빠",
    		sensingInstrument: "한_Sensing Instrument______빠",
    		objectiveOccurrence: "한_Events___빠"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "한_Type (Collection Technique for Objective)_____________빠",
    	instantaneousCollection: "한_Instantaneous Collection________빠",
    	persistentView: "한_Persistent View______빠",
    	survey: "한_Survey___빠"
    },
    
    MI_Operation: {
    	caption: "한_Operation____빠",
    	description: "한_Operation Description_______빠",
    	citation: "한_Operation Citation______빠",
    	identifier: "한_Operation Identifier_______빠",
    	status: "한_Operation Status______빠",
    	objectiveReference: "한_Related Objective (Objective Identifier)_____________빠",
    	planReference: "한_Related Plan (Plan Identifier)__________빠",
    	significantEventReference: "한_Related Event (Event Identifier)___________빠",
    	platformReference: "한_Related Platform (Platform Identifier)____________빠",
    	sections: {
    		identification: "한_Identification_____빠",
    		related: "한_Related___빠"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "한_Operation Type_____빠",
    	real: "한_Real__빠",
    	simulated: "한_Simulated____빠",
    	synthesized: "한_Synthesized____빠"
    },
    
    MI_Plan: {
    	sType: "한_Sampling Geometry for Collecting Data____________빠",
    	status: "한_Status of Plan_____빠",
    	citation: "한_Citation of Authority Requesting Collection______________빠",
    	satisfiedRequirementReference: "한_Satisfied Requirement (Requirement Identifier)_______________빠",
    	operationReference: "한_Related Operation (Operation Identifier)_____________빠"
    },
    
    MI_Platform: {
    	citation: "한_Platform Citation______빠",
    	identifier: "한_Platform Identifier_______빠",
    	description: "한_Description of Platform Supporting the Instrument________________빠",
    	sponsor: "한_Sponsor Organization for Platform___________빠",
    	instrument: "한_Instrument(s) mounted on the platform____________빠",
    	instrumentReference: "한_Instrument Identifier_______빠",
    	sections: {
    		identification: "한_Identification_____빠",
    		sponsor: "한_Sponsor___빠",
    		instruments: "한_Instruments____빠"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "한_Platform Pass Identifier________빠",
    	extent: "한_Platform Pass Extent_______빠",
    	relatedEventReference: "한_Related Event (Event Identifer)__________빠"
    },

    MI_PriorityCode: {
    	critical: "한_Critical___빠", 
    	highImportance: "한_High Importance______빠",
    	mediumImportance: "한_Medium Importance______빠",
    	lowImportance: "한_Low Importance_____빠"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "한_Requested Date Of Collection_________빠",
    	latestAcceptableDate: "한_Latest Acceptable Date________빠"
    },
    
    MI_Requirement: {
    	caption: "한_Requirement____빠",
    	citation: "한_Citation for Requirement Guidance Material______________빠",
    	identifier: "한_Requirement Identifier________빠",
    	requestor: "한_Requestor of Requirement________빠",
    	recipient: "한_Recipient of Requirement Results___________빠",
    	priority: "한_Requirement Priority_______빠",
    	requestedDate: "한_Requested Date_____빠",
    	expiryDate: "한_Expiry Date____빠",
    	satisifiedPlanReference: "한_Satisfied Plan (Plan Identifier)___________빠",
    	sections: {
    		identification: "한_Identification_____빠",
    		requestor: "한_Requestor____빠",
    		recipient: "한_Recipient____빠",
    		priorityAndDates: "한_Priority And Dates______빠",
    		satisifiedPlan: "한_Satisified  Plan______빠"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "한_Sequence___빠",
    	start: "한_Start___빠",
    	end: "한_End__빠",
    	instantaneous: "한_Instantaneous_____빠"
    },
    
    MI_TriggerCode: {
    	caption: "한_Trigger___빠",
    	automatic: "한_Automatic____빠",
    	manual: "한_Manual___빠",
    	preProgrammed: "한_Preprogrammed_____빠"
    },
    
    ObjectReference: {
    	uuidref: "한_UUID Reference_____빠",
    	xlinkref: "한_URL Reference_____빠"
    },
    
    RS_Identifier: {
    	caption: "한_ID Plus Code Space______빠",
    	code: "한_Code__빠",
    	codeSpace: "한_Code Space____빠"
    },
    
    SV_CouplingType: {
    	loose: "한_Loose___빠",
    	mixed: "한_Mixed___빠",
    	tight: "한_Tight___빠"
    },
    
    SV_OperationMetadata: {
    	operationName: "한_Operation Name_____빠",
    	DCP: "한_DCP__빠",
    	connectPoint: "한_Connect Point_____빠"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "한_ServiceType____빠",
    	couplingType: "한_Coupling Type_____빠",
    	containsOperations: "한_Operation Metadata______빠",
    	operatesOn: "한_Operates On____빠"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "한_Indeterminate Position________빠",
    	indeterminates: {
    		before: "한_Before___빠",
       	after: "한_After___빠",
      	now: "한_Now__빠",
      	unknown: "한_Unknown___빠"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "한_GEMET Concept Keyword_______빠",
    		tool: "한_Look Up____빠...",
    		dialogTitle: "한_GEMET - Concept Keyword________빠",
    		searchLabel: "한_Search___빠:",
    		searchTip: "한_Search GEMET_____빠"
    	},
    	theme: {
    		tool: "한_Look Up____빠...",
    		dialogTitle: "한_GEMET - Inspire Data Theme_________빠"
    	},
    	ioerror: "한_There was an error communicating with the GEMET service: {url}____________________빠",
    	searching: "한_Searching GEMET______빠...",
    	noMatch: "한_No matching results were found__________빠.",
      languages: {
      	"bg": "한_Bulgarian____빠",
      	"cs": "한_Czech___빠",
      	"da": "한_Danish___빠",
      	"nl": "한_Dutch___빠",
      	"en": "한_English___빠",
      	"et": "한_Estonian___빠",
      	"fi": "한_Finnish___빠",
      	"fr": "한_French___빠",
      	"de": "한_German___빠",
      	"el": "한_Greek___빠",
      	"hu": "한_Hungarian____빠",
      	"ga": "한_Gaelic (Irish)_____빠",
      	"it": "한_Italian___빠",
      	"lv": "한_Latvian___빠",
      	"lt": "한_Lithuanian____빠",
      	"mt": "한_Maltese___빠",
      	"pl": "한_Polish___빠", 
      	"pt": "한_Portuguese____빠",
      	"ro": "한_Romanian___빠",
      	"sk": "한_Slovak___빠",
      	"sl": "한_Slovenian____빠",  	
      	"es": "한_Spanish___빠",
      	"sv": "한_Swedish___빠"
      }
    }
   
  })
);
