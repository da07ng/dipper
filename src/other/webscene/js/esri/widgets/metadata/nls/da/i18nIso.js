define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ø_ISO 19115 (Data)______å",
    		description: ""
    	},
    	service: {
    		caption: "ø_ISO 19119 (Service)_______å",
    		description: ""
    	},
    	gmi: {
    		caption: "ø_ISO 19115-2 (Imagery and Gridded Data)____________å",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ø_Reference____å"
    },
    
    sections: {
    	metadata: "ø_Metadata___å",
    	identification: "ø_Identification_____å",
    	distribution: "ø_Distribution_____å",
    	quality: "ø_Quality___å",
    	acquisition: "ø_Acquisition____å"
    },
    
    metadataSection: {
    	identifier: "ø_Identifier____å",
    	contact: "ø_Contact___å",
    	date: "ø_Date__å",
    	standard: "ø_Standard___å",
    	reference: "ø_Reference____å"
    },
    
    identificationSection: {
    	citation: "ø_Citation___å",
    	description: "ø_Description____å",
    	contact: "ø_Contact___å",
    	thumbnail: "ø_Thumbnail____å",
    	keywords: "ø_Keywords___å",
    	constraints: "ø_Constraints____å",
    	resource: "ø_Resource___å",
    	resourceTab: {
    		representation: "ø_Representation_____å",
    		language: "ø_Language___å",
    		classification: "ø_Classification_____å",
    		extent: "ø_Extent___å"
    	},
    	serviceResourceTab: {
    		serviceType: "ø_Service Type_____å",
    		extent: "ø_Extent___å",
    		couplingType: "ø_Coupling Type_____å",
    		operation: "ø_Operation____å",
    		operatesOn: "ø_Operates On____å"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ø_Scope___å",
    	conformance: "ø_Conformance____å",
    	lineage: "ø_Lineage___å"
    },
    
    acquisitionSection: {
    	requirement: "ø_Requirement____å",
    	objective: "ø_Objective____å",
    	instrument: "ø_Instrument____å",
    	plan: "ø_Plan__å",
    	operation: "ø_Operation____å",
    	platform: "ø_Platform___å",
    	environment: "ø_Environment____å"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ø_Abstract___å",
    	purpose: "ø_Purpose___å",
    	credit: "ø_Credits___å",
    	pointOfContact: "ø_Point of Contact______å",
    	resourceMaintenance: "ø_Maintenance____å",
    	graphicOverview: "ø_Graphic Overview______å",
    	descriptiveKeywords: "ø_Keyword Collection______å",
    	resourceConstraints: "ø_Constraints____å"
    },
    
    CI_Address: {
    	deliveryPoint: "ø_Delivery Point_____å",
    	city: "ø_City__å",
    	administrativeArea: "ø_Administrative Area_______å",
    	postalCode: "ø_Postal Code____å",
    	country: "ø_Country___å",
    	electronicMailAddress: "ø_E-Mail Address_____å"
    },
    
    CI_Citation: {
    	title: "ø_Title___å",
    	alternateTitle: "ø_Alternate Title______å",
    	identifier: "ø_Unique Resource Identifier_________å",
    	resource: {
    		title: "ø_Resource Title_____å",
    		date: "ø_Resource Date_____å"
    	},
    	specification: {
    		title: "ø_Specification Title_______å",
    		date: "ø_Specification Date______å"
    	}
    },
    
    CI_Contact: {
    	phone: "ø_Phone___å",
    	address: "ø_Address___å",
    	onlineResource: "ø_Online Resource______å",
    	hoursOfService: "ø_Hours of Service______å",
    	contactInstructions: "ø_Contact Instructions_______å"
    },
    
    CI_Date: {
    	date: "ø_Date__å",
    	dateType: "ø_Date Type____å"
    },
    
  	CI_DateTypeCode: {
  		caption: "ø_Date Type____å",
  		creation: "ø_Creation Date_____å",
  		publication: "ø_Publication Date______å",
  		revision: "ø_Revision Date_____å"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ø_Function___å",
    	download: "ø_Download___å",
    	information: "ø_Information____å",
    	offlineAccess: "ø_Offline Access_____å",
    	order: "ø_Order___å",
    	search: "ø_Search___å"
    },
    
    CI_OnlineResource: {
    	caption: "ø_Online Resource______å",
    	linkage: "ø_URL__å",
    	protocol: "ø_Protocol___å",
    	applicationProfile: "ø_Application Profile_______å",
    	name: "ø_Name__å",
    	description: "ø_Description____å",
    	sFunction: "ø_Function___å"
    },
    
    CI_ResponsibleParty: {
    	caption: "ø_Point of Contact______å",
    	individualName: "ø_Individual Name______å",
    	organisationName: "ø_Organisation Name______å",
    	positionName: "ø_Position Name_____å",
    	contactInfo: "ø_Contact Info_____å",
    	role: "ø_Role__å"
    },
    
    CI_RoleCode: {
    	caption: "ø_Role__å",
    	resourceProvider: "ø_Resource Provider______å",
    	custodian: "ø_Custodian____å",
    	owner: "ø_Owner___å",
    	user: "ø_User__å",
    	distributor: "ø_Distributor____å",
    	originator: "ø_Originator____å",
    	pointOfContact: "ø_Point of Contact______å",
    	principalInvestigator: "ø_Principal Investigator________å",
    	processor: "ø_Processor____å",
    	publisher: "ø_Publisher____å",
    	author: "ø_Author___å"
    },
    
    CI_Telephone: {
    	voice: "ø_Voice___å",
    	facsimile: "ø_Fax__å"
    },
    
    DCPList: {
    	caption: "ø_DCP__å",
    	XML: "ø_XML__å",
    	CORBA: "ø_CORBA___å",
    	JAVA: "ø_JAVA__å",
    	COM: "ø_COM__å",
    	SQL: "ø_SQL__å",
    	WebServices: "ø_WebServices____å"
    },
    
    DQ_ConformanceResult: {
    	caption: "ø_Conformance Result______å",
    	explanation: "ø_Explanation____å",
    	degree: {
    		caption: "ø_Degree___å",
    		validationPerformed: "ø_Validation Performed_______å",
    		conformant: "ø_Conformant____å",
    		nonConformant: "ø_Non Conformant_____å"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ø_Report___å"
    },
    
    DQ_Scope : {
    	level: "ø_Scope (quality information applies to)____________å",
    	levelDescription: "ø_Level Description______å"
    },
    
    EX_Extent: {
    	caption: "ø_Extent___å",
    	description: "ø_Description____å",
    	geographicElement: "ø_Spatial Extent_____å",
    	temporalElement: "ø_Temporal Extent______å",
    	verticalElement: "ø_Vertical Extent______å"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ø_West Bounding Longitude________å",
    	eastBoundLongitude: "ø_East Bounding Longitude________å",
    	southBoundLatitude: "ø_South Bounding Latitude________å",
    	northBoundLatitude: "ø_North Bounding Latitude________å"
    },
    
    EX_GeographicDescription: {
    	caption: "ø_Geographic Description________å"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ø_Begin Date____å",
    		endPosition: "ø_End Date___å"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ø_Minimum Value_____å",
    	maximumValue: "ø_Maximum Value_____å",
    	verticalCRS: "ø_Vertical CRS_____å"
    },
    
    Length: {
    	caption: "ø_Length___å",
    	uom: "ø_Units of Measure______å",
    	km: "ø_Kilometers____å",
    	m: "ø_Meters___å",
    	mi: "ø_Miles___å",
    	ft: "ø_Feet__å"
    },
    
    LI_Lineage: {
    	statement: "ø_Lineage Statement______å"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ø_Browse Graphic URL______å",
    	fileDescription: "ø_Browse Graphic Caption________å",
    	fileType: "ø_Browse Graphic Type_______å"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ø_Unclassified_____å",
    	restricted: "ø_Restricted____å",
    	confidential: "ø_Confidential_____å",
    	secret: "ø_Secret___å",
    	topSecret: "ø_Top Secret____å"
    },
    
    MD_Constraints: {
    	caption: "ø_Usage Constraints______å",
    	useLimitation: "ø_Use Limitation_____å"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ø_Spatial Representation Type_________å",
    	spatialResolution: "ø_Spatial Resolution______å",
    	language: "ø_Resource Language______å",
    	supplementalInformation: "ø_Supplemental_____å"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ø_Online___å"
    },
    
    MD_Distribution: {
    	distributionFormat: "ø_Distribution Format_______å",
    	transferOptions: "ø_Transfer Options______å"
    },
    
    MD_Format: {
    	name: "ø_Format Name____å",
    	version: "ø_Format Version_____å"
    },
    
    MD_Identifier: {
    	caption: "ø_URI__å",
    	identifierCaption: "ø_Identifier____å",
    	code: "ø_Code__å"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ø_Keywords___å",
    	thesaurusName: "ø_Associated Thesaurus_______å"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ø_Keyword Type_____å",
    	discipline: "ø_Discipline____å",
    	place: "ø_Place___å",
    	stratum: "ø_Stratum___å",
    	temporal: "ø_Temporal___å",
    	theme: "ø_Theme___å"
    },
    
    MD_LegalConstraints: {
    	caption: "ø_Legal Constraints______å",
    	accessConstraints: "ø_Access Constraints______å",
    	useConstraints: "ø_Use Constraints______å",
    	otherConstraints: "ø_Other Constraints______å"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ø_Frequency____å",
    	continual: "ø_Continual____å",
    	daily: "ø_Daily___å",
    	weekly: "ø_Weekly___å",
    	fortnightly: "ø_Fortnightly____å",
    	monthly: "ø_Monthly___å",
    	quarterly: "ø_Quarterly____å",
    	biannually: "ø_Biannually____å",
    	annually: "ø_Annually___å",
    	asNeeded: "ø_As Needed____å",
    	irregular: "ø_Irregular____å",
    	notPlanned: "ø_Not Planned____å",
    	unknown: "ø_Unknown___å"
    },
    
    MD_Metadata: {
    	caption: "ø_Metadata___å",
    	fileIdentifier: "ø_File Identifier______å",
    	language: "ø_Metadata Language______å",
    	hierarchyLevel: "ø_Hierarchy Level______å",
    	hierarchyLevelName: "ø_Hierarchy Level Name_______å",
    	contact: "ø_Metadata Contact______å",
    	dateStamp: "ø_Metadata Date_____å",
    	metadataStandardName: "ø_Metadata Standard Name________å",
    	metadataStandardVersion: "ø_Metadata Standard Version_________å",
    	referenceSystemInfo: "ø_Reference System______å",
    	identificationInfo: "ø_Identification_____å",
    	distributionInfo: "ø_Distribution_____å",
    	dataQualityInfo: "ø_Quality___å"
    },
    
    MD_ProgressCode: {
    	caption: "ø_Progress Code_____å",
    	completed: "ø_Completed____å",
    	historicalArchive: "ø_Historical Archive______å",
    	obsolete: "ø_Obsolete___å",
    	onGoing: "ø_On Going___å",
    	planned: "ø_Planned___å",
    	required: "ø_Required___å",
    	underDevelopment: "ø_Under Development______å"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ø_Denominator____å"
    },
    
    MD_Resolution: {
    	equivalentScale: "ø_Equivalent Scale______å",
    	distance: "ø_Distance___å"
    },
    
    MD_RestrictionCode: {
    	copyright: "ø_Copyright____å",
    	patent: "ø_Patent___å",
    	patentPending: "ø_Patent Pending_____å",
    	trademark: "ø_Trademark____å",
    	license: "ø_License___å",
    	intellectualPropertyRights: "ø_Intellectual Property Rights_________å",
    	restricted: "ø_Restricted____å",
    	otherRestrictions: "ø_Other Restrictions______å"
    },
    
    MD_ScopeCode: {
    	attribute: "ø_Attribute____å",
    	attributeType: "ø_Attribute type_____å",
    	collectionHardware: "ø_Collection hardware_______å",
    	collectionSession: "ø_Collection session______å",
    	dataset: "ø_Dataset___å",
    	series: "ø_Series___å",
    	nonGeographicDataset: "ø_Non geographic dataset________å",
    	dimensionGroup: "ø_Dimension group______å",
    	feature: "ø_Feature___å",
    	featureType: "ø_Feature type_____å",
    	propertyType: "ø_Property type_____å",
    	fieldSession: "ø_Field session_____å",
    	software: "ø_Software___å",
    	service: "ø_Service___å",
    	model: "ø_Model___å",
    	tile: "ø_Tile__å"
    },
    
    MD_ScopeDescription: {
    	attributes: "ø_Attributes____å",
    	features: "ø_Features___å",
    	featureInstances: "ø_Feature Instances______å",
    	attributeInstances: "ø_Attribute Instances_______å",
    	dataset: "ø_Dataset___å",
    	other: "ø_Other___å"
    },
    
    MD_SecurityConstraints: {
    	caption: "ø_Security Constraints_______å",
    	classification: "ø_Classification_____å",
    	userNote: "ø_User Note____å",
    	classificationSystem: "ø_Classification System_______å",
    	handlingDescription: "ø_Handling Description_______å"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ø_Spatial Representation Type_________å",
    	vector: "ø_Vector___å",
    	grid: "ø_Grid__å",
    	textTable: "ø_Text Table____å",
    	tin: "ø_TIN__å",
    	stereoModel: "ø_Stereo Model_____å",
    	video: "ø_Video___å"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ø_Topic Category_____å",
    	boundaries: "ø_Administrative and Political Boundaries_____________å",
    	farming: "ø_Agriculture and Farming________å",
    	climatologyMeteorologyAtmosphere: "ø_Atmosphere and Climatic________å",
    	biota: "ø_Biology and Ecology_______å",
    	economy: "ø_Business and Economic_______å",
    	planningCadastre: "ø_Cadastral____å",
    	society: "ø_Cultural, Society and Demography___________å",
    	elevation: "ø_Elevation and Derived Products__________å",
    	environment: "ø_Environment and Conservation_________å",
    	structure: "ø_Facilities and Structures_________å",
    	geoscientificInformation: "ø_Geological and Geophysical_________å",
    	health: "ø_Human Health and Disease________å",
    	imageryBaseMapsEarthCover: "ø_Imagery and Base Maps_______å",
    	inlandWaters: "ø_Inland Water Resources________å",
    	location: "ø_Locations and Geodetic Networks__________å",
    	intelligenceMilitary: "ø_Military___å",
    	oceans: "ø_Oceans and Estuaries_______å",
    	transportation: "ø_Transportation Networks________å",
    	utilitiesCommunication: "ø_Utilities and Communication_________å"
    },
    
    MI_ContextCode: {
    	caption: "ø_Context___å",
    	acquisition: "ø_Acquisition____å",
    	pass: "ø_Pass__å",
    	wayPoint: "ø_Waypoint___å"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ø_Environmental Conditions________å",
    	averageAirTemperature: "ø_Average Air Temperature________å",
    	maxRelativeHumidity: "ø_Maximum Relative Humidity_________å",
    	maxAltitude: "ø_Maximum Altitude______å",
    	meterologicalConditions: "ø_Meterological Conditions________å"
    },
    
    MI_Event: {
    	identifier: "ø_Event Identifier______å",
    	time: "ø_Time__å",
    	expectedObjectiveReference: "ø_Expected Objective (Objective Identifer)_____________å",
    	relatedSensorReference: "ø_Related Sensor (Instrument Identifer)____________å",
    	relatedPassReference: "ø_Related Pass (Platform Pass Identifer)____________å"
    },

    MI_GeometryTypeCode: {
    	point: "ø_Point___å",
    	linear: "ø_Linear___å",
    	areal: "ø_Areal___å",
    	strip: "ø_Strip___å"
    },
    
    MI_Instrument: {
    	citation: "ø_Instrument Citation_______å",
    	identifier: "ø_Instrument Identifier_______å",
    	sType: "ø_Instrument Type______å",
    	description: "ø_Instrument Description________å",
    	mountedOn: "ø_Mounted On____å",
    	mountedOnPlatformReference: "ø_Mounted On (Platform Identifier)___________å"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ø_Acquisition____å"
    },
    
    MI_Objective: {
    	caption: "ø_Objective____å",
    	identifier: "ø_Objective Identifier_______å",
    	priority: "ø_Priority of Target______å",
    	sFunction: "ø_Function of Objective_______å",
    	extent: "ø_Extent___å",
    	pass: "ø_Platform Pass_____å",
    	sensingInstrumentReference: "ø_Sensing Instrument (Instrument Identifier)______________å",
    	objectiveOccurrence: "ø_Events___å",
    	sections: {
    		identification: "ø_Identification_____å",
    		extent: "ø_Extent___å",
    		pass: "ø_Pass__å",
    		sensingInstrument: "ø_Sensing Instrument______å",
    		objectiveOccurrence: "ø_Events___å"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ø_Type (Collection Technique for Objective)_____________å",
    	instantaneousCollection: "ø_Instantaneous Collection________å",
    	persistentView: "ø_Persistent View______å",
    	survey: "ø_Survey___å"
    },
    
    MI_Operation: {
    	caption: "ø_Operation____å",
    	description: "ø_Operation Description_______å",
    	citation: "ø_Operation Citation______å",
    	identifier: "ø_Operation Identifier_______å",
    	status: "ø_Operation Status______å",
    	objectiveReference: "ø_Related Objective (Objective Identifier)_____________å",
    	planReference: "ø_Related Plan (Plan Identifier)__________å",
    	significantEventReference: "ø_Related Event (Event Identifier)___________å",
    	platformReference: "ø_Related Platform (Platform Identifier)____________å",
    	sections: {
    		identification: "ø_Identification_____å",
    		related: "ø_Related___å"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ø_Operation Type_____å",
    	real: "ø_Real__å",
    	simulated: "ø_Simulated____å",
    	synthesized: "ø_Synthesized____å"
    },
    
    MI_Plan: {
    	sType: "ø_Sampling Geometry for Collecting Data____________å",
    	status: "ø_Status of Plan_____å",
    	citation: "ø_Citation of Authority Requesting Collection______________å",
    	satisfiedRequirementReference: "ø_Satisfied Requirement (Requirement Identifier)_______________å",
    	operationReference: "ø_Related Operation (Operation Identifier)_____________å"
    },
    
    MI_Platform: {
    	citation: "ø_Platform Citation______å",
    	identifier: "ø_Platform Identifier_______å",
    	description: "ø_Description of Platform Supporting the Instrument________________å",
    	sponsor: "ø_Sponsor Organization for Platform___________å",
    	instrument: "ø_Instrument(s) mounted on the platform____________å",
    	instrumentReference: "ø_Instrument Identifier_______å",
    	sections: {
    		identification: "ø_Identification_____å",
    		sponsor: "ø_Sponsor___å",
    		instruments: "ø_Instruments____å"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ø_Platform Pass Identifier________å",
    	extent: "ø_Platform Pass Extent_______å",
    	relatedEventReference: "ø_Related Event (Event Identifer)__________å"
    },

    MI_PriorityCode: {
    	critical: "ø_Critical___å", 
    	highImportance: "ø_High Importance______å",
    	mediumImportance: "ø_Medium Importance______å",
    	lowImportance: "ø_Low Importance_____å"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ø_Requested Date Of Collection_________å",
    	latestAcceptableDate: "ø_Latest Acceptable Date________å"
    },
    
    MI_Requirement: {
    	caption: "ø_Requirement____å",
    	citation: "ø_Citation for Requirement Guidance Material______________å",
    	identifier: "ø_Requirement Identifier________å",
    	requestor: "ø_Requestor of Requirement________å",
    	recipient: "ø_Recipient of Requirement Results___________å",
    	priority: "ø_Requirement Priority_______å",
    	requestedDate: "ø_Requested Date_____å",
    	expiryDate: "ø_Expiry Date____å",
    	satisifiedPlanReference: "ø_Satisfied Plan (Plan Identifier)___________å",
    	sections: {
    		identification: "ø_Identification_____å",
    		requestor: "ø_Requestor____å",
    		recipient: "ø_Recipient____å",
    		priorityAndDates: "ø_Priority And Dates______å",
    		satisifiedPlan: "ø_Satisified  Plan______å"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ø_Sequence___å",
    	start: "ø_Start___å",
    	end: "ø_End__å",
    	instantaneous: "ø_Instantaneous_____å"
    },
    
    MI_TriggerCode: {
    	caption: "ø_Trigger___å",
    	automatic: "ø_Automatic____å",
    	manual: "ø_Manual___å",
    	preProgrammed: "ø_Preprogrammed_____å"
    },
    
    ObjectReference: {
    	uuidref: "ø_UUID Reference_____å",
    	xlinkref: "ø_URL Reference_____å"
    },
    
    RS_Identifier: {
    	caption: "ø_ID Plus Code Space______å",
    	code: "ø_Code__å",
    	codeSpace: "ø_Code Space____å"
    },
    
    SV_CouplingType: {
    	loose: "ø_Loose___å",
    	mixed: "ø_Mixed___å",
    	tight: "ø_Tight___å"
    },
    
    SV_OperationMetadata: {
    	operationName: "ø_Operation Name_____å",
    	DCP: "ø_DCP__å",
    	connectPoint: "ø_Connect Point_____å"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ø_ServiceType____å",
    	couplingType: "ø_Coupling Type_____å",
    	containsOperations: "ø_Operation Metadata______å",
    	operatesOn: "ø_Operates On____å"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ø_Indeterminate Position________å",
    	indeterminates: {
    		before: "ø_Before___å",
       	after: "ø_After___å",
      	now: "ø_Now__å",
      	unknown: "ø_Unknown___å"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ø_GEMET Concept Keyword_______å",
    		tool: "ø_Look Up____å...",
    		dialogTitle: "ø_GEMET - Concept Keyword________å",
    		searchLabel: "ø_Search___å:",
    		searchTip: "ø_Search GEMET_____å"
    	},
    	theme: {
    		tool: "ø_Look Up____å...",
    		dialogTitle: "ø_GEMET - Inspire Data Theme_________å"
    	},
    	ioerror: "ø_There was an error communicating with the GEMET service: {url}____________________å",
    	searching: "ø_Searching GEMET______å...",
    	noMatch: "ø_No matching results were found__________å.",
      languages: {
      	"bg": "ø_Bulgarian____å",
      	"cs": "ø_Czech___å",
      	"da": "ø_Danish___å",
      	"nl": "ø_Dutch___å",
      	"en": "ø_English___å",
      	"et": "ø_Estonian___å",
      	"fi": "ø_Finnish___å",
      	"fr": "ø_French___å",
      	"de": "ø_German___å",
      	"el": "ø_Greek___å",
      	"hu": "ø_Hungarian____å",
      	"ga": "ø_Gaelic (Irish)_____å",
      	"it": "ø_Italian___å",
      	"lv": "ø_Latvian___å",
      	"lt": "ø_Lithuanian____å",
      	"mt": "ø_Maltese___å",
      	"pl": "ø_Polish___å", 
      	"pt": "ø_Portuguese____å",
      	"ro": "ø_Romanian___å",
      	"sk": "ø_Slovak___å",
      	"sl": "ø_Slovenian____å",  	
      	"es": "ø_Spanish___å",
      	"sv": "ø_Swedish___å"
      }
    }
   
  })
);
