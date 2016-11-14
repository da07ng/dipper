define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ä_ISO 19115 (Data)______Ü",
    		description: ""
    	},
    	service: {
    		caption: "ä_ISO 19119 (Service)_______Ü",
    		description: ""
    	},
    	gmi: {
    		caption: "ä_ISO 19115-2 (Imagery and Gridded Data)____________Ü",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ä_Reference____Ü"
    },
    
    sections: {
    	metadata: "ä_Metadata___Ü",
    	identification: "ä_Identification_____Ü",
    	distribution: "ä_Distribution_____Ü",
    	quality: "ä_Quality___Ü",
    	acquisition: "ä_Acquisition____Ü"
    },
    
    metadataSection: {
    	identifier: "ä_Identifier____Ü",
    	contact: "ä_Contact___Ü",
    	date: "ä_Date__Ü",
    	standard: "ä_Standard___Ü",
    	reference: "ä_Reference____Ü"
    },
    
    identificationSection: {
    	citation: "ä_Citation___Ü",
    	description: "ä_Description____Ü",
    	contact: "ä_Contact___Ü",
    	thumbnail: "ä_Thumbnail____Ü",
    	keywords: "ä_Keywords___Ü",
    	constraints: "ä_Constraints____Ü",
    	resource: "ä_Resource___Ü",
    	resourceTab: {
    		representation: "ä_Representation_____Ü",
    		language: "ä_Language___Ü",
    		classification: "ä_Classification_____Ü",
    		extent: "ä_Extent___Ü"
    	},
    	serviceResourceTab: {
    		serviceType: "ä_Service Type_____Ü",
    		extent: "ä_Extent___Ü",
    		couplingType: "ä_Coupling Type_____Ü",
    		operation: "ä_Operation____Ü",
    		operatesOn: "ä_Operates On____Ü"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ä_Scope___Ü",
    	conformance: "ä_Conformance____Ü",
    	lineage: "ä_Lineage___Ü"
    },
    
    acquisitionSection: {
    	requirement: "ä_Requirement____Ü",
    	objective: "ä_Objective____Ü",
    	instrument: "ä_Instrument____Ü",
    	plan: "ä_Plan__Ü",
    	operation: "ä_Operation____Ü",
    	platform: "ä_Platform___Ü",
    	environment: "ä_Environment____Ü"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ä_Abstract___Ü",
    	purpose: "ä_Purpose___Ü",
    	credit: "ä_Credits___Ü",
    	pointOfContact: "ä_Point of Contact______Ü",
    	resourceMaintenance: "ä_Maintenance____Ü",
    	graphicOverview: "ä_Graphic Overview______Ü",
    	descriptiveKeywords: "ä_Keyword Collection______Ü",
    	resourceConstraints: "ä_Constraints____Ü"
    },
    
    CI_Address: {
    	deliveryPoint: "ä_Delivery Point_____Ü",
    	city: "ä_City__Ü",
    	administrativeArea: "ä_Administrative Area_______Ü",
    	postalCode: "ä_Postal Code____Ü",
    	country: "ä_Country___Ü",
    	electronicMailAddress: "ä_E-Mail Address_____Ü"
    },
    
    CI_Citation: {
    	title: "ä_Title___Ü",
    	alternateTitle: "ä_Alternate Title______Ü",
    	identifier: "ä_Unique Resource Identifier_________Ü",
    	resource: {
    		title: "ä_Resource Title_____Ü",
    		date: "ä_Resource Date_____Ü"
    	},
    	specification: {
    		title: "ä_Specification Title_______Ü",
    		date: "ä_Specification Date______Ü"
    	}
    },
    
    CI_Contact: {
    	phone: "ä_Phone___Ü",
    	address: "ä_Address___Ü",
    	onlineResource: "ä_Online Resource______Ü",
    	hoursOfService: "ä_Hours of Service______Ü",
    	contactInstructions: "ä_Contact Instructions_______Ü"
    },
    
    CI_Date: {
    	date: "ä_Date__Ü",
    	dateType: "ä_Date Type____Ü"
    },
    
  	CI_DateTypeCode: {
  		caption: "ä_Date Type____Ü",
  		creation: "ä_Creation Date_____Ü",
  		publication: "ä_Publication Date______Ü",
  		revision: "ä_Revision Date_____Ü"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ä_Function___Ü",
    	download: "ä_Download___Ü",
    	information: "ä_Information____Ü",
    	offlineAccess: "ä_Offline Access_____Ü",
    	order: "ä_Order___Ü",
    	search: "ä_Search___Ü"
    },
    
    CI_OnlineResource: {
    	caption: "ä_Online Resource______Ü",
    	linkage: "ä_URL__Ü",
    	protocol: "ä_Protocol___Ü",
    	applicationProfile: "ä_Application Profile_______Ü",
    	name: "ä_Name__Ü",
    	description: "ä_Description____Ü",
    	sFunction: "ä_Function___Ü"
    },
    
    CI_ResponsibleParty: {
    	caption: "ä_Point of Contact______Ü",
    	individualName: "ä_Individual Name______Ü",
    	organisationName: "ä_Organisation Name______Ü",
    	positionName: "ä_Position Name_____Ü",
    	contactInfo: "ä_Contact Info_____Ü",
    	role: "ä_Role__Ü"
    },
    
    CI_RoleCode: {
    	caption: "ä_Role__Ü",
    	resourceProvider: "ä_Resource Provider______Ü",
    	custodian: "ä_Custodian____Ü",
    	owner: "ä_Owner___Ü",
    	user: "ä_User__Ü",
    	distributor: "ä_Distributor____Ü",
    	originator: "ä_Originator____Ü",
    	pointOfContact: "ä_Point of Contact______Ü",
    	principalInvestigator: "ä_Principal Investigator________Ü",
    	processor: "ä_Processor____Ü",
    	publisher: "ä_Publisher____Ü",
    	author: "ä_Author___Ü"
    },
    
    CI_Telephone: {
    	voice: "ä_Voice___Ü",
    	facsimile: "ä_Fax__Ü"
    },
    
    DCPList: {
    	caption: "ä_DCP__Ü",
    	XML: "ä_XML__Ü",
    	CORBA: "ä_CORBA___Ü",
    	JAVA: "ä_JAVA__Ü",
    	COM: "ä_COM__Ü",
    	SQL: "ä_SQL__Ü",
    	WebServices: "ä_WebServices____Ü"
    },
    
    DQ_ConformanceResult: {
    	caption: "ä_Conformance Result______Ü",
    	explanation: "ä_Explanation____Ü",
    	degree: {
    		caption: "ä_Degree___Ü",
    		validationPerformed: "ä_Validation Performed_______Ü",
    		conformant: "ä_Conformant____Ü",
    		nonConformant: "ä_Non Conformant_____Ü"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ä_Report___Ü"
    },
    
    DQ_Scope : {
    	level: "ä_Scope (quality information applies to)____________Ü",
    	levelDescription: "ä_Level Description______Ü"
    },
    
    EX_Extent: {
    	caption: "ä_Extent___Ü",
    	description: "ä_Description____Ü",
    	geographicElement: "ä_Spatial Extent_____Ü",
    	temporalElement: "ä_Temporal Extent______Ü",
    	verticalElement: "ä_Vertical Extent______Ü"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ä_West Bounding Longitude________Ü",
    	eastBoundLongitude: "ä_East Bounding Longitude________Ü",
    	southBoundLatitude: "ä_South Bounding Latitude________Ü",
    	northBoundLatitude: "ä_North Bounding Latitude________Ü"
    },
    
    EX_GeographicDescription: {
    	caption: "ä_Geographic Description________Ü"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ä_Begin Date____Ü",
    		endPosition: "ä_End Date___Ü"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ä_Minimum Value_____Ü",
    	maximumValue: "ä_Maximum Value_____Ü",
    	verticalCRS: "ä_Vertical CRS_____Ü"
    },
    
    Length: {
    	caption: "ä_Length___Ü",
    	uom: "ä_Units of Measure______Ü",
    	km: "ä_Kilometers____Ü",
    	m: "ä_Meters___Ü",
    	mi: "ä_Miles___Ü",
    	ft: "ä_Feet__Ü"
    },
    
    LI_Lineage: {
    	statement: "ä_Lineage Statement______Ü"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ä_Browse Graphic URL______Ü",
    	fileDescription: "ä_Browse Graphic Caption________Ü",
    	fileType: "ä_Browse Graphic Type_______Ü"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ä_Unclassified_____Ü",
    	restricted: "ä_Restricted____Ü",
    	confidential: "ä_Confidential_____Ü",
    	secret: "ä_Secret___Ü",
    	topSecret: "ä_Top Secret____Ü"
    },
    
    MD_Constraints: {
    	caption: "ä_Usage Constraints______Ü",
    	useLimitation: "ä_Use Limitation_____Ü"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ä_Spatial Representation Type_________Ü",
    	spatialResolution: "ä_Spatial Resolution______Ü",
    	language: "ä_Resource Language______Ü",
    	supplementalInformation: "ä_Supplemental_____Ü"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ä_Online___Ü"
    },
    
    MD_Distribution: {
    	distributionFormat: "ä_Distribution Format_______Ü",
    	transferOptions: "ä_Transfer Options______Ü"
    },
    
    MD_Format: {
    	name: "ä_Format Name____Ü",
    	version: "ä_Format Version_____Ü"
    },
    
    MD_Identifier: {
    	caption: "ä_URI__Ü",
    	identifierCaption: "ä_Identifier____Ü",
    	code: "ä_Code__Ü"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ä_Keywords___Ü",
    	thesaurusName: "ä_Associated Thesaurus_______Ü"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ä_Keyword Type_____Ü",
    	discipline: "ä_Discipline____Ü",
    	place: "ä_Place___Ü",
    	stratum: "ä_Stratum___Ü",
    	temporal: "ä_Temporal___Ü",
    	theme: "ä_Theme___Ü"
    },
    
    MD_LegalConstraints: {
    	caption: "ä_Legal Constraints______Ü",
    	accessConstraints: "ä_Access Constraints______Ü",
    	useConstraints: "ä_Use Constraints______Ü",
    	otherConstraints: "ä_Other Constraints______Ü"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ä_Frequency____Ü",
    	continual: "ä_Continual____Ü",
    	daily: "ä_Daily___Ü",
    	weekly: "ä_Weekly___Ü",
    	fortnightly: "ä_Fortnightly____Ü",
    	monthly: "ä_Monthly___Ü",
    	quarterly: "ä_Quarterly____Ü",
    	biannually: "ä_Biannually____Ü",
    	annually: "ä_Annually___Ü",
    	asNeeded: "ä_As Needed____Ü",
    	irregular: "ä_Irregular____Ü",
    	notPlanned: "ä_Not Planned____Ü",
    	unknown: "ä_Unknown___Ü"
    },
    
    MD_Metadata: {
    	caption: "ä_Metadata___Ü",
    	fileIdentifier: "ä_File Identifier______Ü",
    	language: "ä_Metadata Language______Ü",
    	hierarchyLevel: "ä_Hierarchy Level______Ü",
    	hierarchyLevelName: "ä_Hierarchy Level Name_______Ü",
    	contact: "ä_Metadata Contact______Ü",
    	dateStamp: "ä_Metadata Date_____Ü",
    	metadataStandardName: "ä_Metadata Standard Name________Ü",
    	metadataStandardVersion: "ä_Metadata Standard Version_________Ü",
    	referenceSystemInfo: "ä_Reference System______Ü",
    	identificationInfo: "ä_Identification_____Ü",
    	distributionInfo: "ä_Distribution_____Ü",
    	dataQualityInfo: "ä_Quality___Ü"
    },
    
    MD_ProgressCode: {
    	caption: "ä_Progress Code_____Ü",
    	completed: "ä_Completed____Ü",
    	historicalArchive: "ä_Historical Archive______Ü",
    	obsolete: "ä_Obsolete___Ü",
    	onGoing: "ä_On Going___Ü",
    	planned: "ä_Planned___Ü",
    	required: "ä_Required___Ü",
    	underDevelopment: "ä_Under Development______Ü"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ä_Denominator____Ü"
    },
    
    MD_Resolution: {
    	equivalentScale: "ä_Equivalent Scale______Ü",
    	distance: "ä_Distance___Ü"
    },
    
    MD_RestrictionCode: {
    	copyright: "ä_Copyright____Ü",
    	patent: "ä_Patent___Ü",
    	patentPending: "ä_Patent Pending_____Ü",
    	trademark: "ä_Trademark____Ü",
    	license: "ä_License___Ü",
    	intellectualPropertyRights: "ä_Intellectual Property Rights_________Ü",
    	restricted: "ä_Restricted____Ü",
    	otherRestrictions: "ä_Other Restrictions______Ü"
    },
    
    MD_ScopeCode: {
    	attribute: "ä_Attribute____Ü",
    	attributeType: "ä_Attribute type_____Ü",
    	collectionHardware: "ä_Collection hardware_______Ü",
    	collectionSession: "ä_Collection session______Ü",
    	dataset: "ä_Dataset___Ü",
    	series: "ä_Series___Ü",
    	nonGeographicDataset: "ä_Non geographic dataset________Ü",
    	dimensionGroup: "ä_Dimension group______Ü",
    	feature: "ä_Feature___Ü",
    	featureType: "ä_Feature type_____Ü",
    	propertyType: "ä_Property type_____Ü",
    	fieldSession: "ä_Field session_____Ü",
    	software: "ä_Software___Ü",
    	service: "ä_Service___Ü",
    	model: "ä_Model___Ü",
    	tile: "ä_Tile__Ü"
    },
    
    MD_ScopeDescription: {
    	attributes: "ä_Attributes____Ü",
    	features: "ä_Features___Ü",
    	featureInstances: "ä_Feature Instances______Ü",
    	attributeInstances: "ä_Attribute Instances_______Ü",
    	dataset: "ä_Dataset___Ü",
    	other: "ä_Other___Ü"
    },
    
    MD_SecurityConstraints: {
    	caption: "ä_Security Constraints_______Ü",
    	classification: "ä_Classification_____Ü",
    	userNote: "ä_User Note____Ü",
    	classificationSystem: "ä_Classification System_______Ü",
    	handlingDescription: "ä_Handling Description_______Ü"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ä_Spatial Representation Type_________Ü",
    	vector: "ä_Vector___Ü",
    	grid: "ä_Grid__Ü",
    	textTable: "ä_Text Table____Ü",
    	tin: "ä_TIN__Ü",
    	stereoModel: "ä_Stereo Model_____Ü",
    	video: "ä_Video___Ü"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ä_Topic Category_____Ü",
    	boundaries: "ä_Administrative and Political Boundaries_____________Ü",
    	farming: "ä_Agriculture and Farming________Ü",
    	climatologyMeteorologyAtmosphere: "ä_Atmosphere and Climatic________Ü",
    	biota: "ä_Biology and Ecology_______Ü",
    	economy: "ä_Business and Economic_______Ü",
    	planningCadastre: "ä_Cadastral____Ü",
    	society: "ä_Cultural, Society and Demography___________Ü",
    	elevation: "ä_Elevation and Derived Products__________Ü",
    	environment: "ä_Environment and Conservation_________Ü",
    	structure: "ä_Facilities and Structures_________Ü",
    	geoscientificInformation: "ä_Geological and Geophysical_________Ü",
    	health: "ä_Human Health and Disease________Ü",
    	imageryBaseMapsEarthCover: "ä_Imagery and Base Maps_______Ü",
    	inlandWaters: "ä_Inland Water Resources________Ü",
    	location: "ä_Locations and Geodetic Networks__________Ü",
    	intelligenceMilitary: "ä_Military___Ü",
    	oceans: "ä_Oceans and Estuaries_______Ü",
    	transportation: "ä_Transportation Networks________Ü",
    	utilitiesCommunication: "ä_Utilities and Communication_________Ü"
    },
    
    MI_ContextCode: {
    	caption: "ä_Context___Ü",
    	acquisition: "ä_Acquisition____Ü",
    	pass: "ä_Pass__Ü",
    	wayPoint: "ä_Waypoint___Ü"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ä_Environmental Conditions________Ü",
    	averageAirTemperature: "ä_Average Air Temperature________Ü",
    	maxRelativeHumidity: "ä_Maximum Relative Humidity_________Ü",
    	maxAltitude: "ä_Maximum Altitude______Ü",
    	meterologicalConditions: "ä_Meterological Conditions________Ü"
    },
    
    MI_Event: {
    	identifier: "ä_Event Identifier______Ü",
    	time: "ä_Time__Ü",
    	expectedObjectiveReference: "ä_Expected Objective (Objective Identifer)_____________Ü",
    	relatedSensorReference: "ä_Related Sensor (Instrument Identifer)____________Ü",
    	relatedPassReference: "ä_Related Pass (Platform Pass Identifer)____________Ü"
    },

    MI_GeometryTypeCode: {
    	point: "ä_Point___Ü",
    	linear: "ä_Linear___Ü",
    	areal: "ä_Areal___Ü",
    	strip: "ä_Strip___Ü"
    },
    
    MI_Instrument: {
    	citation: "ä_Instrument Citation_______Ü",
    	identifier: "ä_Instrument Identifier_______Ü",
    	sType: "ä_Instrument Type______Ü",
    	description: "ä_Instrument Description________Ü",
    	mountedOn: "ä_Mounted On____Ü",
    	mountedOnPlatformReference: "ä_Mounted On (Platform Identifier)___________Ü"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ä_Acquisition____Ü"
    },
    
    MI_Objective: {
    	caption: "ä_Objective____Ü",
    	identifier: "ä_Objective Identifier_______Ü",
    	priority: "ä_Priority of Target______Ü",
    	sFunction: "ä_Function of Objective_______Ü",
    	extent: "ä_Extent___Ü",
    	pass: "ä_Platform Pass_____Ü",
    	sensingInstrumentReference: "ä_Sensing Instrument (Instrument Identifier)______________Ü",
    	objectiveOccurrence: "ä_Events___Ü",
    	sections: {
    		identification: "ä_Identification_____Ü",
    		extent: "ä_Extent___Ü",
    		pass: "ä_Pass__Ü",
    		sensingInstrument: "ä_Sensing Instrument______Ü",
    		objectiveOccurrence: "ä_Events___Ü"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ä_Type (Collection Technique for Objective)_____________Ü",
    	instantaneousCollection: "ä_Instantaneous Collection________Ü",
    	persistentView: "ä_Persistent View______Ü",
    	survey: "ä_Survey___Ü"
    },
    
    MI_Operation: {
    	caption: "ä_Operation____Ü",
    	description: "ä_Operation Description_______Ü",
    	citation: "ä_Operation Citation______Ü",
    	identifier: "ä_Operation Identifier_______Ü",
    	status: "ä_Operation Status______Ü",
    	objectiveReference: "ä_Related Objective (Objective Identifier)_____________Ü",
    	planReference: "ä_Related Plan (Plan Identifier)__________Ü",
    	significantEventReference: "ä_Related Event (Event Identifier)___________Ü",
    	platformReference: "ä_Related Platform (Platform Identifier)____________Ü",
    	sections: {
    		identification: "ä_Identification_____Ü",
    		related: "ä_Related___Ü"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ä_Operation Type_____Ü",
    	real: "ä_Real__Ü",
    	simulated: "ä_Simulated____Ü",
    	synthesized: "ä_Synthesized____Ü"
    },
    
    MI_Plan: {
    	sType: "ä_Sampling Geometry for Collecting Data____________Ü",
    	status: "ä_Status of Plan_____Ü",
    	citation: "ä_Citation of Authority Requesting Collection______________Ü",
    	satisfiedRequirementReference: "ä_Satisfied Requirement (Requirement Identifier)_______________Ü",
    	operationReference: "ä_Related Operation (Operation Identifier)_____________Ü"
    },
    
    MI_Platform: {
    	citation: "ä_Platform Citation______Ü",
    	identifier: "ä_Platform Identifier_______Ü",
    	description: "ä_Description of Platform Supporting the Instrument________________Ü",
    	sponsor: "ä_Sponsor Organization for Platform___________Ü",
    	instrument: "ä_Instrument(s) mounted on the platform____________Ü",
    	instrumentReference: "ä_Instrument Identifier_______Ü",
    	sections: {
    		identification: "ä_Identification_____Ü",
    		sponsor: "ä_Sponsor___Ü",
    		instruments: "ä_Instruments____Ü"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ä_Platform Pass Identifier________Ü",
    	extent: "ä_Platform Pass Extent_______Ü",
    	relatedEventReference: "ä_Related Event (Event Identifer)__________Ü"
    },

    MI_PriorityCode: {
    	critical: "ä_Critical___Ü", 
    	highImportance: "ä_High Importance______Ü",
    	mediumImportance: "ä_Medium Importance______Ü",
    	lowImportance: "ä_Low Importance_____Ü"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ä_Requested Date Of Collection_________Ü",
    	latestAcceptableDate: "ä_Latest Acceptable Date________Ü"
    },
    
    MI_Requirement: {
    	caption: "ä_Requirement____Ü",
    	citation: "ä_Citation for Requirement Guidance Material______________Ü",
    	identifier: "ä_Requirement Identifier________Ü",
    	requestor: "ä_Requestor of Requirement________Ü",
    	recipient: "ä_Recipient of Requirement Results___________Ü",
    	priority: "ä_Requirement Priority_______Ü",
    	requestedDate: "ä_Requested Date_____Ü",
    	expiryDate: "ä_Expiry Date____Ü",
    	satisifiedPlanReference: "ä_Satisfied Plan (Plan Identifier)___________Ü",
    	sections: {
    		identification: "ä_Identification_____Ü",
    		requestor: "ä_Requestor____Ü",
    		recipient: "ä_Recipient____Ü",
    		priorityAndDates: "ä_Priority And Dates______Ü",
    		satisifiedPlan: "ä_Satisified  Plan______Ü"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ä_Sequence___Ü",
    	start: "ä_Start___Ü",
    	end: "ä_End__Ü",
    	instantaneous: "ä_Instantaneous_____Ü"
    },
    
    MI_TriggerCode: {
    	caption: "ä_Trigger___Ü",
    	automatic: "ä_Automatic____Ü",
    	manual: "ä_Manual___Ü",
    	preProgrammed: "ä_Preprogrammed_____Ü"
    },
    
    ObjectReference: {
    	uuidref: "ä_UUID Reference_____Ü",
    	xlinkref: "ä_URL Reference_____Ü"
    },
    
    RS_Identifier: {
    	caption: "ä_ID Plus Code Space______Ü",
    	code: "ä_Code__Ü",
    	codeSpace: "ä_Code Space____Ü"
    },
    
    SV_CouplingType: {
    	loose: "ä_Loose___Ü",
    	mixed: "ä_Mixed___Ü",
    	tight: "ä_Tight___Ü"
    },
    
    SV_OperationMetadata: {
    	operationName: "ä_Operation Name_____Ü",
    	DCP: "ä_DCP__Ü",
    	connectPoint: "ä_Connect Point_____Ü"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ä_ServiceType____Ü",
    	couplingType: "ä_Coupling Type_____Ü",
    	containsOperations: "ä_Operation Metadata______Ü",
    	operatesOn: "ä_Operates On____Ü"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ä_Indeterminate Position________Ü",
    	indeterminates: {
    		before: "ä_Before___Ü",
       	after: "ä_After___Ü",
      	now: "ä_Now__Ü",
      	unknown: "ä_Unknown___Ü"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ä_GEMET Concept Keyword_______Ü",
    		tool: "ä_Look Up____Ü...",
    		dialogTitle: "ä_GEMET - Concept Keyword________Ü",
    		searchLabel: "ä_Search___Ü:",
    		searchTip: "ä_Search GEMET_____Ü"
    	},
    	theme: {
    		tool: "ä_Look Up____Ü...",
    		dialogTitle: "ä_GEMET - Inspire Data Theme_________Ü"
    	},
    	ioerror: "ä_There was an error communicating with the GEMET service: {url}____________________Ü",
    	searching: "ä_Searching GEMET______Ü...",
    	noMatch: "ä_No matching results were found__________Ü.",
      languages: {
      	"bg": "ä_Bulgarian____Ü",
      	"cs": "ä_Czech___Ü",
      	"da": "ä_Danish___Ü",
      	"nl": "ä_Dutch___Ü",
      	"en": "ä_English___Ü",
      	"et": "ä_Estonian___Ü",
      	"fi": "ä_Finnish___Ü",
      	"fr": "ä_French___Ü",
      	"de": "ä_German___Ü",
      	"el": "ä_Greek___Ü",
      	"hu": "ä_Hungarian____Ü",
      	"ga": "ä_Gaelic (Irish)_____Ü",
      	"it": "ä_Italian___Ü",
      	"lv": "ä_Latvian___Ü",
      	"lt": "ä_Lithuanian____Ü",
      	"mt": "ä_Maltese___Ü",
      	"pl": "ä_Polish___Ü", 
      	"pt": "ä_Portuguese____Ü",
      	"ro": "ä_Romanian___Ü",
      	"sk": "ä_Slovak___Ü",
      	"sl": "ä_Slovenian____Ü",  	
      	"es": "ä_Spanish___Ü",
      	"sv": "ä_Swedish___Ü"
      }
    }
   
  })
);
