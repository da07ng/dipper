define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "Į_ISO 19115 (Data)______š",
    		description: ""
    	},
    	service: {
    		caption: "Į_ISO 19119 (Service)_______š",
    		description: ""
    	},
    	gmi: {
    		caption: "Į_ISO 19115-2 (Imagery and Gridded Data)____________š",
    		description: ""
    	}
    },
    
    general: {
    	reference: "Į_Reference____š"
    },
    
    sections: {
    	metadata: "Į_Metadata___š",
    	identification: "Į_Identification_____š",
    	distribution: "Į_Distribution_____š",
    	quality: "Į_Quality___š",
    	acquisition: "Į_Acquisition____š"
    },
    
    metadataSection: {
    	identifier: "Į_Identifier____š",
    	contact: "Į_Contact___š",
    	date: "Į_Date__š",
    	standard: "Į_Standard___š",
    	reference: "Į_Reference____š"
    },
    
    identificationSection: {
    	citation: "Į_Citation___š",
    	description: "Į_Description____š",
    	contact: "Į_Contact___š",
    	thumbnail: "Į_Thumbnail____š",
    	keywords: "Į_Keywords___š",
    	constraints: "Į_Constraints____š",
    	resource: "Į_Resource___š",
    	resourceTab: {
    		representation: "Į_Representation_____š",
    		language: "Į_Language___š",
    		classification: "Į_Classification_____š",
    		extent: "Į_Extent___š"
    	},
    	serviceResourceTab: {
    		serviceType: "Į_Service Type_____š",
    		extent: "Į_Extent___š",
    		couplingType: "Į_Coupling Type_____š",
    		operation: "Į_Operation____š",
    		operatesOn: "Į_Operates On____š"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "Į_Scope___š",
    	conformance: "Į_Conformance____š",
    	lineage: "Į_Lineage___š"
    },
    
    acquisitionSection: {
    	requirement: "Į_Requirement____š",
    	objective: "Į_Objective____š",
    	instrument: "Į_Instrument____š",
    	plan: "Į_Plan__š",
    	operation: "Į_Operation____š",
    	platform: "Į_Platform___š",
    	environment: "Į_Environment____š"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "Į_Abstract___š",
    	purpose: "Į_Purpose___š",
    	credit: "Į_Credits___š",
    	pointOfContact: "Į_Point of Contact______š",
    	resourceMaintenance: "Į_Maintenance____š",
    	graphicOverview: "Į_Graphic Overview______š",
    	descriptiveKeywords: "Į_Keyword Collection______š",
    	resourceConstraints: "Į_Constraints____š"
    },
    
    CI_Address: {
    	deliveryPoint: "Į_Delivery Point_____š",
    	city: "Į_City__š",
    	administrativeArea: "Į_Administrative Area_______š",
    	postalCode: "Į_Postal Code____š",
    	country: "Į_Country___š",
    	electronicMailAddress: "Į_E-Mail Address_____š"
    },
    
    CI_Citation: {
    	title: "Į_Title___š",
    	alternateTitle: "Į_Alternate Title______š",
    	identifier: "Į_Unique Resource Identifier_________š",
    	resource: {
    		title: "Į_Resource Title_____š",
    		date: "Į_Resource Date_____š"
    	},
    	specification: {
    		title: "Į_Specification Title_______š",
    		date: "Į_Specification Date______š"
    	}
    },
    
    CI_Contact: {
    	phone: "Į_Phone___š",
    	address: "Į_Address___š",
    	onlineResource: "Į_Online Resource______š",
    	hoursOfService: "Į_Hours of Service______š",
    	contactInstructions: "Į_Contact Instructions_______š"
    },
    
    CI_Date: {
    	date: "Į_Date__š",
    	dateType: "Į_Date Type____š"
    },
    
  	CI_DateTypeCode: {
  		caption: "Į_Date Type____š",
  		creation: "Į_Creation Date_____š",
  		publication: "Į_Publication Date______š",
  		revision: "Į_Revision Date_____š"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "Į_Function___š",
    	download: "Į_Download___š",
    	information: "Į_Information____š",
    	offlineAccess: "Į_Offline Access_____š",
    	order: "Į_Order___š",
    	search: "Į_Search___š"
    },
    
    CI_OnlineResource: {
    	caption: "Į_Online Resource______š",
    	linkage: "Į_URL__š",
    	protocol: "Į_Protocol___š",
    	applicationProfile: "Į_Application Profile_______š",
    	name: "Į_Name__š",
    	description: "Į_Description____š",
    	sFunction: "Į_Function___š"
    },
    
    CI_ResponsibleParty: {
    	caption: "Į_Point of Contact______š",
    	individualName: "Į_Individual Name______š",
    	organisationName: "Į_Organisation Name______š",
    	positionName: "Į_Position Name_____š",
    	contactInfo: "Į_Contact Info_____š",
    	role: "Į_Role__š"
    },
    
    CI_RoleCode: {
    	caption: "Į_Role__š",
    	resourceProvider: "Į_Resource Provider______š",
    	custodian: "Į_Custodian____š",
    	owner: "Į_Owner___š",
    	user: "Į_User__š",
    	distributor: "Į_Distributor____š",
    	originator: "Į_Originator____š",
    	pointOfContact: "Į_Point of Contact______š",
    	principalInvestigator: "Į_Principal Investigator________š",
    	processor: "Į_Processor____š",
    	publisher: "Į_Publisher____š",
    	author: "Į_Author___š"
    },
    
    CI_Telephone: {
    	voice: "Į_Voice___š",
    	facsimile: "Į_Fax__š"
    },
    
    DCPList: {
    	caption: "Į_DCP__š",
    	XML: "Į_XML__š",
    	CORBA: "Į_CORBA___š",
    	JAVA: "Į_JAVA__š",
    	COM: "Į_COM__š",
    	SQL: "Į_SQL__š",
    	WebServices: "Į_WebServices____š"
    },
    
    DQ_ConformanceResult: {
    	caption: "Į_Conformance Result______š",
    	explanation: "Į_Explanation____š",
    	degree: {
    		caption: "Į_Degree___š",
    		validationPerformed: "Į_Validation Performed_______š",
    		conformant: "Į_Conformant____š",
    		nonConformant: "Į_Non Conformant_____š"
    	}
    },
    
    DQ_DataQuality: {
    	report: "Į_Report___š"
    },
    
    DQ_Scope : {
    	level: "Į_Scope (quality information applies to)____________š",
    	levelDescription: "Į_Level Description______š"
    },
    
    EX_Extent: {
    	caption: "Į_Extent___š",
    	description: "Į_Description____š",
    	geographicElement: "Į_Spatial Extent_____š",
    	temporalElement: "Į_Temporal Extent______š",
    	verticalElement: "Į_Vertical Extent______š"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "Į_West Bounding Longitude________š",
    	eastBoundLongitude: "Į_East Bounding Longitude________š",
    	southBoundLatitude: "Į_South Bounding Latitude________š",
    	northBoundLatitude: "Į_North Bounding Latitude________š"
    },
    
    EX_GeographicDescription: {
    	caption: "Į_Geographic Description________š"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "Į_Begin Date____š",
    		endPosition: "Į_End Date___š"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "Į_Minimum Value_____š",
    	maximumValue: "Į_Maximum Value_____š",
    	verticalCRS: "Į_Vertical CRS_____š"
    },
    
    Length: {
    	caption: "Į_Length___š",
    	uom: "Į_Units of Measure______š",
    	km: "Į_Kilometers____š",
    	m: "Į_Meters___š",
    	mi: "Į_Miles___š",
    	ft: "Į_Feet__š"
    },
    
    LI_Lineage: {
    	statement: "Į_Lineage Statement______š"
    },
    
    MD_BrowseGraphic: {
    	fileName: "Į_Browse Graphic URL______š",
    	fileDescription: "Į_Browse Graphic Caption________š",
    	fileType: "Į_Browse Graphic Type_______š"
    },
    
    MD_ClassificationCode: {
    	unclassified: "Į_Unclassified_____š",
    	restricted: "Į_Restricted____š",
    	confidential: "Į_Confidential_____š",
    	secret: "Į_Secret___š",
    	topSecret: "Į_Top Secret____š"
    },
    
    MD_Constraints: {
    	caption: "Į_Usage Constraints______š",
    	useLimitation: "Į_Use Limitation_____š"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "Į_Spatial Representation Type_________š",
    	spatialResolution: "Į_Spatial Resolution______š",
    	language: "Į_Resource Language______š",
    	supplementalInformation: "Į_Supplemental_____š"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "Į_Online___š"
    },
    
    MD_Distribution: {
    	distributionFormat: "Į_Distribution Format_______š",
    	transferOptions: "Į_Transfer Options______š"
    },
    
    MD_Format: {
    	name: "Į_Format Name____š",
    	version: "Į_Format Version_____š"
    },
    
    MD_Identifier: {
    	caption: "Į_URI__š",
    	identifierCaption: "Į_Identifier____š",
    	code: "Į_Code__š"
    },
    
    MD_Keywords: {
    	delimitedCaption: "Į_Keywords___š",
    	thesaurusName: "Į_Associated Thesaurus_______š"
    },
    
    MD_KeywordTypeCode: {
    	caption: "Į_Keyword Type_____š",
    	discipline: "Į_Discipline____š",
    	place: "Į_Place___š",
    	stratum: "Į_Stratum___š",
    	temporal: "Į_Temporal___š",
    	theme: "Į_Theme___š"
    },
    
    MD_LegalConstraints: {
    	caption: "Į_Legal Constraints______š",
    	accessConstraints: "Į_Access Constraints______š",
    	useConstraints: "Į_Use Constraints______š",
    	otherConstraints: "Į_Other Constraints______š"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "Į_Frequency____š",
    	continual: "Į_Continual____š",
    	daily: "Į_Daily___š",
    	weekly: "Į_Weekly___š",
    	fortnightly: "Į_Fortnightly____š",
    	monthly: "Į_Monthly___š",
    	quarterly: "Į_Quarterly____š",
    	biannually: "Į_Biannually____š",
    	annually: "Į_Annually___š",
    	asNeeded: "Į_As Needed____š",
    	irregular: "Į_Irregular____š",
    	notPlanned: "Į_Not Planned____š",
    	unknown: "Į_Unknown___š"
    },
    
    MD_Metadata: {
    	caption: "Į_Metadata___š",
    	fileIdentifier: "Į_File Identifier______š",
    	language: "Į_Metadata Language______š",
    	hierarchyLevel: "Į_Hierarchy Level______š",
    	hierarchyLevelName: "Į_Hierarchy Level Name_______š",
    	contact: "Į_Metadata Contact______š",
    	dateStamp: "Į_Metadata Date_____š",
    	metadataStandardName: "Į_Metadata Standard Name________š",
    	metadataStandardVersion: "Į_Metadata Standard Version_________š",
    	referenceSystemInfo: "Į_Reference System______š",
    	identificationInfo: "Į_Identification_____š",
    	distributionInfo: "Į_Distribution_____š",
    	dataQualityInfo: "Į_Quality___š"
    },
    
    MD_ProgressCode: {
    	caption: "Į_Progress Code_____š",
    	completed: "Į_Completed____š",
    	historicalArchive: "Į_Historical Archive______š",
    	obsolete: "Į_Obsolete___š",
    	onGoing: "Į_On Going___š",
    	planned: "Į_Planned___š",
    	required: "Į_Required___š",
    	underDevelopment: "Į_Under Development______š"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "Į_Denominator____š"
    },
    
    MD_Resolution: {
    	equivalentScale: "Į_Equivalent Scale______š",
    	distance: "Į_Distance___š"
    },
    
    MD_RestrictionCode: {
    	copyright: "Į_Copyright____š",
    	patent: "Į_Patent___š",
    	patentPending: "Į_Patent Pending_____š",
    	trademark: "Į_Trademark____š",
    	license: "Į_License___š",
    	intellectualPropertyRights: "Į_Intellectual Property Rights_________š",
    	restricted: "Į_Restricted____š",
    	otherRestrictions: "Į_Other Restrictions______š"
    },
    
    MD_ScopeCode: {
    	attribute: "Į_Attribute____š",
    	attributeType: "Į_Attribute type_____š",
    	collectionHardware: "Į_Collection hardware_______š",
    	collectionSession: "Į_Collection session______š",
    	dataset: "Į_Dataset___š",
    	series: "Į_Series___š",
    	nonGeographicDataset: "Į_Non geographic dataset________š",
    	dimensionGroup: "Į_Dimension group______š",
    	feature: "Į_Feature___š",
    	featureType: "Į_Feature type_____š",
    	propertyType: "Į_Property type_____š",
    	fieldSession: "Į_Field session_____š",
    	software: "Į_Software___š",
    	service: "Į_Service___š",
    	model: "Į_Model___š",
    	tile: "Į_Tile__š"
    },
    
    MD_ScopeDescription: {
    	attributes: "Į_Attributes____š",
    	features: "Į_Features___š",
    	featureInstances: "Į_Feature Instances______š",
    	attributeInstances: "Į_Attribute Instances_______š",
    	dataset: "Į_Dataset___š",
    	other: "Į_Other___š"
    },
    
    MD_SecurityConstraints: {
    	caption: "Į_Security Constraints_______š",
    	classification: "Į_Classification_____š",
    	userNote: "Į_User Note____š",
    	classificationSystem: "Į_Classification System_______š",
    	handlingDescription: "Į_Handling Description_______š"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "Į_Spatial Representation Type_________š",
    	vector: "Į_Vector___š",
    	grid: "Į_Grid__š",
    	textTable: "Į_Text Table____š",
    	tin: "Į_TIN__š",
    	stereoModel: "Į_Stereo Model_____š",
    	video: "Į_Video___š"
    },
    
    MD_TopicCategoryCode: {
    	caption: "Į_Topic Category_____š",
    	boundaries: "Į_Administrative and Political Boundaries_____________š",
    	farming: "Į_Agriculture and Farming________š",
    	climatologyMeteorologyAtmosphere: "Į_Atmosphere and Climatic________š",
    	biota: "Į_Biology and Ecology_______š",
    	economy: "Į_Business and Economic_______š",
    	planningCadastre: "Į_Cadastral____š",
    	society: "Į_Cultural, Society and Demography___________š",
    	elevation: "Į_Elevation and Derived Products__________š",
    	environment: "Į_Environment and Conservation_________š",
    	structure: "Į_Facilities and Structures_________š",
    	geoscientificInformation: "Į_Geological and Geophysical_________š",
    	health: "Į_Human Health and Disease________š",
    	imageryBaseMapsEarthCover: "Į_Imagery and Base Maps_______š",
    	inlandWaters: "Į_Inland Water Resources________š",
    	location: "Į_Locations and Geodetic Networks__________š",
    	intelligenceMilitary: "Į_Military___š",
    	oceans: "Į_Oceans and Estuaries_______š",
    	transportation: "Į_Transportation Networks________š",
    	utilitiesCommunication: "Į_Utilities and Communication_________š"
    },
    
    MI_ContextCode: {
    	caption: "Į_Context___š",
    	acquisition: "Į_Acquisition____š",
    	pass: "Į_Pass__š",
    	wayPoint: "Į_Waypoint___š"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "Į_Environmental Conditions________š",
    	averageAirTemperature: "Į_Average Air Temperature________š",
    	maxRelativeHumidity: "Į_Maximum Relative Humidity_________š",
    	maxAltitude: "Į_Maximum Altitude______š",
    	meterologicalConditions: "Į_Meterological Conditions________š"
    },
    
    MI_Event: {
    	identifier: "Į_Event Identifier______š",
    	time: "Į_Time__š",
    	expectedObjectiveReference: "Į_Expected Objective (Objective Identifer)_____________š",
    	relatedSensorReference: "Į_Related Sensor (Instrument Identifer)____________š",
    	relatedPassReference: "Į_Related Pass (Platform Pass Identifer)____________š"
    },

    MI_GeometryTypeCode: {
    	point: "Į_Point___š",
    	linear: "Į_Linear___š",
    	areal: "Į_Areal___š",
    	strip: "Į_Strip___š"
    },
    
    MI_Instrument: {
    	citation: "Į_Instrument Citation_______š",
    	identifier: "Į_Instrument Identifier_______š",
    	sType: "Į_Instrument Type______š",
    	description: "Į_Instrument Description________š",
    	mountedOn: "Į_Mounted On____š",
    	mountedOnPlatformReference: "Į_Mounted On (Platform Identifier)___________š"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "Į_Acquisition____š"
    },
    
    MI_Objective: {
    	caption: "Į_Objective____š",
    	identifier: "Į_Objective Identifier_______š",
    	priority: "Į_Priority of Target______š",
    	sFunction: "Į_Function of Objective_______š",
    	extent: "Į_Extent___š",
    	pass: "Į_Platform Pass_____š",
    	sensingInstrumentReference: "Į_Sensing Instrument (Instrument Identifier)______________š",
    	objectiveOccurrence: "Į_Events___š",
    	sections: {
    		identification: "Į_Identification_____š",
    		extent: "Į_Extent___š",
    		pass: "Į_Pass__š",
    		sensingInstrument: "Į_Sensing Instrument______š",
    		objectiveOccurrence: "Į_Events___š"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "Į_Type (Collection Technique for Objective)_____________š",
    	instantaneousCollection: "Į_Instantaneous Collection________š",
    	persistentView: "Į_Persistent View______š",
    	survey: "Į_Survey___š"
    },
    
    MI_Operation: {
    	caption: "Į_Operation____š",
    	description: "Į_Operation Description_______š",
    	citation: "Į_Operation Citation______š",
    	identifier: "Į_Operation Identifier_______š",
    	status: "Į_Operation Status______š",
    	objectiveReference: "Į_Related Objective (Objective Identifier)_____________š",
    	planReference: "Į_Related Plan (Plan Identifier)__________š",
    	significantEventReference: "Į_Related Event (Event Identifier)___________š",
    	platformReference: "Į_Related Platform (Platform Identifier)____________š",
    	sections: {
    		identification: "Į_Identification_____š",
    		related: "Į_Related___š"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "Į_Operation Type_____š",
    	real: "Į_Real__š",
    	simulated: "Į_Simulated____š",
    	synthesized: "Į_Synthesized____š"
    },
    
    MI_Plan: {
    	sType: "Į_Sampling Geometry for Collecting Data____________š",
    	status: "Į_Status of Plan_____š",
    	citation: "Į_Citation of Authority Requesting Collection______________š",
    	satisfiedRequirementReference: "Į_Satisfied Requirement (Requirement Identifier)_______________š",
    	operationReference: "Į_Related Operation (Operation Identifier)_____________š"
    },
    
    MI_Platform: {
    	citation: "Į_Platform Citation______š",
    	identifier: "Į_Platform Identifier_______š",
    	description: "Į_Description of Platform Supporting the Instrument________________š",
    	sponsor: "Į_Sponsor Organization for Platform___________š",
    	instrument: "Į_Instrument(s) mounted on the platform____________š",
    	instrumentReference: "Į_Instrument Identifier_______š",
    	sections: {
    		identification: "Į_Identification_____š",
    		sponsor: "Į_Sponsor___š",
    		instruments: "Į_Instruments____š"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "Į_Platform Pass Identifier________š",
    	extent: "Į_Platform Pass Extent_______š",
    	relatedEventReference: "Į_Related Event (Event Identifer)__________š"
    },

    MI_PriorityCode: {
    	critical: "Į_Critical___š", 
    	highImportance: "Į_High Importance______š",
    	mediumImportance: "Į_Medium Importance______š",
    	lowImportance: "Į_Low Importance_____š"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "Į_Requested Date Of Collection_________š",
    	latestAcceptableDate: "Į_Latest Acceptable Date________š"
    },
    
    MI_Requirement: {
    	caption: "Į_Requirement____š",
    	citation: "Į_Citation for Requirement Guidance Material______________š",
    	identifier: "Į_Requirement Identifier________š",
    	requestor: "Į_Requestor of Requirement________š",
    	recipient: "Į_Recipient of Requirement Results___________š",
    	priority: "Į_Requirement Priority_______š",
    	requestedDate: "Į_Requested Date_____š",
    	expiryDate: "Į_Expiry Date____š",
    	satisifiedPlanReference: "Į_Satisfied Plan (Plan Identifier)___________š",
    	sections: {
    		identification: "Į_Identification_____š",
    		requestor: "Į_Requestor____š",
    		recipient: "Į_Recipient____š",
    		priorityAndDates: "Į_Priority And Dates______š",
    		satisifiedPlan: "Į_Satisified  Plan______š"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "Į_Sequence___š",
    	start: "Į_Start___š",
    	end: "Į_End__š",
    	instantaneous: "Į_Instantaneous_____š"
    },
    
    MI_TriggerCode: {
    	caption: "Į_Trigger___š",
    	automatic: "Į_Automatic____š",
    	manual: "Į_Manual___š",
    	preProgrammed: "Į_Preprogrammed_____š"
    },
    
    ObjectReference: {
    	uuidref: "Į_UUID Reference_____š",
    	xlinkref: "Į_URL Reference_____š"
    },
    
    RS_Identifier: {
    	caption: "Į_ID Plus Code Space______š",
    	code: "Į_Code__š",
    	codeSpace: "Į_Code Space____š"
    },
    
    SV_CouplingType: {
    	loose: "Į_Loose___š",
    	mixed: "Į_Mixed___š",
    	tight: "Į_Tight___š"
    },
    
    SV_OperationMetadata: {
    	operationName: "Į_Operation Name_____š",
    	DCP: "Į_DCP__š",
    	connectPoint: "Į_Connect Point_____š"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "Į_ServiceType____š",
    	couplingType: "Į_Coupling Type_____š",
    	containsOperations: "Į_Operation Metadata______š",
    	operatesOn: "Į_Operates On____š"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "Į_Indeterminate Position________š",
    	indeterminates: {
    		before: "Į_Before___š",
       	after: "Į_After___š",
      	now: "Į_Now__š",
      	unknown: "Į_Unknown___š"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "Į_GEMET Concept Keyword_______š",
    		tool: "Į_Look Up____š...",
    		dialogTitle: "Į_GEMET - Concept Keyword________š",
    		searchLabel: "Į_Search___š:",
    		searchTip: "Į_Search GEMET_____š"
    	},
    	theme: {
    		tool: "Į_Look Up____š...",
    		dialogTitle: "Į_GEMET - Inspire Data Theme_________š"
    	},
    	ioerror: "Į_There was an error communicating with the GEMET service: {url}____________________š",
    	searching: "Į_Searching GEMET______š...",
    	noMatch: "Į_No matching results were found__________š.",
      languages: {
      	"bg": "Į_Bulgarian____š",
      	"cs": "Į_Czech___š",
      	"da": "Į_Danish___š",
      	"nl": "Į_Dutch___š",
      	"en": "Į_English___š",
      	"et": "Į_Estonian___š",
      	"fi": "Į_Finnish___š",
      	"fr": "Į_French___š",
      	"de": "Į_German___š",
      	"el": "Į_Greek___š",
      	"hu": "Į_Hungarian____š",
      	"ga": "Į_Gaelic (Irish)_____š",
      	"it": "Į_Italian___š",
      	"lv": "Į_Latvian___š",
      	"lt": "Į_Lithuanian____š",
      	"mt": "Į_Maltese___š",
      	"pl": "Į_Polish___š", 
      	"pt": "Į_Portuguese____š",
      	"ro": "Į_Romanian___š",
      	"sk": "Į_Slovak___š",
      	"sl": "Į_Slovenian____š",  	
      	"es": "Į_Spanish___š",
      	"sv": "Į_Swedish___š"
      }
    }
   
  })
);
