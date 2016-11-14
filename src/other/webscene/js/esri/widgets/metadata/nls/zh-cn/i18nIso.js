define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "试_ISO 19115 (Data)______验",
    		description: ""
    	},
    	service: {
    		caption: "试_ISO 19119 (Service)_______验",
    		description: ""
    	},
    	gmi: {
    		caption: "试_ISO 19115-2 (Imagery and Gridded Data)____________验",
    		description: ""
    	}
    },
    
    general: {
    	reference: "试_Reference____验"
    },
    
    sections: {
    	metadata: "试_Metadata___验",
    	identification: "试_Identification_____验",
    	distribution: "试_Distribution_____验",
    	quality: "试_Quality___验",
    	acquisition: "试_Acquisition____验"
    },
    
    metadataSection: {
    	identifier: "试_Identifier____验",
    	contact: "试_Contact___验",
    	date: "试_Date__验",
    	standard: "试_Standard___验",
    	reference: "试_Reference____验"
    },
    
    identificationSection: {
    	citation: "试_Citation___验",
    	description: "试_Description____验",
    	contact: "试_Contact___验",
    	thumbnail: "试_Thumbnail____验",
    	keywords: "试_Keywords___验",
    	constraints: "试_Constraints____验",
    	resource: "试_Resource___验",
    	resourceTab: {
    		representation: "试_Representation_____验",
    		language: "试_Language___验",
    		classification: "试_Classification_____验",
    		extent: "试_Extent___验"
    	},
    	serviceResourceTab: {
    		serviceType: "试_Service Type_____验",
    		extent: "试_Extent___验",
    		couplingType: "试_Coupling Type_____验",
    		operation: "试_Operation____验",
    		operatesOn: "试_Operates On____验"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "试_Scope___验",
    	conformance: "试_Conformance____验",
    	lineage: "试_Lineage___验"
    },
    
    acquisitionSection: {
    	requirement: "试_Requirement____验",
    	objective: "试_Objective____验",
    	instrument: "试_Instrument____验",
    	plan: "试_Plan__验",
    	operation: "试_Operation____验",
    	platform: "试_Platform___验",
    	environment: "试_Environment____验"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "试_Abstract___验",
    	purpose: "试_Purpose___验",
    	credit: "试_Credits___验",
    	pointOfContact: "试_Point of Contact______验",
    	resourceMaintenance: "试_Maintenance____验",
    	graphicOverview: "试_Graphic Overview______验",
    	descriptiveKeywords: "试_Keyword Collection______验",
    	resourceConstraints: "试_Constraints____验"
    },
    
    CI_Address: {
    	deliveryPoint: "试_Delivery Point_____验",
    	city: "试_City__验",
    	administrativeArea: "试_Administrative Area_______验",
    	postalCode: "试_Postal Code____验",
    	country: "试_Country___验",
    	electronicMailAddress: "试_E-Mail Address_____验"
    },
    
    CI_Citation: {
    	title: "试_Title___验",
    	alternateTitle: "试_Alternate Title______验",
    	identifier: "试_Unique Resource Identifier_________验",
    	resource: {
    		title: "试_Resource Title_____验",
    		date: "试_Resource Date_____验"
    	},
    	specification: {
    		title: "试_Specification Title_______验",
    		date: "试_Specification Date______验"
    	}
    },
    
    CI_Contact: {
    	phone: "试_Phone___验",
    	address: "试_Address___验",
    	onlineResource: "试_Online Resource______验",
    	hoursOfService: "试_Hours of Service______验",
    	contactInstructions: "试_Contact Instructions_______验"
    },
    
    CI_Date: {
    	date: "试_Date__验",
    	dateType: "试_Date Type____验"
    },
    
  	CI_DateTypeCode: {
  		caption: "试_Date Type____验",
  		creation: "试_Creation Date_____验",
  		publication: "试_Publication Date______验",
  		revision: "试_Revision Date_____验"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "试_Function___验",
    	download: "试_Download___验",
    	information: "试_Information____验",
    	offlineAccess: "试_Offline Access_____验",
    	order: "试_Order___验",
    	search: "试_Search___验"
    },
    
    CI_OnlineResource: {
    	caption: "试_Online Resource______验",
    	linkage: "试_URL__验",
    	protocol: "试_Protocol___验",
    	applicationProfile: "试_Application Profile_______验",
    	name: "试_Name__验",
    	description: "试_Description____验",
    	sFunction: "试_Function___验"
    },
    
    CI_ResponsibleParty: {
    	caption: "试_Point of Contact______验",
    	individualName: "试_Individual Name______验",
    	organisationName: "试_Organisation Name______验",
    	positionName: "试_Position Name_____验",
    	contactInfo: "试_Contact Info_____验",
    	role: "试_Role__验"
    },
    
    CI_RoleCode: {
    	caption: "试_Role__验",
    	resourceProvider: "试_Resource Provider______验",
    	custodian: "试_Custodian____验",
    	owner: "试_Owner___验",
    	user: "试_User__验",
    	distributor: "试_Distributor____验",
    	originator: "试_Originator____验",
    	pointOfContact: "试_Point of Contact______验",
    	principalInvestigator: "试_Principal Investigator________验",
    	processor: "试_Processor____验",
    	publisher: "试_Publisher____验",
    	author: "试_Author___验"
    },
    
    CI_Telephone: {
    	voice: "试_Voice___验",
    	facsimile: "试_Fax__验"
    },
    
    DCPList: {
    	caption: "试_DCP__验",
    	XML: "试_XML__验",
    	CORBA: "试_CORBA___验",
    	JAVA: "试_JAVA__验",
    	COM: "试_COM__验",
    	SQL: "试_SQL__验",
    	WebServices: "试_WebServices____验"
    },
    
    DQ_ConformanceResult: {
    	caption: "试_Conformance Result______验",
    	explanation: "试_Explanation____验",
    	degree: {
    		caption: "试_Degree___验",
    		validationPerformed: "试_Validation Performed_______验",
    		conformant: "试_Conformant____验",
    		nonConformant: "试_Non Conformant_____验"
    	}
    },
    
    DQ_DataQuality: {
    	report: "试_Report___验"
    },
    
    DQ_Scope : {
    	level: "试_Scope (quality information applies to)____________验",
    	levelDescription: "试_Level Description______验"
    },
    
    EX_Extent: {
    	caption: "试_Extent___验",
    	description: "试_Description____验",
    	geographicElement: "试_Spatial Extent_____验",
    	temporalElement: "试_Temporal Extent______验",
    	verticalElement: "试_Vertical Extent______验"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "试_West Bounding Longitude________验",
    	eastBoundLongitude: "试_East Bounding Longitude________验",
    	southBoundLatitude: "试_South Bounding Latitude________验",
    	northBoundLatitude: "试_North Bounding Latitude________验"
    },
    
    EX_GeographicDescription: {
    	caption: "试_Geographic Description________验"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "试_Begin Date____验",
    		endPosition: "试_End Date___验"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "试_Minimum Value_____验",
    	maximumValue: "试_Maximum Value_____验",
    	verticalCRS: "试_Vertical CRS_____验"
    },
    
    Length: {
    	caption: "试_Length___验",
    	uom: "试_Units of Measure______验",
    	km: "试_Kilometers____验",
    	m: "试_Meters___验",
    	mi: "试_Miles___验",
    	ft: "试_Feet__验"
    },
    
    LI_Lineage: {
    	statement: "试_Lineage Statement______验"
    },
    
    MD_BrowseGraphic: {
    	fileName: "试_Browse Graphic URL______验",
    	fileDescription: "试_Browse Graphic Caption________验",
    	fileType: "试_Browse Graphic Type_______验"
    },
    
    MD_ClassificationCode: {
    	unclassified: "试_Unclassified_____验",
    	restricted: "试_Restricted____验",
    	confidential: "试_Confidential_____验",
    	secret: "试_Secret___验",
    	topSecret: "试_Top Secret____验"
    },
    
    MD_Constraints: {
    	caption: "试_Usage Constraints______验",
    	useLimitation: "试_Use Limitation_____验"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "试_Spatial Representation Type_________验",
    	spatialResolution: "试_Spatial Resolution______验",
    	language: "试_Resource Language______验",
    	supplementalInformation: "试_Supplemental_____验"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "试_Online___验"
    },
    
    MD_Distribution: {
    	distributionFormat: "试_Distribution Format_______验",
    	transferOptions: "试_Transfer Options______验"
    },
    
    MD_Format: {
    	name: "试_Format Name____验",
    	version: "试_Format Version_____验"
    },
    
    MD_Identifier: {
    	caption: "试_URI__验",
    	identifierCaption: "试_Identifier____验",
    	code: "试_Code__验"
    },
    
    MD_Keywords: {
    	delimitedCaption: "试_Keywords___验",
    	thesaurusName: "试_Associated Thesaurus_______验"
    },
    
    MD_KeywordTypeCode: {
    	caption: "试_Keyword Type_____验",
    	discipline: "试_Discipline____验",
    	place: "试_Place___验",
    	stratum: "试_Stratum___验",
    	temporal: "试_Temporal___验",
    	theme: "试_Theme___验"
    },
    
    MD_LegalConstraints: {
    	caption: "试_Legal Constraints______验",
    	accessConstraints: "试_Access Constraints______验",
    	useConstraints: "试_Use Constraints______验",
    	otherConstraints: "试_Other Constraints______验"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "试_Frequency____验",
    	continual: "试_Continual____验",
    	daily: "试_Daily___验",
    	weekly: "试_Weekly___验",
    	fortnightly: "试_Fortnightly____验",
    	monthly: "试_Monthly___验",
    	quarterly: "试_Quarterly____验",
    	biannually: "试_Biannually____验",
    	annually: "试_Annually___验",
    	asNeeded: "试_As Needed____验",
    	irregular: "试_Irregular____验",
    	notPlanned: "试_Not Planned____验",
    	unknown: "试_Unknown___验"
    },
    
    MD_Metadata: {
    	caption: "试_Metadata___验",
    	fileIdentifier: "试_File Identifier______验",
    	language: "试_Metadata Language______验",
    	hierarchyLevel: "试_Hierarchy Level______验",
    	hierarchyLevelName: "试_Hierarchy Level Name_______验",
    	contact: "试_Metadata Contact______验",
    	dateStamp: "试_Metadata Date_____验",
    	metadataStandardName: "试_Metadata Standard Name________验",
    	metadataStandardVersion: "试_Metadata Standard Version_________验",
    	referenceSystemInfo: "试_Reference System______验",
    	identificationInfo: "试_Identification_____验",
    	distributionInfo: "试_Distribution_____验",
    	dataQualityInfo: "试_Quality___验"
    },
    
    MD_ProgressCode: {
    	caption: "试_Progress Code_____验",
    	completed: "试_Completed____验",
    	historicalArchive: "试_Historical Archive______验",
    	obsolete: "试_Obsolete___验",
    	onGoing: "试_On Going___验",
    	planned: "试_Planned___验",
    	required: "试_Required___验",
    	underDevelopment: "试_Under Development______验"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "试_Denominator____验"
    },
    
    MD_Resolution: {
    	equivalentScale: "试_Equivalent Scale______验",
    	distance: "试_Distance___验"
    },
    
    MD_RestrictionCode: {
    	copyright: "试_Copyright____验",
    	patent: "试_Patent___验",
    	patentPending: "试_Patent Pending_____验",
    	trademark: "试_Trademark____验",
    	license: "试_License___验",
    	intellectualPropertyRights: "试_Intellectual Property Rights_________验",
    	restricted: "试_Restricted____验",
    	otherRestrictions: "试_Other Restrictions______验"
    },
    
    MD_ScopeCode: {
    	attribute: "试_Attribute____验",
    	attributeType: "试_Attribute type_____验",
    	collectionHardware: "试_Collection hardware_______验",
    	collectionSession: "试_Collection session______验",
    	dataset: "试_Dataset___验",
    	series: "试_Series___验",
    	nonGeographicDataset: "试_Non geographic dataset________验",
    	dimensionGroup: "试_Dimension group______验",
    	feature: "试_Feature___验",
    	featureType: "试_Feature type_____验",
    	propertyType: "试_Property type_____验",
    	fieldSession: "试_Field session_____验",
    	software: "试_Software___验",
    	service: "试_Service___验",
    	model: "试_Model___验",
    	tile: "试_Tile__验"
    },
    
    MD_ScopeDescription: {
    	attributes: "试_Attributes____验",
    	features: "试_Features___验",
    	featureInstances: "试_Feature Instances______验",
    	attributeInstances: "试_Attribute Instances_______验",
    	dataset: "试_Dataset___验",
    	other: "试_Other___验"
    },
    
    MD_SecurityConstraints: {
    	caption: "试_Security Constraints_______验",
    	classification: "试_Classification_____验",
    	userNote: "试_User Note____验",
    	classificationSystem: "试_Classification System_______验",
    	handlingDescription: "试_Handling Description_______验"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "试_Spatial Representation Type_________验",
    	vector: "试_Vector___验",
    	grid: "试_Grid__验",
    	textTable: "试_Text Table____验",
    	tin: "试_TIN__验",
    	stereoModel: "试_Stereo Model_____验",
    	video: "试_Video___验"
    },
    
    MD_TopicCategoryCode: {
    	caption: "试_Topic Category_____验",
    	boundaries: "试_Administrative and Political Boundaries_____________验",
    	farming: "试_Agriculture and Farming________验",
    	climatologyMeteorologyAtmosphere: "试_Atmosphere and Climatic________验",
    	biota: "试_Biology and Ecology_______验",
    	economy: "试_Business and Economic_______验",
    	planningCadastre: "试_Cadastral____验",
    	society: "试_Cultural, Society and Demography___________验",
    	elevation: "试_Elevation and Derived Products__________验",
    	environment: "试_Environment and Conservation_________验",
    	structure: "试_Facilities and Structures_________验",
    	geoscientificInformation: "试_Geological and Geophysical_________验",
    	health: "试_Human Health and Disease________验",
    	imageryBaseMapsEarthCover: "试_Imagery and Base Maps_______验",
    	inlandWaters: "试_Inland Water Resources________验",
    	location: "试_Locations and Geodetic Networks__________验",
    	intelligenceMilitary: "试_Military___验",
    	oceans: "试_Oceans and Estuaries_______验",
    	transportation: "试_Transportation Networks________验",
    	utilitiesCommunication: "试_Utilities and Communication_________验"
    },
    
    MI_ContextCode: {
    	caption: "试_Context___验",
    	acquisition: "试_Acquisition____验",
    	pass: "试_Pass__验",
    	wayPoint: "试_Waypoint___验"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "试_Environmental Conditions________验",
    	averageAirTemperature: "试_Average Air Temperature________验",
    	maxRelativeHumidity: "试_Maximum Relative Humidity_________验",
    	maxAltitude: "试_Maximum Altitude______验",
    	meterologicalConditions: "试_Meterological Conditions________验"
    },
    
    MI_Event: {
    	identifier: "试_Event Identifier______验",
    	time: "试_Time__验",
    	expectedObjectiveReference: "试_Expected Objective (Objective Identifer)_____________验",
    	relatedSensorReference: "试_Related Sensor (Instrument Identifer)____________验",
    	relatedPassReference: "试_Related Pass (Platform Pass Identifer)____________验"
    },

    MI_GeometryTypeCode: {
    	point: "试_Point___验",
    	linear: "试_Linear___验",
    	areal: "试_Areal___验",
    	strip: "试_Strip___验"
    },
    
    MI_Instrument: {
    	citation: "试_Instrument Citation_______验",
    	identifier: "试_Instrument Identifier_______验",
    	sType: "试_Instrument Type______验",
    	description: "试_Instrument Description________验",
    	mountedOn: "试_Mounted On____验",
    	mountedOnPlatformReference: "试_Mounted On (Platform Identifier)___________验"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "试_Acquisition____验"
    },
    
    MI_Objective: {
    	caption: "试_Objective____验",
    	identifier: "试_Objective Identifier_______验",
    	priority: "试_Priority of Target______验",
    	sFunction: "试_Function of Objective_______验",
    	extent: "试_Extent___验",
    	pass: "试_Platform Pass_____验",
    	sensingInstrumentReference: "试_Sensing Instrument (Instrument Identifier)______________验",
    	objectiveOccurrence: "试_Events___验",
    	sections: {
    		identification: "试_Identification_____验",
    		extent: "试_Extent___验",
    		pass: "试_Pass__验",
    		sensingInstrument: "试_Sensing Instrument______验",
    		objectiveOccurrence: "试_Events___验"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "试_Type (Collection Technique for Objective)_____________验",
    	instantaneousCollection: "试_Instantaneous Collection________验",
    	persistentView: "试_Persistent View______验",
    	survey: "试_Survey___验"
    },
    
    MI_Operation: {
    	caption: "试_Operation____验",
    	description: "试_Operation Description_______验",
    	citation: "试_Operation Citation______验",
    	identifier: "试_Operation Identifier_______验",
    	status: "试_Operation Status______验",
    	objectiveReference: "试_Related Objective (Objective Identifier)_____________验",
    	planReference: "试_Related Plan (Plan Identifier)__________验",
    	significantEventReference: "试_Related Event (Event Identifier)___________验",
    	platformReference: "试_Related Platform (Platform Identifier)____________验",
    	sections: {
    		identification: "试_Identification_____验",
    		related: "试_Related___验"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "试_Operation Type_____验",
    	real: "试_Real__验",
    	simulated: "试_Simulated____验",
    	synthesized: "试_Synthesized____验"
    },
    
    MI_Plan: {
    	sType: "试_Sampling Geometry for Collecting Data____________验",
    	status: "试_Status of Plan_____验",
    	citation: "试_Citation of Authority Requesting Collection______________验",
    	satisfiedRequirementReference: "试_Satisfied Requirement (Requirement Identifier)_______________验",
    	operationReference: "试_Related Operation (Operation Identifier)_____________验"
    },
    
    MI_Platform: {
    	citation: "试_Platform Citation______验",
    	identifier: "试_Platform Identifier_______验",
    	description: "试_Description of Platform Supporting the Instrument________________验",
    	sponsor: "试_Sponsor Organization for Platform___________验",
    	instrument: "试_Instrument(s) mounted on the platform____________验",
    	instrumentReference: "试_Instrument Identifier_______验",
    	sections: {
    		identification: "试_Identification_____验",
    		sponsor: "试_Sponsor___验",
    		instruments: "试_Instruments____验"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "试_Platform Pass Identifier________验",
    	extent: "试_Platform Pass Extent_______验",
    	relatedEventReference: "试_Related Event (Event Identifer)__________验"
    },

    MI_PriorityCode: {
    	critical: "试_Critical___验", 
    	highImportance: "试_High Importance______验",
    	mediumImportance: "试_Medium Importance______验",
    	lowImportance: "试_Low Importance_____验"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "试_Requested Date Of Collection_________验",
    	latestAcceptableDate: "试_Latest Acceptable Date________验"
    },
    
    MI_Requirement: {
    	caption: "试_Requirement____验",
    	citation: "试_Citation for Requirement Guidance Material______________验",
    	identifier: "试_Requirement Identifier________验",
    	requestor: "试_Requestor of Requirement________验",
    	recipient: "试_Recipient of Requirement Results___________验",
    	priority: "试_Requirement Priority_______验",
    	requestedDate: "试_Requested Date_____验",
    	expiryDate: "试_Expiry Date____验",
    	satisifiedPlanReference: "试_Satisfied Plan (Plan Identifier)___________验",
    	sections: {
    		identification: "试_Identification_____验",
    		requestor: "试_Requestor____验",
    		recipient: "试_Recipient____验",
    		priorityAndDates: "试_Priority And Dates______验",
    		satisifiedPlan: "试_Satisified  Plan______验"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "试_Sequence___验",
    	start: "试_Start___验",
    	end: "试_End__验",
    	instantaneous: "试_Instantaneous_____验"
    },
    
    MI_TriggerCode: {
    	caption: "试_Trigger___验",
    	automatic: "试_Automatic____验",
    	manual: "试_Manual___验",
    	preProgrammed: "试_Preprogrammed_____验"
    },
    
    ObjectReference: {
    	uuidref: "试_UUID Reference_____验",
    	xlinkref: "试_URL Reference_____验"
    },
    
    RS_Identifier: {
    	caption: "试_ID Plus Code Space______验",
    	code: "试_Code__验",
    	codeSpace: "试_Code Space____验"
    },
    
    SV_CouplingType: {
    	loose: "试_Loose___验",
    	mixed: "试_Mixed___验",
    	tight: "试_Tight___验"
    },
    
    SV_OperationMetadata: {
    	operationName: "试_Operation Name_____验",
    	DCP: "试_DCP__验",
    	connectPoint: "试_Connect Point_____验"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "试_ServiceType____验",
    	couplingType: "试_Coupling Type_____验",
    	containsOperations: "试_Operation Metadata______验",
    	operatesOn: "试_Operates On____验"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "试_Indeterminate Position________验",
    	indeterminates: {
    		before: "试_Before___验",
       	after: "试_After___验",
      	now: "试_Now__验",
      	unknown: "试_Unknown___验"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "试_GEMET Concept Keyword_______验",
    		tool: "试_Look Up____验...",
    		dialogTitle: "试_GEMET - Concept Keyword________验",
    		searchLabel: "试_Search___验:",
    		searchTip: "试_Search GEMET_____验"
    	},
    	theme: {
    		tool: "试_Look Up____验...",
    		dialogTitle: "试_GEMET - Inspire Data Theme_________验"
    	},
    	ioerror: "试_There was an error communicating with the GEMET service: {url}____________________验",
    	searching: "试_Searching GEMET______验...",
    	noMatch: "试_No matching results were found__________验.",
      languages: {
      	"bg": "试_Bulgarian____验",
      	"cs": "试_Czech___验",
      	"da": "试_Danish___验",
      	"nl": "试_Dutch___验",
      	"en": "试_English___验",
      	"et": "试_Estonian___验",
      	"fi": "试_Finnish___验",
      	"fr": "试_French___验",
      	"de": "试_German___验",
      	"el": "试_Greek___验",
      	"hu": "试_Hungarian____验",
      	"ga": "试_Gaelic (Irish)_____验",
      	"it": "试_Italian___验",
      	"lv": "试_Latvian___验",
      	"lt": "试_Lithuanian____验",
      	"mt": "试_Maltese___验",
      	"pl": "试_Polish___验", 
      	"pt": "试_Portuguese____验",
      	"ro": "试_Romanian___验",
      	"sk": "试_Slovak___验",
      	"sl": "试_Slovenian____验",  	
      	"es": "试_Spanish___验",
      	"sv": "试_Swedish___验"
      }
    }
   
  })
);
