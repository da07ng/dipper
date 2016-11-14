define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "π_ISO 19115 (Data)______Ω",
    		description: ""
    	},
    	service: {
    		caption: "π_ISO 19119 (Service)_______Ω",
    		description: ""
    	},
    	gmi: {
    		caption: "π_ISO 19115-2 (Imagery and Gridded Data)____________Ω",
    		description: ""
    	}
    },
    
    general: {
    	reference: "π_Reference____Ω"
    },
    
    sections: {
    	metadata: "π_Metadata___Ω",
    	identification: "π_Identification_____Ω",
    	distribution: "π_Distribution_____Ω",
    	quality: "π_Quality___Ω",
    	acquisition: "π_Acquisition____Ω"
    },
    
    metadataSection: {
    	identifier: "π_Identifier____Ω",
    	contact: "π_Contact___Ω",
    	date: "π_Date__Ω",
    	standard: "π_Standard___Ω",
    	reference: "π_Reference____Ω"
    },
    
    identificationSection: {
    	citation: "π_Citation___Ω",
    	description: "π_Description____Ω",
    	contact: "π_Contact___Ω",
    	thumbnail: "π_Thumbnail____Ω",
    	keywords: "π_Keywords___Ω",
    	constraints: "π_Constraints____Ω",
    	resource: "π_Resource___Ω",
    	resourceTab: {
    		representation: "π_Representation_____Ω",
    		language: "π_Language___Ω",
    		classification: "π_Classification_____Ω",
    		extent: "π_Extent___Ω"
    	},
    	serviceResourceTab: {
    		serviceType: "π_Service Type_____Ω",
    		extent: "π_Extent___Ω",
    		couplingType: "π_Coupling Type_____Ω",
    		operation: "π_Operation____Ω",
    		operatesOn: "π_Operates On____Ω"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "π_Scope___Ω",
    	conformance: "π_Conformance____Ω",
    	lineage: "π_Lineage___Ω"
    },
    
    acquisitionSection: {
    	requirement: "π_Requirement____Ω",
    	objective: "π_Objective____Ω",
    	instrument: "π_Instrument____Ω",
    	plan: "π_Plan__Ω",
    	operation: "π_Operation____Ω",
    	platform: "π_Platform___Ω",
    	environment: "π_Environment____Ω"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "π_Abstract___Ω",
    	purpose: "π_Purpose___Ω",
    	credit: "π_Credits___Ω",
    	pointOfContact: "π_Point of Contact______Ω",
    	resourceMaintenance: "π_Maintenance____Ω",
    	graphicOverview: "π_Graphic Overview______Ω",
    	descriptiveKeywords: "π_Keyword Collection______Ω",
    	resourceConstraints: "π_Constraints____Ω"
    },
    
    CI_Address: {
    	deliveryPoint: "π_Delivery Point_____Ω",
    	city: "π_City__Ω",
    	administrativeArea: "π_Administrative Area_______Ω",
    	postalCode: "π_Postal Code____Ω",
    	country: "π_Country___Ω",
    	electronicMailAddress: "π_E-Mail Address_____Ω"
    },
    
    CI_Citation: {
    	title: "π_Title___Ω",
    	alternateTitle: "π_Alternate Title______Ω",
    	identifier: "π_Unique Resource Identifier_________Ω",
    	resource: {
    		title: "π_Resource Title_____Ω",
    		date: "π_Resource Date_____Ω"
    	},
    	specification: {
    		title: "π_Specification Title_______Ω",
    		date: "π_Specification Date______Ω"
    	}
    },
    
    CI_Contact: {
    	phone: "π_Phone___Ω",
    	address: "π_Address___Ω",
    	onlineResource: "π_Online Resource______Ω",
    	hoursOfService: "π_Hours of Service______Ω",
    	contactInstructions: "π_Contact Instructions_______Ω"
    },
    
    CI_Date: {
    	date: "π_Date__Ω",
    	dateType: "π_Date Type____Ω"
    },
    
  	CI_DateTypeCode: {
  		caption: "π_Date Type____Ω",
  		creation: "π_Creation Date_____Ω",
  		publication: "π_Publication Date______Ω",
  		revision: "π_Revision Date_____Ω"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "π_Function___Ω",
    	download: "π_Download___Ω",
    	information: "π_Information____Ω",
    	offlineAccess: "π_Offline Access_____Ω",
    	order: "π_Order___Ω",
    	search: "π_Search___Ω"
    },
    
    CI_OnlineResource: {
    	caption: "π_Online Resource______Ω",
    	linkage: "π_URL__Ω",
    	protocol: "π_Protocol___Ω",
    	applicationProfile: "π_Application Profile_______Ω",
    	name: "π_Name__Ω",
    	description: "π_Description____Ω",
    	sFunction: "π_Function___Ω"
    },
    
    CI_ResponsibleParty: {
    	caption: "π_Point of Contact______Ω",
    	individualName: "π_Individual Name______Ω",
    	organisationName: "π_Organisation Name______Ω",
    	positionName: "π_Position Name_____Ω",
    	contactInfo: "π_Contact Info_____Ω",
    	role: "π_Role__Ω"
    },
    
    CI_RoleCode: {
    	caption: "π_Role__Ω",
    	resourceProvider: "π_Resource Provider______Ω",
    	custodian: "π_Custodian____Ω",
    	owner: "π_Owner___Ω",
    	user: "π_User__Ω",
    	distributor: "π_Distributor____Ω",
    	originator: "π_Originator____Ω",
    	pointOfContact: "π_Point of Contact______Ω",
    	principalInvestigator: "π_Principal Investigator________Ω",
    	processor: "π_Processor____Ω",
    	publisher: "π_Publisher____Ω",
    	author: "π_Author___Ω"
    },
    
    CI_Telephone: {
    	voice: "π_Voice___Ω",
    	facsimile: "π_Fax__Ω"
    },
    
    DCPList: {
    	caption: "π_DCP__Ω",
    	XML: "π_XML__Ω",
    	CORBA: "π_CORBA___Ω",
    	JAVA: "π_JAVA__Ω",
    	COM: "π_COM__Ω",
    	SQL: "π_SQL__Ω",
    	WebServices: "π_WebServices____Ω"
    },
    
    DQ_ConformanceResult: {
    	caption: "π_Conformance Result______Ω",
    	explanation: "π_Explanation____Ω",
    	degree: {
    		caption: "π_Degree___Ω",
    		validationPerformed: "π_Validation Performed_______Ω",
    		conformant: "π_Conformant____Ω",
    		nonConformant: "π_Non Conformant_____Ω"
    	}
    },
    
    DQ_DataQuality: {
    	report: "π_Report___Ω"
    },
    
    DQ_Scope : {
    	level: "π_Scope (quality information applies to)____________Ω",
    	levelDescription: "π_Level Description______Ω"
    },
    
    EX_Extent: {
    	caption: "π_Extent___Ω",
    	description: "π_Description____Ω",
    	geographicElement: "π_Spatial Extent_____Ω",
    	temporalElement: "π_Temporal Extent______Ω",
    	verticalElement: "π_Vertical Extent______Ω"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "π_West Bounding Longitude________Ω",
    	eastBoundLongitude: "π_East Bounding Longitude________Ω",
    	southBoundLatitude: "π_South Bounding Latitude________Ω",
    	northBoundLatitude: "π_North Bounding Latitude________Ω"
    },
    
    EX_GeographicDescription: {
    	caption: "π_Geographic Description________Ω"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "π_Begin Date____Ω",
    		endPosition: "π_End Date___Ω"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "π_Minimum Value_____Ω",
    	maximumValue: "π_Maximum Value_____Ω",
    	verticalCRS: "π_Vertical CRS_____Ω"
    },
    
    Length: {
    	caption: "π_Length___Ω",
    	uom: "π_Units of Measure______Ω",
    	km: "π_Kilometers____Ω",
    	m: "π_Meters___Ω",
    	mi: "π_Miles___Ω",
    	ft: "π_Feet__Ω"
    },
    
    LI_Lineage: {
    	statement: "π_Lineage Statement______Ω"
    },
    
    MD_BrowseGraphic: {
    	fileName: "π_Browse Graphic URL______Ω",
    	fileDescription: "π_Browse Graphic Caption________Ω",
    	fileType: "π_Browse Graphic Type_______Ω"
    },
    
    MD_ClassificationCode: {
    	unclassified: "π_Unclassified_____Ω",
    	restricted: "π_Restricted____Ω",
    	confidential: "π_Confidential_____Ω",
    	secret: "π_Secret___Ω",
    	topSecret: "π_Top Secret____Ω"
    },
    
    MD_Constraints: {
    	caption: "π_Usage Constraints______Ω",
    	useLimitation: "π_Use Limitation_____Ω"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "π_Spatial Representation Type_________Ω",
    	spatialResolution: "π_Spatial Resolution______Ω",
    	language: "π_Resource Language______Ω",
    	supplementalInformation: "π_Supplemental_____Ω"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "π_Online___Ω"
    },
    
    MD_Distribution: {
    	distributionFormat: "π_Distribution Format_______Ω",
    	transferOptions: "π_Transfer Options______Ω"
    },
    
    MD_Format: {
    	name: "π_Format Name____Ω",
    	version: "π_Format Version_____Ω"
    },
    
    MD_Identifier: {
    	caption: "π_URI__Ω",
    	identifierCaption: "π_Identifier____Ω",
    	code: "π_Code__Ω"
    },
    
    MD_Keywords: {
    	delimitedCaption: "π_Keywords___Ω",
    	thesaurusName: "π_Associated Thesaurus_______Ω"
    },
    
    MD_KeywordTypeCode: {
    	caption: "π_Keyword Type_____Ω",
    	discipline: "π_Discipline____Ω",
    	place: "π_Place___Ω",
    	stratum: "π_Stratum___Ω",
    	temporal: "π_Temporal___Ω",
    	theme: "π_Theme___Ω"
    },
    
    MD_LegalConstraints: {
    	caption: "π_Legal Constraints______Ω",
    	accessConstraints: "π_Access Constraints______Ω",
    	useConstraints: "π_Use Constraints______Ω",
    	otherConstraints: "π_Other Constraints______Ω"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "π_Frequency____Ω",
    	continual: "π_Continual____Ω",
    	daily: "π_Daily___Ω",
    	weekly: "π_Weekly___Ω",
    	fortnightly: "π_Fortnightly____Ω",
    	monthly: "π_Monthly___Ω",
    	quarterly: "π_Quarterly____Ω",
    	biannually: "π_Biannually____Ω",
    	annually: "π_Annually___Ω",
    	asNeeded: "π_As Needed____Ω",
    	irregular: "π_Irregular____Ω",
    	notPlanned: "π_Not Planned____Ω",
    	unknown: "π_Unknown___Ω"
    },
    
    MD_Metadata: {
    	caption: "π_Metadata___Ω",
    	fileIdentifier: "π_File Identifier______Ω",
    	language: "π_Metadata Language______Ω",
    	hierarchyLevel: "π_Hierarchy Level______Ω",
    	hierarchyLevelName: "π_Hierarchy Level Name_______Ω",
    	contact: "π_Metadata Contact______Ω",
    	dateStamp: "π_Metadata Date_____Ω",
    	metadataStandardName: "π_Metadata Standard Name________Ω",
    	metadataStandardVersion: "π_Metadata Standard Version_________Ω",
    	referenceSystemInfo: "π_Reference System______Ω",
    	identificationInfo: "π_Identification_____Ω",
    	distributionInfo: "π_Distribution_____Ω",
    	dataQualityInfo: "π_Quality___Ω"
    },
    
    MD_ProgressCode: {
    	caption: "π_Progress Code_____Ω",
    	completed: "π_Completed____Ω",
    	historicalArchive: "π_Historical Archive______Ω",
    	obsolete: "π_Obsolete___Ω",
    	onGoing: "π_On Going___Ω",
    	planned: "π_Planned___Ω",
    	required: "π_Required___Ω",
    	underDevelopment: "π_Under Development______Ω"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "π_Denominator____Ω"
    },
    
    MD_Resolution: {
    	equivalentScale: "π_Equivalent Scale______Ω",
    	distance: "π_Distance___Ω"
    },
    
    MD_RestrictionCode: {
    	copyright: "π_Copyright____Ω",
    	patent: "π_Patent___Ω",
    	patentPending: "π_Patent Pending_____Ω",
    	trademark: "π_Trademark____Ω",
    	license: "π_License___Ω",
    	intellectualPropertyRights: "π_Intellectual Property Rights_________Ω",
    	restricted: "π_Restricted____Ω",
    	otherRestrictions: "π_Other Restrictions______Ω"
    },
    
    MD_ScopeCode: {
    	attribute: "π_Attribute____Ω",
    	attributeType: "π_Attribute type_____Ω",
    	collectionHardware: "π_Collection hardware_______Ω",
    	collectionSession: "π_Collection session______Ω",
    	dataset: "π_Dataset___Ω",
    	series: "π_Series___Ω",
    	nonGeographicDataset: "π_Non geographic dataset________Ω",
    	dimensionGroup: "π_Dimension group______Ω",
    	feature: "π_Feature___Ω",
    	featureType: "π_Feature type_____Ω",
    	propertyType: "π_Property type_____Ω",
    	fieldSession: "π_Field session_____Ω",
    	software: "π_Software___Ω",
    	service: "π_Service___Ω",
    	model: "π_Model___Ω",
    	tile: "π_Tile__Ω"
    },
    
    MD_ScopeDescription: {
    	attributes: "π_Attributes____Ω",
    	features: "π_Features___Ω",
    	featureInstances: "π_Feature Instances______Ω",
    	attributeInstances: "π_Attribute Instances_______Ω",
    	dataset: "π_Dataset___Ω",
    	other: "π_Other___Ω"
    },
    
    MD_SecurityConstraints: {
    	caption: "π_Security Constraints_______Ω",
    	classification: "π_Classification_____Ω",
    	userNote: "π_User Note____Ω",
    	classificationSystem: "π_Classification System_______Ω",
    	handlingDescription: "π_Handling Description_______Ω"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "π_Spatial Representation Type_________Ω",
    	vector: "π_Vector___Ω",
    	grid: "π_Grid__Ω",
    	textTable: "π_Text Table____Ω",
    	tin: "π_TIN__Ω",
    	stereoModel: "π_Stereo Model_____Ω",
    	video: "π_Video___Ω"
    },
    
    MD_TopicCategoryCode: {
    	caption: "π_Topic Category_____Ω",
    	boundaries: "π_Administrative and Political Boundaries_____________Ω",
    	farming: "π_Agriculture and Farming________Ω",
    	climatologyMeteorologyAtmosphere: "π_Atmosphere and Climatic________Ω",
    	biota: "π_Biology and Ecology_______Ω",
    	economy: "π_Business and Economic_______Ω",
    	planningCadastre: "π_Cadastral____Ω",
    	society: "π_Cultural, Society and Demography___________Ω",
    	elevation: "π_Elevation and Derived Products__________Ω",
    	environment: "π_Environment and Conservation_________Ω",
    	structure: "π_Facilities and Structures_________Ω",
    	geoscientificInformation: "π_Geological and Geophysical_________Ω",
    	health: "π_Human Health and Disease________Ω",
    	imageryBaseMapsEarthCover: "π_Imagery and Base Maps_______Ω",
    	inlandWaters: "π_Inland Water Resources________Ω",
    	location: "π_Locations and Geodetic Networks__________Ω",
    	intelligenceMilitary: "π_Military___Ω",
    	oceans: "π_Oceans and Estuaries_______Ω",
    	transportation: "π_Transportation Networks________Ω",
    	utilitiesCommunication: "π_Utilities and Communication_________Ω"
    },
    
    MI_ContextCode: {
    	caption: "π_Context___Ω",
    	acquisition: "π_Acquisition____Ω",
    	pass: "π_Pass__Ω",
    	wayPoint: "π_Waypoint___Ω"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "π_Environmental Conditions________Ω",
    	averageAirTemperature: "π_Average Air Temperature________Ω",
    	maxRelativeHumidity: "π_Maximum Relative Humidity_________Ω",
    	maxAltitude: "π_Maximum Altitude______Ω",
    	meterologicalConditions: "π_Meterological Conditions________Ω"
    },
    
    MI_Event: {
    	identifier: "π_Event Identifier______Ω",
    	time: "π_Time__Ω",
    	expectedObjectiveReference: "π_Expected Objective (Objective Identifer)_____________Ω",
    	relatedSensorReference: "π_Related Sensor (Instrument Identifer)____________Ω",
    	relatedPassReference: "π_Related Pass (Platform Pass Identifer)____________Ω"
    },

    MI_GeometryTypeCode: {
    	point: "π_Point___Ω",
    	linear: "π_Linear___Ω",
    	areal: "π_Areal___Ω",
    	strip: "π_Strip___Ω"
    },
    
    MI_Instrument: {
    	citation: "π_Instrument Citation_______Ω",
    	identifier: "π_Instrument Identifier_______Ω",
    	sType: "π_Instrument Type______Ω",
    	description: "π_Instrument Description________Ω",
    	mountedOn: "π_Mounted On____Ω",
    	mountedOnPlatformReference: "π_Mounted On (Platform Identifier)___________Ω"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "π_Acquisition____Ω"
    },
    
    MI_Objective: {
    	caption: "π_Objective____Ω",
    	identifier: "π_Objective Identifier_______Ω",
    	priority: "π_Priority of Target______Ω",
    	sFunction: "π_Function of Objective_______Ω",
    	extent: "π_Extent___Ω",
    	pass: "π_Platform Pass_____Ω",
    	sensingInstrumentReference: "π_Sensing Instrument (Instrument Identifier)______________Ω",
    	objectiveOccurrence: "π_Events___Ω",
    	sections: {
    		identification: "π_Identification_____Ω",
    		extent: "π_Extent___Ω",
    		pass: "π_Pass__Ω",
    		sensingInstrument: "π_Sensing Instrument______Ω",
    		objectiveOccurrence: "π_Events___Ω"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "π_Type (Collection Technique for Objective)_____________Ω",
    	instantaneousCollection: "π_Instantaneous Collection________Ω",
    	persistentView: "π_Persistent View______Ω",
    	survey: "π_Survey___Ω"
    },
    
    MI_Operation: {
    	caption: "π_Operation____Ω",
    	description: "π_Operation Description_______Ω",
    	citation: "π_Operation Citation______Ω",
    	identifier: "π_Operation Identifier_______Ω",
    	status: "π_Operation Status______Ω",
    	objectiveReference: "π_Related Objective (Objective Identifier)_____________Ω",
    	planReference: "π_Related Plan (Plan Identifier)__________Ω",
    	significantEventReference: "π_Related Event (Event Identifier)___________Ω",
    	platformReference: "π_Related Platform (Platform Identifier)____________Ω",
    	sections: {
    		identification: "π_Identification_____Ω",
    		related: "π_Related___Ω"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "π_Operation Type_____Ω",
    	real: "π_Real__Ω",
    	simulated: "π_Simulated____Ω",
    	synthesized: "π_Synthesized____Ω"
    },
    
    MI_Plan: {
    	sType: "π_Sampling Geometry for Collecting Data____________Ω",
    	status: "π_Status of Plan_____Ω",
    	citation: "π_Citation of Authority Requesting Collection______________Ω",
    	satisfiedRequirementReference: "π_Satisfied Requirement (Requirement Identifier)_______________Ω",
    	operationReference: "π_Related Operation (Operation Identifier)_____________Ω"
    },
    
    MI_Platform: {
    	citation: "π_Platform Citation______Ω",
    	identifier: "π_Platform Identifier_______Ω",
    	description: "π_Description of Platform Supporting the Instrument________________Ω",
    	sponsor: "π_Sponsor Organization for Platform___________Ω",
    	instrument: "π_Instrument(s) mounted on the platform____________Ω",
    	instrumentReference: "π_Instrument Identifier_______Ω",
    	sections: {
    		identification: "π_Identification_____Ω",
    		sponsor: "π_Sponsor___Ω",
    		instruments: "π_Instruments____Ω"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "π_Platform Pass Identifier________Ω",
    	extent: "π_Platform Pass Extent_______Ω",
    	relatedEventReference: "π_Related Event (Event Identifer)__________Ω"
    },

    MI_PriorityCode: {
    	critical: "π_Critical___Ω", 
    	highImportance: "π_High Importance______Ω",
    	mediumImportance: "π_Medium Importance______Ω",
    	lowImportance: "π_Low Importance_____Ω"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "π_Requested Date Of Collection_________Ω",
    	latestAcceptableDate: "π_Latest Acceptable Date________Ω"
    },
    
    MI_Requirement: {
    	caption: "π_Requirement____Ω",
    	citation: "π_Citation for Requirement Guidance Material______________Ω",
    	identifier: "π_Requirement Identifier________Ω",
    	requestor: "π_Requestor of Requirement________Ω",
    	recipient: "π_Recipient of Requirement Results___________Ω",
    	priority: "π_Requirement Priority_______Ω",
    	requestedDate: "π_Requested Date_____Ω",
    	expiryDate: "π_Expiry Date____Ω",
    	satisifiedPlanReference: "π_Satisfied Plan (Plan Identifier)___________Ω",
    	sections: {
    		identification: "π_Identification_____Ω",
    		requestor: "π_Requestor____Ω",
    		recipient: "π_Recipient____Ω",
    		priorityAndDates: "π_Priority And Dates______Ω",
    		satisifiedPlan: "π_Satisified  Plan______Ω"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "π_Sequence___Ω",
    	start: "π_Start___Ω",
    	end: "π_End__Ω",
    	instantaneous: "π_Instantaneous_____Ω"
    },
    
    MI_TriggerCode: {
    	caption: "π_Trigger___Ω",
    	automatic: "π_Automatic____Ω",
    	manual: "π_Manual___Ω",
    	preProgrammed: "π_Preprogrammed_____Ω"
    },
    
    ObjectReference: {
    	uuidref: "π_UUID Reference_____Ω",
    	xlinkref: "π_URL Reference_____Ω"
    },
    
    RS_Identifier: {
    	caption: "π_ID Plus Code Space______Ω",
    	code: "π_Code__Ω",
    	codeSpace: "π_Code Space____Ω"
    },
    
    SV_CouplingType: {
    	loose: "π_Loose___Ω",
    	mixed: "π_Mixed___Ω",
    	tight: "π_Tight___Ω"
    },
    
    SV_OperationMetadata: {
    	operationName: "π_Operation Name_____Ω",
    	DCP: "π_DCP__Ω",
    	connectPoint: "π_Connect Point_____Ω"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "π_ServiceType____Ω",
    	couplingType: "π_Coupling Type_____Ω",
    	containsOperations: "π_Operation Metadata______Ω",
    	operatesOn: "π_Operates On____Ω"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "π_Indeterminate Position________Ω",
    	indeterminates: {
    		before: "π_Before___Ω",
       	after: "π_After___Ω",
      	now: "π_Now__Ω",
      	unknown: "π_Unknown___Ω"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "π_GEMET Concept Keyword_______Ω",
    		tool: "π_Look Up____Ω...",
    		dialogTitle: "π_GEMET - Concept Keyword________Ω",
    		searchLabel: "π_Search___Ω:",
    		searchTip: "π_Search GEMET_____Ω"
    	},
    	theme: {
    		tool: "π_Look Up____Ω...",
    		dialogTitle: "π_GEMET - Inspire Data Theme_________Ω"
    	},
    	ioerror: "π_There was an error communicating with the GEMET service: {url}____________________Ω",
    	searching: "π_Searching GEMET______Ω...",
    	noMatch: "π_No matching results were found__________Ω.",
      languages: {
      	"bg": "π_Bulgarian____Ω",
      	"cs": "π_Czech___Ω",
      	"da": "π_Danish___Ω",
      	"nl": "π_Dutch___Ω",
      	"en": "π_English___Ω",
      	"et": "π_Estonian___Ω",
      	"fi": "π_Finnish___Ω",
      	"fr": "π_French___Ω",
      	"de": "π_German___Ω",
      	"el": "π_Greek___Ω",
      	"hu": "π_Hungarian____Ω",
      	"ga": "π_Gaelic (Irish)_____Ω",
      	"it": "π_Italian___Ω",
      	"lv": "π_Latvian___Ω",
      	"lt": "π_Lithuanian____Ω",
      	"mt": "π_Maltese___Ω",
      	"pl": "π_Polish___Ω", 
      	"pt": "π_Portuguese____Ω",
      	"ro": "π_Romanian___Ω",
      	"sk": "π_Slovak___Ω",
      	"sl": "π_Slovenian____Ω",  	
      	"es": "π_Spanish___Ω",
      	"sv": "π_Swedish___Ω"
      }
    }
   
  })
);
