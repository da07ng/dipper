define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "å_ISO 19115 (Data)______ø",
    		description: ""
    	},
    	service: {
    		caption: "å_ISO 19119 (Service)_______ø",
    		description: ""
    	},
    	gmi: {
    		caption: "å_ISO 19115-2 (Imagery and Gridded Data)____________ø",
    		description: ""
    	}
    },
    
    general: {
    	reference: "å_Reference____ø"
    },
    
    sections: {
    	metadata: "å_Metadata___ø",
    	identification: "å_Identification_____ø",
    	distribution: "å_Distribution_____ø",
    	quality: "å_Quality___ø",
    	acquisition: "å_Acquisition____ø"
    },
    
    metadataSection: {
    	identifier: "å_Identifier____ø",
    	contact: "å_Contact___ø",
    	date: "å_Date__ø",
    	standard: "å_Standard___ø",
    	reference: "å_Reference____ø"
    },
    
    identificationSection: {
    	citation: "å_Citation___ø",
    	description: "å_Description____ø",
    	contact: "å_Contact___ø",
    	thumbnail: "å_Thumbnail____ø",
    	keywords: "å_Keywords___ø",
    	constraints: "å_Constraints____ø",
    	resource: "å_Resource___ø",
    	resourceTab: {
    		representation: "å_Representation_____ø",
    		language: "å_Language___ø",
    		classification: "å_Classification_____ø",
    		extent: "å_Extent___ø"
    	},
    	serviceResourceTab: {
    		serviceType: "å_Service Type_____ø",
    		extent: "å_Extent___ø",
    		couplingType: "å_Coupling Type_____ø",
    		operation: "å_Operation____ø",
    		operatesOn: "å_Operates On____ø"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "å_Scope___ø",
    	conformance: "å_Conformance____ø",
    	lineage: "å_Lineage___ø"
    },
    
    acquisitionSection: {
    	requirement: "å_Requirement____ø",
    	objective: "å_Objective____ø",
    	instrument: "å_Instrument____ø",
    	plan: "å_Plan__ø",
    	operation: "å_Operation____ø",
    	platform: "å_Platform___ø",
    	environment: "å_Environment____ø"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "å_Abstract___ø",
    	purpose: "å_Purpose___ø",
    	credit: "å_Credits___ø",
    	pointOfContact: "å_Point of Contact______ø",
    	resourceMaintenance: "å_Maintenance____ø",
    	graphicOverview: "å_Graphic Overview______ø",
    	descriptiveKeywords: "å_Keyword Collection______ø",
    	resourceConstraints: "å_Constraints____ø"
    },
    
    CI_Address: {
    	deliveryPoint: "å_Delivery Point_____ø",
    	city: "å_City__ø",
    	administrativeArea: "å_Administrative Area_______ø",
    	postalCode: "å_Postal Code____ø",
    	country: "å_Country___ø",
    	electronicMailAddress: "å_E-Mail Address_____ø"
    },
    
    CI_Citation: {
    	title: "å_Title___ø",
    	alternateTitle: "å_Alternate Title______ø",
    	identifier: "å_Unique Resource Identifier_________ø",
    	resource: {
    		title: "å_Resource Title_____ø",
    		date: "å_Resource Date_____ø"
    	},
    	specification: {
    		title: "å_Specification Title_______ø",
    		date: "å_Specification Date______ø"
    	}
    },
    
    CI_Contact: {
    	phone: "å_Phone___ø",
    	address: "å_Address___ø",
    	onlineResource: "å_Online Resource______ø",
    	hoursOfService: "å_Hours of Service______ø",
    	contactInstructions: "å_Contact Instructions_______ø"
    },
    
    CI_Date: {
    	date: "å_Date__ø",
    	dateType: "å_Date Type____ø"
    },
    
  	CI_DateTypeCode: {
  		caption: "å_Date Type____ø",
  		creation: "å_Creation Date_____ø",
  		publication: "å_Publication Date______ø",
  		revision: "å_Revision Date_____ø"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "å_Function___ø",
    	download: "å_Download___ø",
    	information: "å_Information____ø",
    	offlineAccess: "å_Offline Access_____ø",
    	order: "å_Order___ø",
    	search: "å_Search___ø"
    },
    
    CI_OnlineResource: {
    	caption: "å_Online Resource______ø",
    	linkage: "å_URL__ø",
    	protocol: "å_Protocol___ø",
    	applicationProfile: "å_Application Profile_______ø",
    	name: "å_Name__ø",
    	description: "å_Description____ø",
    	sFunction: "å_Function___ø"
    },
    
    CI_ResponsibleParty: {
    	caption: "å_Point of Contact______ø",
    	individualName: "å_Individual Name______ø",
    	organisationName: "å_Organisation Name______ø",
    	positionName: "å_Position Name_____ø",
    	contactInfo: "å_Contact Info_____ø",
    	role: "å_Role__ø"
    },
    
    CI_RoleCode: {
    	caption: "å_Role__ø",
    	resourceProvider: "å_Resource Provider______ø",
    	custodian: "å_Custodian____ø",
    	owner: "å_Owner___ø",
    	user: "å_User__ø",
    	distributor: "å_Distributor____ø",
    	originator: "å_Originator____ø",
    	pointOfContact: "å_Point of Contact______ø",
    	principalInvestigator: "å_Principal Investigator________ø",
    	processor: "å_Processor____ø",
    	publisher: "å_Publisher____ø",
    	author: "å_Author___ø"
    },
    
    CI_Telephone: {
    	voice: "å_Voice___ø",
    	facsimile: "å_Fax__ø"
    },
    
    DCPList: {
    	caption: "å_DCP__ø",
    	XML: "å_XML__ø",
    	CORBA: "å_CORBA___ø",
    	JAVA: "å_JAVA__ø",
    	COM: "å_COM__ø",
    	SQL: "å_SQL__ø",
    	WebServices: "å_WebServices____ø"
    },
    
    DQ_ConformanceResult: {
    	caption: "å_Conformance Result______ø",
    	explanation: "å_Explanation____ø",
    	degree: {
    		caption: "å_Degree___ø",
    		validationPerformed: "å_Validation Performed_______ø",
    		conformant: "å_Conformant____ø",
    		nonConformant: "å_Non Conformant_____ø"
    	}
    },
    
    DQ_DataQuality: {
    	report: "å_Report___ø"
    },
    
    DQ_Scope : {
    	level: "å_Scope (quality information applies to)____________ø",
    	levelDescription: "å_Level Description______ø"
    },
    
    EX_Extent: {
    	caption: "å_Extent___ø",
    	description: "å_Description____ø",
    	geographicElement: "å_Spatial Extent_____ø",
    	temporalElement: "å_Temporal Extent______ø",
    	verticalElement: "å_Vertical Extent______ø"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "å_West Bounding Longitude________ø",
    	eastBoundLongitude: "å_East Bounding Longitude________ø",
    	southBoundLatitude: "å_South Bounding Latitude________ø",
    	northBoundLatitude: "å_North Bounding Latitude________ø"
    },
    
    EX_GeographicDescription: {
    	caption: "å_Geographic Description________ø"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "å_Begin Date____ø",
    		endPosition: "å_End Date___ø"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "å_Minimum Value_____ø",
    	maximumValue: "å_Maximum Value_____ø",
    	verticalCRS: "å_Vertical CRS_____ø"
    },
    
    Length: {
    	caption: "å_Length___ø",
    	uom: "å_Units of Measure______ø",
    	km: "å_Kilometers____ø",
    	m: "å_Meters___ø",
    	mi: "å_Miles___ø",
    	ft: "å_Feet__ø"
    },
    
    LI_Lineage: {
    	statement: "å_Lineage Statement______ø"
    },
    
    MD_BrowseGraphic: {
    	fileName: "å_Browse Graphic URL______ø",
    	fileDescription: "å_Browse Graphic Caption________ø",
    	fileType: "å_Browse Graphic Type_______ø"
    },
    
    MD_ClassificationCode: {
    	unclassified: "å_Unclassified_____ø",
    	restricted: "å_Restricted____ø",
    	confidential: "å_Confidential_____ø",
    	secret: "å_Secret___ø",
    	topSecret: "å_Top Secret____ø"
    },
    
    MD_Constraints: {
    	caption: "å_Usage Constraints______ø",
    	useLimitation: "å_Use Limitation_____ø"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "å_Spatial Representation Type_________ø",
    	spatialResolution: "å_Spatial Resolution______ø",
    	language: "å_Resource Language______ø",
    	supplementalInformation: "å_Supplemental_____ø"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "å_Online___ø"
    },
    
    MD_Distribution: {
    	distributionFormat: "å_Distribution Format_______ø",
    	transferOptions: "å_Transfer Options______ø"
    },
    
    MD_Format: {
    	name: "å_Format Name____ø",
    	version: "å_Format Version_____ø"
    },
    
    MD_Identifier: {
    	caption: "å_URI__ø",
    	identifierCaption: "å_Identifier____ø",
    	code: "å_Code__ø"
    },
    
    MD_Keywords: {
    	delimitedCaption: "å_Keywords___ø",
    	thesaurusName: "å_Associated Thesaurus_______ø"
    },
    
    MD_KeywordTypeCode: {
    	caption: "å_Keyword Type_____ø",
    	discipline: "å_Discipline____ø",
    	place: "å_Place___ø",
    	stratum: "å_Stratum___ø",
    	temporal: "å_Temporal___ø",
    	theme: "å_Theme___ø"
    },
    
    MD_LegalConstraints: {
    	caption: "å_Legal Constraints______ø",
    	accessConstraints: "å_Access Constraints______ø",
    	useConstraints: "å_Use Constraints______ø",
    	otherConstraints: "å_Other Constraints______ø"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "å_Frequency____ø",
    	continual: "å_Continual____ø",
    	daily: "å_Daily___ø",
    	weekly: "å_Weekly___ø",
    	fortnightly: "å_Fortnightly____ø",
    	monthly: "å_Monthly___ø",
    	quarterly: "å_Quarterly____ø",
    	biannually: "å_Biannually____ø",
    	annually: "å_Annually___ø",
    	asNeeded: "å_As Needed____ø",
    	irregular: "å_Irregular____ø",
    	notPlanned: "å_Not Planned____ø",
    	unknown: "å_Unknown___ø"
    },
    
    MD_Metadata: {
    	caption: "å_Metadata___ø",
    	fileIdentifier: "å_File Identifier______ø",
    	language: "å_Metadata Language______ø",
    	hierarchyLevel: "å_Hierarchy Level______ø",
    	hierarchyLevelName: "å_Hierarchy Level Name_______ø",
    	contact: "å_Metadata Contact______ø",
    	dateStamp: "å_Metadata Date_____ø",
    	metadataStandardName: "å_Metadata Standard Name________ø",
    	metadataStandardVersion: "å_Metadata Standard Version_________ø",
    	referenceSystemInfo: "å_Reference System______ø",
    	identificationInfo: "å_Identification_____ø",
    	distributionInfo: "å_Distribution_____ø",
    	dataQualityInfo: "å_Quality___ø"
    },
    
    MD_ProgressCode: {
    	caption: "å_Progress Code_____ø",
    	completed: "å_Completed____ø",
    	historicalArchive: "å_Historical Archive______ø",
    	obsolete: "å_Obsolete___ø",
    	onGoing: "å_On Going___ø",
    	planned: "å_Planned___ø",
    	required: "å_Required___ø",
    	underDevelopment: "å_Under Development______ø"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "å_Denominator____ø"
    },
    
    MD_Resolution: {
    	equivalentScale: "å_Equivalent Scale______ø",
    	distance: "å_Distance___ø"
    },
    
    MD_RestrictionCode: {
    	copyright: "å_Copyright____ø",
    	patent: "å_Patent___ø",
    	patentPending: "å_Patent Pending_____ø",
    	trademark: "å_Trademark____ø",
    	license: "å_License___ø",
    	intellectualPropertyRights: "å_Intellectual Property Rights_________ø",
    	restricted: "å_Restricted____ø",
    	otherRestrictions: "å_Other Restrictions______ø"
    },
    
    MD_ScopeCode: {
    	attribute: "å_Attribute____ø",
    	attributeType: "å_Attribute type_____ø",
    	collectionHardware: "å_Collection hardware_______ø",
    	collectionSession: "å_Collection session______ø",
    	dataset: "å_Dataset___ø",
    	series: "å_Series___ø",
    	nonGeographicDataset: "å_Non geographic dataset________ø",
    	dimensionGroup: "å_Dimension group______ø",
    	feature: "å_Feature___ø",
    	featureType: "å_Feature type_____ø",
    	propertyType: "å_Property type_____ø",
    	fieldSession: "å_Field session_____ø",
    	software: "å_Software___ø",
    	service: "å_Service___ø",
    	model: "å_Model___ø",
    	tile: "å_Tile__ø"
    },
    
    MD_ScopeDescription: {
    	attributes: "å_Attributes____ø",
    	features: "å_Features___ø",
    	featureInstances: "å_Feature Instances______ø",
    	attributeInstances: "å_Attribute Instances_______ø",
    	dataset: "å_Dataset___ø",
    	other: "å_Other___ø"
    },
    
    MD_SecurityConstraints: {
    	caption: "å_Security Constraints_______ø",
    	classification: "å_Classification_____ø",
    	userNote: "å_User Note____ø",
    	classificationSystem: "å_Classification System_______ø",
    	handlingDescription: "å_Handling Description_______ø"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "å_Spatial Representation Type_________ø",
    	vector: "å_Vector___ø",
    	grid: "å_Grid__ø",
    	textTable: "å_Text Table____ø",
    	tin: "å_TIN__ø",
    	stereoModel: "å_Stereo Model_____ø",
    	video: "å_Video___ø"
    },
    
    MD_TopicCategoryCode: {
    	caption: "å_Topic Category_____ø",
    	boundaries: "å_Administrative and Political Boundaries_____________ø",
    	farming: "å_Agriculture and Farming________ø",
    	climatologyMeteorologyAtmosphere: "å_Atmosphere and Climatic________ø",
    	biota: "å_Biology and Ecology_______ø",
    	economy: "å_Business and Economic_______ø",
    	planningCadastre: "å_Cadastral____ø",
    	society: "å_Cultural, Society and Demography___________ø",
    	elevation: "å_Elevation and Derived Products__________ø",
    	environment: "å_Environment and Conservation_________ø",
    	structure: "å_Facilities and Structures_________ø",
    	geoscientificInformation: "å_Geological and Geophysical_________ø",
    	health: "å_Human Health and Disease________ø",
    	imageryBaseMapsEarthCover: "å_Imagery and Base Maps_______ø",
    	inlandWaters: "å_Inland Water Resources________ø",
    	location: "å_Locations and Geodetic Networks__________ø",
    	intelligenceMilitary: "å_Military___ø",
    	oceans: "å_Oceans and Estuaries_______ø",
    	transportation: "å_Transportation Networks________ø",
    	utilitiesCommunication: "å_Utilities and Communication_________ø"
    },
    
    MI_ContextCode: {
    	caption: "å_Context___ø",
    	acquisition: "å_Acquisition____ø",
    	pass: "å_Pass__ø",
    	wayPoint: "å_Waypoint___ø"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "å_Environmental Conditions________ø",
    	averageAirTemperature: "å_Average Air Temperature________ø",
    	maxRelativeHumidity: "å_Maximum Relative Humidity_________ø",
    	maxAltitude: "å_Maximum Altitude______ø",
    	meterologicalConditions: "å_Meterological Conditions________ø"
    },
    
    MI_Event: {
    	identifier: "å_Event Identifier______ø",
    	time: "å_Time__ø",
    	expectedObjectiveReference: "å_Expected Objective (Objective Identifer)_____________ø",
    	relatedSensorReference: "å_Related Sensor (Instrument Identifer)____________ø",
    	relatedPassReference: "å_Related Pass (Platform Pass Identifer)____________ø"
    },

    MI_GeometryTypeCode: {
    	point: "å_Point___ø",
    	linear: "å_Linear___ø",
    	areal: "å_Areal___ø",
    	strip: "å_Strip___ø"
    },
    
    MI_Instrument: {
    	citation: "å_Instrument Citation_______ø",
    	identifier: "å_Instrument Identifier_______ø",
    	sType: "å_Instrument Type______ø",
    	description: "å_Instrument Description________ø",
    	mountedOn: "å_Mounted On____ø",
    	mountedOnPlatformReference: "å_Mounted On (Platform Identifier)___________ø"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "å_Acquisition____ø"
    },
    
    MI_Objective: {
    	caption: "å_Objective____ø",
    	identifier: "å_Objective Identifier_______ø",
    	priority: "å_Priority of Target______ø",
    	sFunction: "å_Function of Objective_______ø",
    	extent: "å_Extent___ø",
    	pass: "å_Platform Pass_____ø",
    	sensingInstrumentReference: "å_Sensing Instrument (Instrument Identifier)______________ø",
    	objectiveOccurrence: "å_Events___ø",
    	sections: {
    		identification: "å_Identification_____ø",
    		extent: "å_Extent___ø",
    		pass: "å_Pass__ø",
    		sensingInstrument: "å_Sensing Instrument______ø",
    		objectiveOccurrence: "å_Events___ø"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "å_Type (Collection Technique for Objective)_____________ø",
    	instantaneousCollection: "å_Instantaneous Collection________ø",
    	persistentView: "å_Persistent View______ø",
    	survey: "å_Survey___ø"
    },
    
    MI_Operation: {
    	caption: "å_Operation____ø",
    	description: "å_Operation Description_______ø",
    	citation: "å_Operation Citation______ø",
    	identifier: "å_Operation Identifier_______ø",
    	status: "å_Operation Status______ø",
    	objectiveReference: "å_Related Objective (Objective Identifier)_____________ø",
    	planReference: "å_Related Plan (Plan Identifier)__________ø",
    	significantEventReference: "å_Related Event (Event Identifier)___________ø",
    	platformReference: "å_Related Platform (Platform Identifier)____________ø",
    	sections: {
    		identification: "å_Identification_____ø",
    		related: "å_Related___ø"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "å_Operation Type_____ø",
    	real: "å_Real__ø",
    	simulated: "å_Simulated____ø",
    	synthesized: "å_Synthesized____ø"
    },
    
    MI_Plan: {
    	sType: "å_Sampling Geometry for Collecting Data____________ø",
    	status: "å_Status of Plan_____ø",
    	citation: "å_Citation of Authority Requesting Collection______________ø",
    	satisfiedRequirementReference: "å_Satisfied Requirement (Requirement Identifier)_______________ø",
    	operationReference: "å_Related Operation (Operation Identifier)_____________ø"
    },
    
    MI_Platform: {
    	citation: "å_Platform Citation______ø",
    	identifier: "å_Platform Identifier_______ø",
    	description: "å_Description of Platform Supporting the Instrument________________ø",
    	sponsor: "å_Sponsor Organization for Platform___________ø",
    	instrument: "å_Instrument(s) mounted on the platform____________ø",
    	instrumentReference: "å_Instrument Identifier_______ø",
    	sections: {
    		identification: "å_Identification_____ø",
    		sponsor: "å_Sponsor___ø",
    		instruments: "å_Instruments____ø"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "å_Platform Pass Identifier________ø",
    	extent: "å_Platform Pass Extent_______ø",
    	relatedEventReference: "å_Related Event (Event Identifer)__________ø"
    },

    MI_PriorityCode: {
    	critical: "å_Critical___ø", 
    	highImportance: "å_High Importance______ø",
    	mediumImportance: "å_Medium Importance______ø",
    	lowImportance: "å_Low Importance_____ø"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "å_Requested Date Of Collection_________ø",
    	latestAcceptableDate: "å_Latest Acceptable Date________ø"
    },
    
    MI_Requirement: {
    	caption: "å_Requirement____ø",
    	citation: "å_Citation for Requirement Guidance Material______________ø",
    	identifier: "å_Requirement Identifier________ø",
    	requestor: "å_Requestor of Requirement________ø",
    	recipient: "å_Recipient of Requirement Results___________ø",
    	priority: "å_Requirement Priority_______ø",
    	requestedDate: "å_Requested Date_____ø",
    	expiryDate: "å_Expiry Date____ø",
    	satisifiedPlanReference: "å_Satisfied Plan (Plan Identifier)___________ø",
    	sections: {
    		identification: "å_Identification_____ø",
    		requestor: "å_Requestor____ø",
    		recipient: "å_Recipient____ø",
    		priorityAndDates: "å_Priority And Dates______ø",
    		satisifiedPlan: "å_Satisified  Plan______ø"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "å_Sequence___ø",
    	start: "å_Start___ø",
    	end: "å_End__ø",
    	instantaneous: "å_Instantaneous_____ø"
    },
    
    MI_TriggerCode: {
    	caption: "å_Trigger___ø",
    	automatic: "å_Automatic____ø",
    	manual: "å_Manual___ø",
    	preProgrammed: "å_Preprogrammed_____ø"
    },
    
    ObjectReference: {
    	uuidref: "å_UUID Reference_____ø",
    	xlinkref: "å_URL Reference_____ø"
    },
    
    RS_Identifier: {
    	caption: "å_ID Plus Code Space______ø",
    	code: "å_Code__ø",
    	codeSpace: "å_Code Space____ø"
    },
    
    SV_CouplingType: {
    	loose: "å_Loose___ø",
    	mixed: "å_Mixed___ø",
    	tight: "å_Tight___ø"
    },
    
    SV_OperationMetadata: {
    	operationName: "å_Operation Name_____ø",
    	DCP: "å_DCP__ø",
    	connectPoint: "å_Connect Point_____ø"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "å_ServiceType____ø",
    	couplingType: "å_Coupling Type_____ø",
    	containsOperations: "å_Operation Metadata______ø",
    	operatesOn: "å_Operates On____ø"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "å_Indeterminate Position________ø",
    	indeterminates: {
    		before: "å_Before___ø",
       	after: "å_After___ø",
      	now: "å_Now__ø",
      	unknown: "å_Unknown___ø"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "å_GEMET Concept Keyword_______ø",
    		tool: "å_Look Up____ø...",
    		dialogTitle: "å_GEMET - Concept Keyword________ø",
    		searchLabel: "å_Search___ø:",
    		searchTip: "å_Search GEMET_____ø"
    	},
    	theme: {
    		tool: "å_Look Up____ø...",
    		dialogTitle: "å_GEMET - Inspire Data Theme_________ø"
    	},
    	ioerror: "å_There was an error communicating with the GEMET service: {url}____________________ø",
    	searching: "å_Searching GEMET______ø...",
    	noMatch: "å_No matching results were found__________ø.",
      languages: {
      	"bg": "å_Bulgarian____ø",
      	"cs": "å_Czech___ø",
      	"da": "å_Danish___ø",
      	"nl": "å_Dutch___ø",
      	"en": "å_English___ø",
      	"et": "å_Estonian___ø",
      	"fi": "å_Finnish___ø",
      	"fr": "å_French___ø",
      	"de": "å_German___ø",
      	"el": "å_Greek___ø",
      	"hu": "å_Hungarian____ø",
      	"ga": "å_Gaelic (Irish)_____ø",
      	"it": "å_Italian___ø",
      	"lv": "å_Latvian___ø",
      	"lt": "å_Lithuanian____ø",
      	"mt": "å_Maltese___ø",
      	"pl": "å_Polish___ø", 
      	"pt": "å_Portuguese____ø",
      	"ro": "å_Romanian___ø",
      	"sk": "å_Slovak___ø",
      	"sl": "å_Slovenian____ø",  	
      	"es": "å_Spanish___ø",
      	"sv": "å_Swedish___ø"
      }
    }
   
  })
);
